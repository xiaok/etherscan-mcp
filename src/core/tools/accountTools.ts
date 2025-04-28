import { FastMCP } from "fastmcp";
import { z } from "zod";

export function registerAccountTools(server: FastMCP) {
  server.addTool({
    name: "hello_world",
    description: "A simple hello world tool",
    parameters: z.object({
      name: z.string().describe("Name to greet")
    }),
    execute: async (params) => {
      try {
        console.log("Executing hello_world tool with params:", params);
        return `Hello ${params.name}`;
      } catch (error) {
        console.error("Error in hello_world tool:", error);
        throw error;
      }
    }
  });
} 