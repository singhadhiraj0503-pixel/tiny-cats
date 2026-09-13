import type { Request, Response } from "express";
import { getMcpClient } from "../services/mcp.service.js";
import { generateAIResponse } from "../services/gemini.service.js";

export const testMCPController = async (req: Request, res: Response) => {
  const client = await getMcpClient();

  const tools = await client.listTools();

  const result = await client.callTool({
    name: "recommend_cats",
    arguments: {
      kidsFriendly: true,
      apartmentFriendly: true,
    },
  });

  const catsData = result.content[0].text;

  const prompt = `
  Available cats : 

  ${catsData}

  recommend the best cats from the given data
  `;

  const aiResponse = await generateAIResponse(prompt);

  return res.status(200).json({
    success: true,
    data: aiResponse,
  });
};
