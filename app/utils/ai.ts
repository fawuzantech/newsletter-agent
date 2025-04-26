import { createOpenAI } from "@ai-sdk/openai";
import { streamText } from "ai";

const together = createOpenAI({
  apiKey: process.env.TOGETHER_API_KEY ?? "",
  baseURL: "https://api.together.xyz/v1",
});


export { together, streamText } ;