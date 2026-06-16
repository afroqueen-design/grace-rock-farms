export type AssistantMessage = {
  role: "user" | "assistant";
  content: string;
};

export type AssistantRequestBody = {
  messages: AssistantMessage[];
};

export type AssistantResponseBody = {
  message: string;
  productDataAvailable: boolean;
};

export type AssistantProductSummary = {
  name: string;
  category: string;
  price: string;
  stockStatus: string;
  description: string;
  url: string;
};

export type AssistantProductContext = {
  productDataAvailable: boolean;
  productDataError: string | null;
  products: AssistantProductSummary[];
};
