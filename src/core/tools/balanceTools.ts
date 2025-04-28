import { FastMCP } from "fastmcp";
import { z } from "zod";

export function registerBalanceTools(server: FastMCP) {
  server.addTool({
    name: "goodbye",
    description: "A simple goodbye tool",
    parameters: z.object({
      name: z.string().describe("Name to bid farewell to")
    }),
    execute: async (params) => {
      try {
        console.log("Executing goodbye tool with params:", params);
        return `Goodbye ${params.name}`;
      } catch (error) {
        console.error("Error in goodbye tool:", error);
        throw error;
      }
    }
  });
} 