import { FastMCP } from "fastmcp";
import { z } from "zod";
import { apiCall } from "./utils.js";

export function registerStatsTools(server: FastMCP) {
  // Get Total Supply of Ether
  server.addTool({
    name: "stats/ethsupply",
    description: "Returns the current amount of Ether in circulation excluding ETH2 Staking rewards and EIP1559 burnt fees.",
    parameters: z.object({}),
    execute: async (params) => {
      const fullParams = { ...params, module: "stats", action: "ethsupply" };
      return await apiCall(fullParams);
    }
  });

  // Get Total Supply of Ether 2
  server.addTool({
    name: "stats/ethsupply2",
    description: "Returns the current amount of Ether in circulation, ETH2 Staking rewards, EIP1559 burnt fees, and total withdrawn ETH from the beacon chain.",
    parameters: z.object({}),
    execute: async (params) => {
      const fullParams = { ...params, module: "stats", action: "ethsupply2" };
      return await apiCall(fullParams);
    }
  });

  // Get Ether Last Price
  server.addTool({
    name: "stats/ethprice",
    description: "Returns the latest price of 1 ETH.",
    parameters: z.object({}),
    execute: async (params) => {
      const fullParams = { ...params, module: "stats", action: "ethprice" };
      return await apiCall(fullParams);
    }
  });

  // Get Ethereum Nodes Size
  server.addTool({
    name: "stats/chainsize",
    description: "Returns the size of the Ethereum blockchain, in bytes, over a date range.",
    parameters: z.object({
      startdate: z.string().describe("the starting date in `yyyy-MM-dd` format, eg. `2019-02-01`"),
      enddate: z.string().describe("the ending date in `yyyy-MM-dd` format, eg. `2019-02-28`"),
      clienttype: z.string().describe("the Ethereum node client to use, either `geth` or `parity`"),
      syncmode: z.string().describe("the type of node to run, either `default` or `archive`"),
      sort: z.string().describe("the sorting preference, use `asc` to sort by ascending and `desc` to sort by descending")
    }),
    execute: async (params) => {
      const fullParams = { ...params, module: "stats", action: "chainsize" };
      return await apiCall(fullParams);
    }
  });

  // Get Total Nodes Count
  server.addTool({
    name: "stats/nodecount",
    description: "Returns the total number of discoverable Ethereum nodes.",
    parameters: z.object({}),
    execute: async (params) => {
      const fullParams = { ...params, module: "stats", action: "nodecount" };
      return await apiCall(fullParams);
    }
  });

  // Get Daily Network Transaction Fee
  server.addTool({
    name: "stats/dailytxnfee",
    description: "Returns the amount of transaction fees paid to miners per day.",
    parameters: z.object({
      startdate: z.string().describe("the starting date in `yyyy-MM-dd` format, eg. `2019-02-01`"),
      enddate: z.string().describe("the ending date in `yyyy-MM-dd` format, eg. `2019-02-28`"),
      sort: z.string().describe("the sorting preference, use `asc` to sort by ascending and `desc` to sort by descending")
    }),
    execute: async (params) => {
      const fullParams = { ...params, module: "stats", action: "dailytxnfee" };
      return await apiCall(fullParams);
    }
  });

  // Get Daily New Address Count
  server.addTool({
    name: "stats/dailynewaddress",
    description: "Returns the number of new Ethereum addresses created per day.",
    parameters: z.object({
      startdate: z.string().describe("the starting date in `yyyy-MM-dd` format, eg. `2019-02-01`"),
      enddate: z.string().describe("the ending date in `yyyy-MM-dd` format, eg. `2019-02-28`"),
      sort: z.string().describe("the sorting preference, use `asc` to sort by ascending and `desc` to sort by descending")
    }),
    execute: async (params) => {
      const fullParams = { ...params, module: "stats", action: "dailynewaddress" };
      return await apiCall(fullParams);
    }
  });

  // Get Daily Network Utilization
  server.addTool({
    name: "stats/dailynetutilization",
    description: "Returns the daily average gas used over gas limit, in percentage.",
    parameters: z.object({
      startdate: z.string().describe("the starting date in `yyyy-MM-dd` format, eg. `2019-02-01`"),
      enddate: z.string().describe("the ending date in `yyyy-MM-dd` format, eg. `2019-02-28`"),
      sort: z.string().describe("the sorting preference, use `asc` to sort by ascending and `desc` to sort by descending")
    }),
    execute: async (params) => {
      const fullParams = { ...params, module: "stats", action: "dailynetutilization" };
      return await apiCall(fullParams);
    }
  });

  // Get Daily Average Network Hash Rate
  server.addTool({
    name: "stats/dailyavghashrate",
    description: "Returns the historical measure of processing power of the Ethereum network.",
    parameters: z.object({
      startdate: z.string().describe("the starting date in `yyyy-MM-dd` format, eg. `2019-02-01`"),
      enddate: z.string().describe("the ending date in `yyyy-MM-dd` format, eg. `2019-02-28`"),
      sort: z.string().describe("the sorting preference, use `asc` to sort by ascending and `desc` to sort by descending")
    }),
    execute: async (params) => {
      const fullParams = { ...params, module: "stats", action: "dailyavghashrate" };
      return await apiCall(fullParams);
    }
  });

  // Get Daily Transaction Count
  server.addTool({
    name: "stats/dailytx",
    description: "Returns the number of transactions performed on the Ethereum blockchain per day.",
    parameters: z.object({
      startdate: z.string().describe("the starting date in `yyyy-MM-dd` format, eg. `2019-02-01`"),
      enddate: z.string().describe("the ending date in `yyyy-MM-dd` format, eg. `2019-02-28`"),
      sort: z.string().describe("the sorting preference, use `asc` to sort by ascending and `desc` to sort by descending")
    }),
    execute: async (params) => {
      const fullParams = { ...params, module: "stats", action: "dailytx" };
      return await apiCall(fullParams);
    }
  });

  // Get Daily Average Network Difficulty
  server.addTool({
    name: "stats/dailyavgnetdifficulty",
    description: "Returns the historical mining difficulty of the Ethereum network.",
    parameters: z.object({
      startdate: z.string().describe("the starting date in `yyyy-MM-dd` format, eg. `2019-02-01`"),
      enddate: z.string().describe("the ending date in `yyyy-MM-dd` format, eg. `2019-02-28`"),
      sort: z.string().describe("the sorting preference, use `asc` to sort by ascending and `desc` to sort by descending")
    }),
    execute: async (params) => {
      const fullParams = { ...params, module: "stats", action: "dailyavgnetdifficulty" };
      return await apiCall(fullParams);
    }
  });

  // Get Ether Historical Price
  server.addTool({
    name: "stats/ethdailyprice",
    description: "Returns the historical price of 1 ETH.",
    parameters: z.object({
      startdate: z.string().describe("the starting date in `yyyy-MM-dd` format, eg. `2019-02-01`"),
      enddate: z.string().describe("the ending date in `yyyy-MM-dd` format, eg. `2019-02-28`"),
      sort: z.string().describe("the sorting preference, use `asc` to sort by ascending and `desc` to sort by descending")
    }),
    execute: async (params) => {
      const fullParams = { ...params, module: "stats", action: "ethdailyprice" };
      return await apiCall(fullParams);
    }
  });
} 