import { FastMCP } from "fastmcp";
import { z } from "zod";
import { apiCall } from "./utils.js";

export function registerGasTools(server: FastMCP) {
  // Get Estimation of Confirmation Time
  server.addTool({
    name: "gas__gasestimate",
    description: "Returns the estimated time, in seconds, for a transaction to be confirmed on the blockchain.",
    parameters: z.object({
      gasprice: z.string().describe("the price paid per unit of gas, in `wei`"),
      chainid: z.string().optional().default("1").describe("chain id, default 1 ( Ethereum )"),
    }),
    execute: async (params) => {
      const fullParams = { ...params, module: "gastracker", action: "gasestimate" };
      return await apiCall(fullParams);
    }
  });

  // Get Gas Oracle
  server.addTool({
    name: "gas__gasoracle",
    description: "Returns the current Safe, Proposed and Fast gas prices.",
    parameters: z.object({
      chainid: z.string().optional().default("1").describe("chain id, default 1 ( Ethereum )"),
    }),
    execute: async (params) => {
      const fullParams = { ...params, module: "gastracker", action: "gasoracle" };
      return await apiCall(fullParams);
    }
  });

  // Get Daily Average Gas Limit
  server.addTool({
    name: "stats__dailyavggaslimit",
    description: "Returns the historical daily average gas limit of the Ethereum network.",
    parameters: z.object({
      startdate: z.string().describe("the starting date in `yyyy-MM-dd` format, eg. `2019-01-31`"),
      enddate: z.string().describe("the ending date in `yyyy-MM-dd` format, eg. `2019-02-28`"),
      sort: z.string().describe("the sorting preference, use `asc` to sort by ascending and `desc` to sort by descending"),
      chainid: z.string().optional().default("1").describe("chain id, default 1 ( Ethereum )"),
    }),
    execute: async (params) => {
      const fullParams = { ...params, module: "stats", action: "dailyavggaslimit" };
      return await apiCall(fullParams);
    }
  });

  // Get Ethereum Daily Total Gas Used
  // TODO: pro api
  // server.addTool({
  //   name: "stats/dailygasused",
  //   description: "Returns the total amount of gas used daily for transctions on the Ethereum network.",
  //   parameters: z.object({
  //     startdate: z.string().describe("the starting date in `yyyy-MM-dd` format, eg. `2019-01-31`"),
  //     enddate: z.string().describe("the ending date in `yyyy-MM-dd` format, eg. `2019-02-28`"),
  //     sort: z.string().describe("the sorting preference, use `asc` to sort by ascending and `desc` to sort by descending"),
  //     chainid: z.string().optional().default("1").describe("chain id, default 1 ( Ethereum )"),
  //   }),
  //   execute: async (params) => {
  //     const fullParams = { ...params, module: "stats", action: "dailygasused" };
  //     return await apiCall(fullParams);
  //   }
  // });

  // Get Daily Average Gas Price
  // TODO: pro api
  // server.addTool({
  //   name: "stats/dailyavggasprice",
  //   description: "Returns the daily average gas price used on the Ethereum network.",
  //   parameters: z.object({
  //     startdate: z.string().describe("the starting date in `yyyy-MM-dd` format, eg. `2019-01-31`"),
  //     enddate: z.string().describe("the ending date in `yyyy-MM-dd` format, eg. `2019-02-28`"),
  //     sort: z.string().describe("the sorting preference, use `asc` to sort by ascending and `desc` to sort by descending"),
  //     chainid: z.string().optional().default("1").describe("chain id, default 1 ( Ethereum )"),
  //   }),
  //   execute: async (params) => {
  //     const fullParams = { ...params, module: "stats", action: "dailyavggasprice" };
  //     return await apiCall(fullParams);
  //   }
  // });
} 