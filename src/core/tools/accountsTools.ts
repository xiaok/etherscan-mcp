import { FastMCP } from "fastmcp";
import { z } from "zod";
import { apiCall } from "./utils.js";

export function registerAccountTools(server: FastMCP) {
  // Get Ether Balance for a Single Address
  server.addTool({
    name: "account/balance",
    description: "Returns the Ether balance of a given address.",
    parameters: z.object({
      address: z.string().describe("the `string` representing the address to check for balance")
    }),
    execute: async (params) => {
      const fullParams = { ...params, module: "account", action: "balance" };
      return await apiCall(fullParams);
    }
  });

  // Get Ether Balance for Multiple Addresses in a Single Call
  server.addTool({
    name: "account/balancemulti",
    description: "Get Ether Balance for Multiple Addresses in a Single Call",
    parameters: z.object({
      address: z.string().describe("the `strings` representing the addresses to check for balance, separated by `,`\nup to **20 addresses** per call")
    }),
    execute: async (params) => {
      const fullParams = { ...params, module: "account", action: "balancemulti" };
      return await apiCall(fullParams);
    }
  });

  // Get a list of 'Normal' Transactions By Address
  server.addTool({
    name: "account/txlist",
    description: "Returns the list of 'Normal' Transactions By Address",
    parameters: z.object({
      address: z.string().describe("the `string` representing the addresses to check for balance"),
      startblock: z.string().optional().default("0").describe("the `integer` block number to start searching for transactions"),
      endblock: z.string().optional().default("99999999").describe("the `integer` block number to stop searching for transactions"),
      page: z.string().optional().default("1").describe("the `integer` page number, if pagination is enabled"),
      offset: z.string().optional().default("10").describe("the number of transactions displayed per page"),
      sort: z.string().optional().default("asc").describe("the sorting preference, use `asc` to sort by ascending and `desc` to sort by descending")
    }),
    execute: async (params) => {
      const fullParams = { ...params, module: "account", action: "txlist" };
      return await apiCall(fullParams);
    }
  });

  // Get a list of 'Internal' Transactions by Address
  server.addTool({
    name: "account/txlistinternal",
    description: "Returns the list of 'Internal' Transactions by Address",
    parameters: z.object({
      address: z.string().describe("the `string` representing the address to get internal txs for"),
      startblock: z.string().optional().default("0").describe("the `integer` block number to start searching for transactions"),
      endblock: z.string().optional().default("99999999").describe("the `integer` block number to stop searching for transactions"),
      page: z.string().optional().default("1").describe("the `integer` page number, if pagination is enabled"),
      offset: z.string().optional().default("10").describe("the number of transactions displayed per page"),
      sort: z.string().optional().default("asc").describe("the sorting preference, use `asc` to sort by ascending and `desc` to sort by descending")
    }),
    execute: async (params) => {
      const fullParams = { ...params, module: "account", action: "txlistinternal" };
      return await apiCall(fullParams);
    }
  });

  // Get 'Internal Transactions' by Transaction Hash
  server.addTool({
    name: "account/txlistinternal_byhash",
    description: "Returns the list of 'Internal' Transactions by Transaction Hash",
    parameters: z.object({
      txhash: z.string().describe("the `string` representing the transaction hash to get internal txs for")
    }),
    execute: async (params) => {
      const fullParams = { ...params, module: "account", action: "txlistinternal" };
      return await apiCall(fullParams);
    }
  });

  // Get "Internal Transactions" by Block Range
  server.addTool({
    name: "account/txlistinternal_byblock",
    description: "Returns the list of 'Internal' Transactions by Block Range",
    parameters: z.object({
      startblock: z.string().describe("the `integer` block number to start searching for transactions"),
      endblock: z.string().describe("the `integer` block number to stop searching for transactions"),
      page: z.string().optional().default("1").describe("the `integer` page number, if pagination is enabled"),
      offset: z.string().optional().default("10").describe("the number of transactions displayed per page"),
      sort: z.string().optional().default("asc").describe("the sorting preference, use `asc` to sort by ascending and `desc` to sort by descending")
    }),
    execute: async (params) => {
      const fullParams = { ...params, module: "account", action: "txlistinternal" };
      return await apiCall(fullParams);
    }
  });

  // Get a list of 'ERC20 - Token Transfer Events' by Address
  server.addTool({
    name: "account/tokentx",
    description: "Returns the list of ERC20 Token Transfer Events by Address",
    parameters: z.object({
      address: z.string().describe("the `string` representing the address to get token transfers for"),
      contractaddress: z.string().optional().describe("the `string` representing the token contract address to check for balance"),
      startblock: z.string().optional().default("0").describe("the `integer` block number to start searching for transactions"),
      endblock: z.string().optional().default("99999999").describe("the `integer` block number to stop searching for transactions"),
      page: z.string().optional().default("1").describe("the `integer` page number, if pagination is enabled"),
      offset: z.string().optional().default("10").describe("the number of transactions displayed per page"),
      sort: z.string().optional().default("asc").describe("the sorting preference, use `asc` to sort by ascending and `desc` to sort by descending")
    }),
    execute: async (params) => {
      const fullParams = { ...params, module: "account", action: "tokentx" };
      return await apiCall(fullParams);
    }
  });

  // Get a list of 'ERC721 - Token Transfer Events' by Address
  server.addTool({
    name: "account/tokennfttx",
    description: "Returns the list of ERC721 Token Transfer Events by Address",
    parameters: z.object({
      address: z.string().describe("the `string` representing the address to get NFT transfers for"),
      contractaddress: z.string().optional().describe("the `string` representing the NFT contract address to check for balance"),
      startblock: z.string().optional().default("0").describe("the `integer` block number to start searching for transactions"),
      endblock: z.string().optional().default("99999999").describe("the `integer` block number to stop searching for transactions"),
      page: z.string().optional().default("1").describe("the `integer` page number, if pagination is enabled"),
      offset: z.string().optional().default("10").describe("the number of transactions displayed per page"),
      sort: z.string().optional().default("asc").describe("the sorting preference, use `asc` to sort by ascending and `desc` to sort by descending")
    }),
    execute: async (params) => {
      const fullParams = { ...params, module: "account", action: "tokennfttx" };
      return await apiCall(fullParams);
    }
  });

  // Get a list of 'ERC1155 - Token Transfer Events' by Address
  server.addTool({
    name: "account/token1155tx",
    description: "Returns the list of ERC1155 Token Transfer Events by Address",
    parameters: z.object({
      address: z.string().describe("the `string` representing the address to get ERC1155 transfers for"),
      contractaddress: z.string().optional().describe("the `string` representing the ERC1155 contract address to check for balance"),
      startblock: z.string().optional().default("0").describe("the `integer` block number to start searching for transactions"),
      endblock: z.string().optional().default("99999999").describe("the `integer` block number to stop searching for transactions"),
      page: z.string().optional().default("1").describe("the `integer` page number, if pagination is enabled"),
      offset: z.string().optional().default("10").describe("the number of transactions displayed per page"),
      sort: z.string().optional().default("asc").describe("the sorting preference, use `asc` to sort by ascending and `desc` to sort by descending")
    }),
    execute: async (params) => {
      const fullParams = { ...params, module: "account", action: "token1155tx" };
      return await apiCall(fullParams);
    }
  });

  // Get list of Blocks Validated by Address
  server.addTool({
    name: "account/getminedblocks",
    description: "Returns the list of blocks validated by an address.",
    parameters: z.object({
      address: z.string().describe("the `string` representing the address to check for validated blocks"),
      blocktype: z.string().optional().default("blocks").describe("the `string` pre-defined block type, either `blocks` for canonical blocks or `uncles` for uncle blocks only"),
      page: z.string().optional().default("1").describe("the `integer` page number, if pagination is enabled"),
      offset: z.string().optional().default("10").describe("the number of blocks displayed per page")
    }),
    execute: async (params) => {
      const fullParams = { ...params, module: "account", action: "getminedblocks" };
      return await apiCall(fullParams);
    }
  });

  // Get Beacon Chain Withdrawals by Address and Block Range
  server.addTool({
    name: "account/txsBeaconWithdrawal",
    description: "Returns the beacon chain withdrawals made to an address.",
    parameters: z.object({
      address: z.string().describe("the `string` representing the address to check for beacon withdrawals"),
      startblock: z.string().optional().default("0").describe("the `integer` block number to start searching for transactions"),
      endblock: z.string().optional().default("99999999").describe("the `integer` block number to stop searching for transactions"),
      page: z.string().optional().default("1").describe("the `integer` page number, if pagination is enabled"),
      offset: z.string().optional().default("100").describe("the number of withdrawals displayed per page"),
      sort: z.string().optional().default("asc").describe("the sorting preference, use `asc` to sort by ascending and `desc` to sort by descending")
    }),
    execute: async (params) => {
      const fullParams = { ...params, module: "account", action: "txsBeaconWithdrawal" };
      return await apiCall(fullParams);
    }
  });

  // Get Historical Ether Balance for a Single Address By BlockNo
  server.addTool({
    name: "account/balancehistory",
    description: "Returns the balance of an address at a certain block height.",
    parameters: z.object({
      address: z.string().describe("the `string` representing the address to check for balance"),
      blockno: z.string().describe("the `integer` block number to check balance for eg.")
    }),
    execute: async (params) => {
      const fullParams = { ...params, module: "account", action: "balancehistory" };
      return await apiCall(fullParams);
    }
  });
} 
