import { FastMCP } from "fastmcp";
import { z } from "zod";
import { apiCall } from "./utils.js";

export function registerAccountTools(server: FastMCP) {
  server.addTool({
    name: "account/balance",
    description: "Returns the Ether balance of a given address.",
    parameters: z.object({
      address: z.string().describe("the string representing the address to check for balance")
    }),
    execute: async (params) => {

      const fullParams = {
        ...params, 
        module: "account", 
        action: "balance" 
      };
      return await apiCall(fullParams);
    }
  });

  server.addTool({
    name: "account/balancemulti",
    description: "Get Ether Balance for Multiple Addresses in a Single Call",
    parameters: z.object({
      address: z.string().describe("the string representing the address to check for balance")
    }),
    execute: async (params) => {

      const fullParams = {
        ...params, 
        module: "account", 
        action: "balancemulti" 
      };
      return await apiCall(fullParams);
    }
  });

} 
