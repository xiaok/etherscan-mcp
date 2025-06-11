import { FastMCP } from "fastmcp";
import { z } from "zod";
import { apiCall } from "./utils.js";

export function registerTransactionsTools(server: FastMCP) {
  // Check Contract Execution Status
  server.addTool({
    name: "transaction/getstatus",
    description: "Returns the status code of a contract execution.",
    parameters: z.object({
      txhash: z.string().describe("the `string` representing the transaction hash to check the execution status"),
      chainid: z.string().optional().default("1").describe("The chain id, default is 1")
    }),
    execute: async (params) => {
      const fullParams = { ...params, module: "transaction", action: "getstatus" };
      return await apiCall(fullParams);
    }
  });

  // Check Transaction Receipt Status
  server.addTool({
    name: "transaction/gettxreceiptstatus",
    description: "Returns the status code of a transaction execution.",
    parameters: z.object({
      txhash: z.string().describe("the `string` representing the transaction hash to check the execution status"),
      chainid: z.string().optional().default("1").describe("The chain id, default is 1")
    }),
    execute: async (params) => {
      const fullParams = { ...params, module: "transaction", action: "gettxreceiptstatus" };
      return await apiCall(fullParams);
    }
  });
} 