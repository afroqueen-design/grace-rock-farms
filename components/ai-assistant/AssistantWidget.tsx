"use client";

import { FormEvent, useMemo, useRef, useState } from "react";
import type {
  AssistantMessage,
  AssistantResponseBody,
} from "../../lib/assistant/types";

const suggestedQuestions = [
  "What products are available?",
  "How do I place an order?",
  "Where are you located?",
  "How can I contact the team?",
];

const graceAiAvatar = "\uD83D\uDC69\u200D\uD83C\uDF3E";

const welcomeMessage: AssistantMessage = {
  role: "assistant",
  content:
    "Hi, I\u2019m GraceAi \uD83C\uDF31. I can help you with Grace Rock Farms products, prices, ordering, location, delivery questions and contact details.",
};

export default function AssistantWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<AssistantMessage[]>([
    welcomeMessage,
  ]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const visibleMessages = useMemo(() => messages.slice(-10), [messages]);

  async function sendMessage(content: string) {
    const trimmedContent = content.trim();

    if (!trimmedContent || isLoading) {
      return;
    }

    const userMessage: AssistantMessage = {
      role: "user",
      content: trimmedContent,
    };
    const nextMessages = [...messages, userMessage];

    setMessages(nextMessages);
    setInput("");
    setIsLoading(true);

    try {
      const response = await fetch("/api/assistant", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          messages: nextMessages.slice(-8),
        }),
      });

      const data = (await response.json()) as AssistantResponseBody;

      setMessages((currentMessages) => [
        ...currentMessages,
        {
          role: "assistant",
          content:
            data.message ||
            "I could not answer that right now. Please contact the Grace Rock Farms team for help.",
        },
      ]);
    } catch {
      setMessages((currentMessages) => [
        ...currentMessages,
        {
          role: "assistant",
          content:
            "I could not reach the assistant right now. Please use WhatsApp or call Grace Rock Farms for help.",
        },
      ]);
    } finally {
      setIsLoading(false);
      inputRef.current?.focus();
    }
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    void sendMessage(input);
  }

  return (
    <div className="fixed bottom-24 right-5 z-[60] text-[#1E1E1E] max-sm:left-4 max-sm:right-4">
      {isOpen ? (
        <section
          aria-label="GraceAi assistant"
          className="mb-3 flex h-[min(620px,calc(100vh-9rem))] w-[380px] max-w-full flex-col overflow-hidden rounded-lg border border-black/10 bg-white shadow-2xl"
        >
          <header className="flex items-center justify-between bg-[#1E1E1E] px-4 py-3 text-white">
            <div className="flex items-center gap-3">
              <span
                aria-hidden="true"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-[#39B54A] text-2xl shadow-sm"
              >
                {graceAiAvatar}
              </span>
              <div>
                <h2 className="text-sm font-bold">GraceAi</h2>
                <p className="text-xs text-white/70">
                  Products, orders and visits
                </p>
              </div>
            </div>
            <button
              type="button"
              aria-label="Close GraceAi"
              onClick={() => setIsOpen(false)}
              className="flex h-9 w-9 items-center justify-center rounded-full text-xl leading-none transition hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-[#39B54A]"
            >
              &times;
            </button>
          </header>

          <div className="flex-1 space-y-3 overflow-y-auto bg-[#f8f8f8] px-4 py-4">
            {visibleMessages.map((message, index) => (
              <div
                key={`${message.role}-${index}-${message.content.slice(0, 12)}`}
                className={`flex ${
                  message.role === "user" ? "justify-end" : "justify-start"
                }`}
              >
                <p
                  className={`max-w-[85%] whitespace-pre-line rounded-lg px-3 py-2 text-sm leading-6 shadow-sm ${
                    message.role === "user"
                      ? "bg-[#39B54A] text-black"
                      : "bg-white text-[#1E1E1E]"
                  }`}
                >
                  {message.content}
                </p>
              </div>
            ))}

            {isLoading ? (
              <div className="flex justify-start">
                <p className="rounded-lg bg-white px-3 py-2 text-sm text-gray-600 shadow-sm">
                  Checking...
                </p>
              </div>
            ) : null}
          </div>

          <div className="border-t border-black/10 bg-white p-3">
            <div className="mb-3 flex gap-2 overflow-x-auto pb-1">
              {suggestedQuestions.map((question) => (
                <button
                  key={question}
                  type="button"
                  onClick={() => void sendMessage(question)}
                  disabled={isLoading}
                  className="shrink-0 rounded-full border border-gray-300 px-3 py-2 text-xs font-semibold text-[#1E1E1E] transition hover:border-[#39B54A] hover:text-[#2d9a3c] disabled:cursor-not-allowed disabled:opacity-60"
                >
                  {question}
                </button>
              ))}
            </div>

            <form onSubmit={handleSubmit} className="flex gap-2">
              <input
                ref={inputRef}
                value={input}
                onChange={(event) => setInput(event.target.value)}
                maxLength={700}
                placeholder="Ask about products or orders"
                className="min-w-0 flex-1 rounded-lg border border-gray-300 px-3 py-3 text-sm outline-none transition focus:border-[#39B54A]"
              />
              <button
                type="submit"
                disabled={isLoading || input.trim().length === 0}
                className="rounded-lg bg-[#1E1E1E] px-4 py-3 text-sm font-semibold text-white transition hover:bg-black disabled:cursor-not-allowed disabled:opacity-50"
              >
                Send
              </button>
            </form>
          </div>
        </section>
      ) : null}

      <button
        type="button"
        aria-label={isOpen ? "Close GraceAi" : "Talk to GraceAi"}
        title="Talk to GraceAi"
        onClick={() => setIsOpen((currentValue) => !currentValue)}
        className="group flex h-14 w-14 items-center justify-center rounded-full bg-[#1E1E1E] text-white shadow-lg shadow-black/25 transition hover:bg-black focus:outline-none focus:ring-4 focus:ring-[#39B54A]/40"
      >
        <span
          aria-hidden="true"
          className="flex h-11 w-11 items-center justify-center rounded-full bg-[#39B54A] text-2xl transition group-hover:scale-105"
        >
          {graceAiAvatar}
        </span>
      </button>
    </div>
  );
}
