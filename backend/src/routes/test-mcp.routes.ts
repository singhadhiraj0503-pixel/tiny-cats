import express from "express";
import { testMCPController } from "../controllers/test-mcp.controller.js";

const mcpRouter = express.Router();

mcpRouter.get("/test-mcp", testMCPController);

export default mcpRouter;
