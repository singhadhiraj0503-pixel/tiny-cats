import type { Request, Response } from "express";
import { generateAIResponse } from "../services/gemini.service.js";

export const askAIController = async (req: Request, res: Response) => {
  const prompt = req.body.prompt;
  const result = await generateAIResponse(prompt);

  return res.status(200).json({
    success: true,
    message: "AI response generated",
    data: result,
  });
};
