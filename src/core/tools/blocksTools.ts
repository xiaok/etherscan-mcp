import { FastMCP } from "fastmcp";
import { z } from "zod";
import { apiCall } from "./utils.js";

export function registerBlocksTools(server: FastMCP) {
  // Get Block And Uncle Rewards by BlockNo
  server.addTool({
    name: "block/getblockreward",
    description: "Returns the block reward and 'Uncle' block rewards.",
    parameters: z.object({
      blockno: z.string().describe("the `integer` block number to check block rewards for eg."),
      chainid: z.string().optional().default("1").describe("The chain id, default is 1")
    }),
    execute: async (params) => {
      const fullParams = { ...params, module: "block", action: "getblockreward" };
      return await apiCall(fullParams);
    }
  });

  // Get Estimated Block Countdown Time by BlockNo
  server.addTool({
    name: "block/getblockcountdown",
    description: "Returns the estimated time remaining, in seconds, until a certain block is mined.",
    parameters: z.object({
      blockno: z.string().describe("the `integer` block number to estimate time remaining to be mined eg."),
      chainid: z.string().optional().default("1").describe("The chain id, default is 1")
    }),
    execute: async (params) => {
      const fullParams = { ...params, module: "block", action: "getblockcountdown" };
      return await apiCall(fullParams);
    }
  });

  // Get Block Number by Timestamp
  server.addTool({
    name: "block/getblocknobytime",
    description: "Returns the block number that was mined at a certain timestamp.",
    parameters: z.object({
      timestamp: z.string().describe("the `integer` representing the Unix timestamp in **seconds**."),
      closest: z.string().describe("the closest available block to the provided timestamp, either `before` or `after`"),
      chainid: z.string().optional().default("1").describe("The chain id, default is 1")
    }),
    execute: async (params) => {
      const fullParams = { ...params, module: "block", action: "getblocknobytime" };
      return await apiCall(fullParams);
    }
  });

  // Get Block Transactions Count by BlockNo
  server.addTool({
    name: "block/getblocktxnscount",
    description: "Returns the number of transactions in a specified block.",
    parameters: z.object({
      blockno: z.string().describe("the `integer` block number to get the transaction count for, eg."),
      chainid: z.string().optional().default("1").describe("The chain id, default is 1")
    }),
    execute: async (params) => {
      const fullParams = { ...params, module: "block", action: "getblocktxnscount" };
      return await apiCall(fullParams);
    }
  });
} 