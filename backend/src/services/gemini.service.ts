import dotenv from "dotenv";
dotenv.config();

import { GoogleGenAI } from "@google/genai";
import { config } from "../config/config.js";

const ai = new GoogleGenAI({
  apiKey: config.GEMINI_API_KEY!,
});

// const interaction = await ai.interactions.create({
//   model: "gemini-3.8-flash",
//   input: "Explain how AI works in a few words",
// });
// console.log(interaction.output_text);

export const generateAIResponse = async (prompt: string) => {
  const interaction = await ai.interactions.create({
    model: "gemini-3.5-flash",
    input: prompt,
  });

  //   console.log(interaction.output_text);
  return interaction.output_text;
};
