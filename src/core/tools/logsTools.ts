import { FastMCP } from "fastmcp";
import { z } from "zod";
import { apiCall } from "./utils.js";

export function registerLogsTools(server: FastMCP) {
  // Get Event Logs by Address
  server.addTool({
    name: "logs/getLogsByAddress",
    description: "Returns the event logs from an address, with optional filtering by block range.",
    parameters: z.object({
      address: z.string().describe("the `string` representing the address to check for logs"),
      fromBlock: z.string().optional().describe("the `integer` block number to start searching for logs eg. `12878196`"),
      toBlock: z.string().optional().describe("the `integer` block number to stop searching for logs eg. `12879196`"),
      page: z.string().optional().default("1").describe("the `integer` page number, if pagination is enabled"),
      offset: z.string().optional().default("1000").describe("the number of transactions displayed per page limited to **1000 records** per query, use the `page` parameter for subsequent records"),
      chainid: z.string().optional().default("1").describe("The chain id, default is 1")
    }),
    execute: async (params) => {
      const fullParams = { ...params, module: "logs", action: "getLogs" };
      return await apiCall(fullParams);
    }
  });

  // Get Event Logs by Topics
  server.addTool({
    name: "logs/getLogsByTopics",
    description: "Returns the events log in a block range, filtered by topics.",
    parameters: z.object({
      fromBlock: z.string().describe("the `integer` block number to start searching for logs eg. `12878196`"),
      toBlock: z.string().describe("the `integer` block number to stop searching for logs eg. `12879196`"),
      topic0: z.string().optional().describe("the topic numbers to search for limited to`topic0`, `topic1`, `topic2`, `topic3`"),
      topic1: z.string().optional().describe("the topic numbers to search for limited to`topic0`, `topic1`, `topic2`, `topic3`"),
      topic2: z.string().optional().describe("the topic numbers to search for limited to`topic0`, `topic1`, `topic2`, `topic3`"),
      topic3: z.string().optional().describe("the topic numbers to search for limited to`topic0`, `topic1`, `topic2`, `topic3`"),
      topic0_1_opr: z.string().optional().describe("the topic operator when multiple topic combinations are used limited to `and` or `or`"),
      topic1_2_opr: z.string().optional().describe("the topic operator when multiple topic combinations are used limited to `and` or `or`"),
      topic2_3_opr: z.string().optional().describe("the topic operator when multiple topic combinations are used limited to `and` or `or`"),
      topic0_2_opr: z.string().optional().describe("the topic operator when multiple topic combinations are used limited to `and` or `or`"),
      topic0_3_opr: z.string().optional().describe("the topic operator when multiple topic combinations are used limited to `and` or `or`"),
      topic1_3_opr: z.string().optional().describe("the topic operator when multiple topic combinations are used limited to `and` or `or`"),
      page: z.string().optional().describe("the `integer` page number, if pagination is enabled"),
      offset: z.string().optional().describe("the number of transactions displayed per page limited to **1000 records** per query, use the `page` parameter for subsequent records"),
      chainid: z.string().optional().default("1").describe("The chain id, default is 1")
    }),
    execute: async (params) => {
      const fullParams = { ...params, module: "logs", action: "getLogs" };
      return await apiCall(fullParams);
    }
  });

  // Get Event Logs by Address filtered by Topics
  server.addTool({
    name: "logs/getLogsByAddressAndTopics",
    description: "Returns the event logs from an address, filtered by topics and block range.",
    parameters: z.object({
      fromBlock: z.string().describe("the `integer` block number to start searching for logs eg. `12878196`"),
      toBlock: z.string().describe("the `integer` block number to stop searching for logs eg. `12879196`"),
      address: z.string().describe("the `string` representing the address to check for logs"),
      topic0: z.string().optional().describe("the topic numbers to search for limited to`topic0`, `topic1`, `topic2`, `topic3`"),
      topic1: z.string().optional().describe("the topic numbers to search for limited to`topic0`, `topic1`, `topic2`, `topic3`"),
      topic2: z.string().optional().describe("the topic numbers to search for limited to`topic0`, `topic1`, `topic2`, `topic3`"),
      topic3: z.string().optional().describe("the topic numbers to search for limited to`topic0`, `topic1`, `topic2`, `topic3`"),
      topic0_1_opr: z.string().optional().describe("the topic operator when multiple topic combinations are used limited to `and` or `or`"),
      topic1_2_opr: z.string().optional().describe("the topic operator when multiple topic combinations are used limited to `and` or `or`"),
      topic2_3_opr: z.string().optional().describe("the topic operator when multiple topic combinations are used limited to `and` or `or`"),
      topic0_2_opr: z.string().optional().describe("the topic operator when multiple topic combinations are used limited to `and` or `or`"),
      topic0_3_opr: z.string().optional().describe("the topic operator when multiple topic combinations are used limited to `and` or `or`"),
      topic1_3_opr: z.string().optional().describe("the topic operator when multiple topic combinations are used limited to `and` or `or`"),
      page: z.string().optional().describe("the `integer` page number, if pagination is enabled"),
      offset: z.string().optional().describe("the number of transactions displayed per page limited to **1000 records** per query, use the `page` parameter for subsequent records"),
      chainid: z.string().optional().default("1").describe("The chain id, default is 1")
    }),
    execute: async (params) => {
      const fullParams = { ...params, module: "logs", action: "getLogs" };
      return await apiCall(fullParams);
    }
  });
} 