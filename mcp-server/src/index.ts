import { McpServer } from "@modelcontextprotocol/server";
import { StdioServerTransport } from "@modelcontextprotocol/server/stdio";
import { z } from "zod";
import {
  getAllCatsTool,
  recommendCatsTool,
} from "./tools/recommendCats.tool.ts";

const NWS_API_BASE = "https://api.weather.gov";
const USER_AGENT = "weather-app/1.0";

// Create server instance
const server = new McpServer({
  name: "tiny-cats",
  version: "1.0.0",
});

server.registerTool(
  "recommend_cats",
  {
    title: "recommend_cats",
    description: "Recommend the best cat breed according to the given inputs",

    inputSchema: {
      kidsFriendly: z.boolean(),
      apartmentFriendly: z.boolean(),
    },
  },
  async ({ kidsFriendly, apartmentFriendly }) => {
    const result = await recommendCatsTool(kidsFriendly, apartmentFriendly);

    return {
      content: [
        {
          type: "text",
          text: JSON.stringify(result),
        },
      ],
    };
  },
);

server.registerTool(
  "get_all_cats",
  {
    title: "all cats",
    description: "Get all cats data",
  },

  async () => {
    const result = await getAllCatsTool();

    return {
      content: [
        {
          type: "text",
          text: JSON.stringify(result),
        },
      ],
    };
  },
);

const transport = new StdioServerTransport();

await server.connect(transport);

console.error("tiny cats MCP running...");
