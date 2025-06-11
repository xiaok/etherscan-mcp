import { FastMCP } from "fastmcp";
import { z } from "zod";
import { apiCall } from "./utils.js";

export function registerTokensTools(server: FastMCP) {
  // Get ERC20-Token TotalSupply by ContractAddress
  server.addTool({
    name: "stats/tokensupply",
    description: "Returns the current amount of an ERC-20 token in circulation.",
    parameters: z.object({
      contractaddress: z.string().describe("the `contract address` of the ERC-20 token"),
      chainid: z.string().optional().default("1").describe("chain id, default 1 ( Ethereum )"),
    }),
    execute: async (params) => {
      const fullParams = { ...params, module: "stats", action: "tokensupply" };
      return await apiCall(fullParams);
    }
  });

  // Get ERC20-Token Account Balance for TokenContractAddress
  server.addTool({
    name: "account/tokenbalance",
    description: "Returns the current balance of an ERC-20 token of an address.",
    parameters: z.object({
      contractaddress: z.string().describe("the `contract address` of the ERC-20 token"),
      address: z.string().describe("the `string` representing the address to check for token balance"),
      chainid: z.string().optional().default("1").describe("chain id, default 1 ( Ethereum )"),
    }),
    execute: async (params) => {
      const fullParams = { ...params, module: "account", action: "tokenbalance", tag: "latest" };
      return await apiCall(fullParams);
    }
  });

  // Get Historical ERC20-Token TotalSupply by ContractAddress & BlockNo
  // TODO: pro api
  // server.addTool({
  //   name: "stats/tokensupplyhistory",
  //   description: "Returns the amount of an ERC-20 token in circulation at a certain block height.",
  //   parameters: z.object({
  //     contractaddress: z.string().describe("the `contract address` of the ERC-20 token"),
  //     blockno: z.string().describe("the `integer` block number to check total supply for eg."),
  //     chainid: z.string().optional().default("1").describe("chain id, default 1 ( Ethereum )"),
  //   }),
  //   execute: async (params) => {
  //     const fullParams = { ...params, module: "stats", action: "tokensupplyhistory" };
  //     return await apiCall(fullParams);
  //   }
  // });

  // Get Historical ERC20-Token Account Balance for TokenContractAddress by BlockNo
  // TODO: pro api
  // server.addTool({
  //   name: "account/tokenbalancehistory",
  //   description: "Returns the balance of an ERC-20 token of an address at a certain block height.",
  //   parameters: z.object({
  //     contractaddress: z.string().describe("the `contract address` of the ERC-20 token"),
  //     address: z.string().describe("the `string` representing the address to check for balance"),
  //     blockno: z.string().describe("the `integer` block number to check total supply for eg."),
  //     chainid: z.string().optional().default("1").describe("chain id, default 1 ( Ethereum )"),
  //   }),
  //   execute: async (params) => {
  //     const fullParams = { ...params, module: "account", action: "tokenbalancehistory" };
  //     return await apiCall(fullParams);
  //   }
  // });

  // Get Token Holder List by Contract Address
  // TODO: pro api
  // server.addTool({
  //   name: "token/tokenholderlist",
  //   description: "Return the current ERC20 token holders and number of tokens held.",
  //   parameters: z.object({
  //     contractaddress: z.string().describe("the `contract address` of the ERC-20 token"),
  //     page: z.string().optional().describe("the `integer` page number, if pagination is enabled"),
  //     offset: z.string().optional().describe("the number of transactions displayed per page"),
  //     chainid: z.string().optional().default("1").describe("chain id, default 1 ( Ethereum )"),
  //   }),
  //   execute: async (params) => {
  //     const fullParams = { ...params, module: "token", action: "tokenholderlist" };
  //     return await apiCall(fullParams);
  //   }
  // });

  // Get Token Holder Count by Contract Address
  // TODO: pro api
  // server.addTool({
  //   name: "token/tokenholdercount",
  //   description: "Return a simple count of the number of ERC20 token holders.",
  //   parameters: z.object({
  //     contractaddress: z.string().describe("the `contract address` of the ERC-20 token"),
  //     chainid: z.string().optional().default("1").describe("chain id, default 1 ( Ethereum )"),
  //   }),
  //   execute: async (params) => {
  //     const fullParams = { ...params, module: "token", action: "tokenholdercount" };
  //     return await apiCall(fullParams);
  //   }
  // });

  // Get Token Info by ContractAddress
  // TODO: pro api
  // server.addTool({
  //   name: "token/tokeninfo",
  //   description: "Returns the token info by contract address.",
  //   parameters: z.object({
  //     contractaddress: z.string().describe("the `contract address` of the token"),
  //     chainid: z.string().optional().default("1").describe("chain id, default 1 ( Ethereum )"),
  //   }),
  //   execute: async (params) => {
  //     const fullParams = { ...params, module: "token", action: "tokeninfo" };
  //     return await apiCall(fullParams);
  //   }
  // });

  // Get Address ERC20 Token Holding
  // TODO: pro api
  // server.addTool({
  //   name: "account/addresstokenbalance",
  //   description: "Returns the ERC-20 tokens and amount held by an address.",
  //   parameters: z.object({
  //     address: z.string().describe("the `string` representing the address to check for balance"),
  //     page: z.string().optional().describe("the `integer` page number, if pagination is enabled"),
  //     offset: z.string().optional().describe("the number of transactions displayed per page"),
  //     chainid: z.string().optional().default("1").describe("chain id, default 1 ( Ethereum )"),
  //   }),
  //   execute: async (params) => {
  //     const fullParams = { ...params, module: "account", action: "addresstokenbalance" };
  //     return await apiCall(fullParams);
  //   }
  // });

  // Get Address ERC721 Token Holding
  // TODO: pro api
  // server.addTool({
  //   name: "account/addresstokennftbalance",
  //   description: "Returns the ERC-721 tokens and amount held by an address.",
  //   parameters: z.object({
  //     address: z.string().describe("the `string` representing the address to check for balance"),
  //     page: z.string().optional().describe("the `integer` page number, if pagination is enabled"),
  //     offset: z.string().optional().describe("the number of transactions displayed per page"),
  //     chainid: z.string().optional().default("1").describe("chain id, default 1 ( Ethereum )"),
  //   }),
  //   execute: async (params) => {
  //     const fullParams = { ...params, module: "account", action: "addresstokennftbalance" };
  //     return await apiCall(fullParams);
  //   }
  // });

  // Get Address ERC721 Token Inventory By Contract Address
  // TODO: pro api
  // server.addTool({
  //   name: "account/addresstokennftinventory",
  //   description: "Returns the ERC-721 token inventory of an address, filtered by contract address.",
  //   parameters: z.object({
  //     address: z.string().describe("the `string` representing the address to check for inventory"),
  //     contractaddress: z.string().describe("the `string` representing the ERC-721 token contractaddress to check for inventory"),
  //     page: z.string().optional().describe("the `integer` page number, if pagination is enabled"),
  //     offset: z.string().optional().describe("the number of records displayed per page limited to **1000 records** per query, use the `page` parameter for subsequent records")
  //   }),
  //   execute: async (params) => {
  //     const fullParams = { ...params, module: "account", action: "addresstokennftinventory" };
  //     return await apiCall(fullParams);
  //   }
  // });
} 