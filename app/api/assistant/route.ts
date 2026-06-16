import { GoogleGenAI, type Content } from "@google/genai";
import { buildAssistantSystemPrompt } from "../../../lib/assistant/prompts";
import { getAssistantProductContext } from "../../../lib/assistant/products";
import type {
  AssistantMessage,
  AssistantRequestBody,
  AssistantResponseBody,
} from "../../../lib/assistant/types";

export const runtime = "nodejs";

const DEFAULT_MODEL = "gemini-3.5-flash";
const MAX_MESSAGES = 8;
const MAX_MESSAGE_LENGTH = 700;

function isAssistantMessage(value: unknown): value is AssistantMessage {
  if (!value || typeof value !== "object") {
    return false;
  }

  const message = value as Partial<AssistantMessage>;

  return (
    (message.role === "user" || message.role === "assistant") &&
    typeof message.content === "string" &&
    message.content.trim().length > 0
  );
}

function parseMessages(body: unknown): AssistantMessage[] | null {
  if (!body || typeof body !== "object") {
    return null;
  }

  const requestBody = body as Partial<AssistantRequestBody>;

  if (!Array.isArray(requestBody.messages)) {
    return null;
  }

  const messages = requestBody.messages.filter(isAssistantMessage);

  if (messages.length === 0) {
    return null;
  }

  return messages.slice(-MAX_MESSAGES).map((message) => ({
    role: message.role,
    content: message.content.trim().slice(0, MAX_MESSAGE_LENGTH),
  }));
}

function jsonResponse(body: AssistantResponseBody, init?: ResponseInit) {
  return Response.json(body, init);
}

function toGeminiContents(messages: AssistantMessage[]): Content[] {
  return messages.map((message) => ({
    role: message.role === "assistant" ? "model" : "user",
    parts: [
      {
        text: message.content,
      },
    ],
  }));
}

function stringifyUnknown(value: unknown) {
  if (typeof value === "string") {
    return value;
  }

  try {
    return JSON.stringify(value);
  } catch {
    return String(value);
  }
}

async function getResponseBodyFromError(error: unknown) {
  if (!error || typeof error !== "object") {
    return null;
  }

  const response = (error as { response?: unknown }).response;

  if (response instanceof Response) {
    return response.clone().text();
  }

  return null;
}

async function logGeminiError(error: unknown, model: string) {
  const errorMessage =
    error instanceof Error ? error.message : stringifyUnknown(error);
  const errorStack = error instanceof Error ? error.stack : null;
  const errorStatus =
    error && typeof error === "object" && "status" in error
      ? (error as { status: unknown }).status
      : null;
  const responseBody = await getResponseBodyFromError(error);

  console.error("Gemini model:", model);
  console.error("Gemini API error message:", errorMessage);
  console.error("Gemini API error status:", errorStatus);
  console.error("Gemini error stack:", errorStack);
  console.error("Gemini response body:", responseBody ?? "not available");
}

export async function POST(request: Request) {
  const apiKey = process.env.GEMINI_API_KEY;
  const model = process.env.GEMINI_ASSISTANT_MODEL || DEFAULT_MODEL;

  console.log("Gemini key present:", Boolean(apiKey), "Gemini model:", model);

  if (!apiKey) {
    return jsonResponse(
      {
        message:
          "The Grace Rock Farms assistant is not configured yet. Please contact the team on WhatsApp or phone for help.",
        productDataAvailable: false,
      },
      { status: 503 },
    );
  }

  let body: unknown;

  try {
    body = await request.json();
  } catch {
    return jsonResponse(
      {
        message: "Please send a valid question for the assistant.",
        productDataAvailable: false,
      },
      { status: 400 },
    );
  }

  const messages = parseMessages(body);

  if (!messages) {
    return jsonResponse(
      {
        message: "Please ask a question so the assistant can help.",
        productDataAvailable: false,
      },
      { status: 400 },
    );
  }

  const productContext = await getAssistantProductContext();
  const systemPrompt = buildAssistantSystemPrompt(productContext);

  try {
    const ai = new GoogleGenAI({ apiKey });
    const response = await ai.models.generateContent({
      model,
      contents: toGeminiContents(messages),
      config: {
        systemInstruction: systemPrompt,
        temperature: 0.2,
        maxOutputTokens: 350,
      },
    });
    const message = response.text?.trim();

    if (!message) {
      throw new Error("Gemini returned an empty assistant response.");
    }

    return jsonResponse({
      message,
      productDataAvailable: productContext.productDataAvailable,
    });
  } catch (error) {
    await logGeminiError(error, model);

    return jsonResponse(
      {
        message:
          "I could not answer that right now. Please contact Grace Rock Farms on WhatsApp, phone, or email and the team will help.",
        productDataAvailable: productContext.productDataAvailable,
      },
      { status: 502 },
    );
  }
}
