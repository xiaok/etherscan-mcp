import { FastMCP } from "fastmcp";
import { z } from "zod";
import { apiCall } from "./utils.js";

export function registerRpcTools(server: FastMCP) {
  // eth_blockNumber
  server.addTool({
    name: "proxy/eth_blockNumber",
    description: "Returns the number of most recent block.",
    parameters: z.object({
      chainid: z.string().optional().default("1").describe("chain id, default 1 ( Ethereum )"),
    }),
    execute: async (params) => {
      const fullParams = { ...params, module: "proxy", action: "eth_blockNumber" };
      return await apiCall(fullParams);
    }
  });

  // eth_getBlockByNumber
  server.addTool({
    name: "proxy/eth_getBlockByNumber",
    description: "Returns information about a block by block number.",
    parameters: z.object({
      tag: z.string().describe("the block number, in hex eg. `0xC36B3C`"),
      boolean: z.string().describe("the `boolean` value to show full transaction objects. when `true`, returns full transaction objects and their information, when `false` only returns a list of transactions."),
      chainid: z.string().optional().default("1").describe("chain id, default 1 ( Ethereum )"),
    }),
    execute: async (params) => {
      const fullParams = { ...params, module: "proxy", action: "eth_getBlockByNumber" };
      return await apiCall(fullParams);
    }
  });

  // eth_getUncleByBlockNumberAndIndex
  server.addTool({
    name: "proxy/eth_getUncleByBlockNumberAndIndex",
    description: "Returns information about a uncle by block number.",
    parameters: z.object({
      tag: z.string().describe("the block number, in hex eg. `0xC36B3C`"),
      index: z.string().describe("the position of the uncle's index in the block, in hex eg. `0x5`"),
      chainid: z.string().optional().default("1").describe("chain id, default 1 ( Ethereum )"),
    }),
    execute: async (params) => {
      const fullParams = { ...params, module: "proxy", action: "eth_getUncleByBlockNumberAndIndex" };
      return await apiCall(fullParams);
    }
  });

  // eth_getBlockTransactionCountByNumber
  server.addTool({
    name: "proxy/eth_getBlockTransactionCountByNumber",
    description: "Returns the number of transactions in a block.",
    parameters: z.object({
      tag: z.string().describe("the block number, in hex eg. `0xC36B3C`"),
      chainid: z.string().optional().default("1").describe("chain id, default 1 ( Ethereum )"),
    }),
    execute: async (params) => {
      const fullParams = { ...params, module: "proxy", action: "eth_getBlockTransactionCountByNumber" };
      return await apiCall(fullParams);
    }
  });

  // eth_getTransactionByHash
  server.addTool({
    name: "proxy/eth_getTransactionByHash",
    description: "Returns information about a transaction requested by transaction hash.",
    parameters: z.object({
      txhash: z.string().describe("the `string` representing the hash of the transaction"),
      chainid: z.string().optional().default("1").describe("chain id, default 1 ( Ethereum )"),
    }),
    execute: async (params) => {
      const fullParams = { ...params, module: "proxy", action: "eth_getTransactionByHash" };
      return await apiCall(fullParams);
    }
  });

  // eth_getTransactionByBlockNumberAndIndex
  server.addTool({
    name: "proxy/eth_getTransactionByBlockNumberAndIndex",
    description: "Returns information about a transaction requested by block number and transaction index position.",
    parameters: z.object({
      tag: z.string().describe("the block number, in hex eg. `0xC36B3C`"),
      index: z.string().describe("the position of the uncle's index in the block, in hex eg. `0x5`"),
      chainid: z.string().optional().default("1").describe("chain id, default 1 ( Ethereum )"),
    }),
    execute: async (params) => {
      const fullParams = { ...params, module: "proxy", action: "eth_getTransactionByBlockNumberAndIndex" };
      return await apiCall(fullParams);
    }
  });

  // eth_getTransactionCount
  server.addTool({
    name: "proxy/eth_getTransactionCount",
    description: "Returns the number of transactions performed by an address.",
    parameters: z.object({
      address: z.string().describe("the `string` representing the address to get transaction count"),
      tag: z.string().describe("the `string` pre-defined block parameter, either `earliest`, `pending` or `latest`"),
      chainid: z.string().optional().default("1").describe("chain id, default 1 ( Ethereum )"),
    }),
    execute: async (params) => {
      const fullParams = { ...params, module: "proxy", action: "eth_getTransactionCount" };
      return await apiCall(fullParams);
    }
  });


  // eth_getTransactionReceipt
  server.addTool({
    name: "proxy/eth_getTransactionReceipt",
    description: "Returns the receipt of a transaction that has been validated.",
    parameters: z.object({
      txhash: z.string().describe("the `string` representing the hash of the transaction"),
      chainid: z.string().optional().default("1").describe("chain id, default 1 ( Ethereum )"),
    }),
    execute: async (params) => {
      const fullParams = { ...params, module: "proxy", action: "eth_getTransactionReceipt" };
      return await apiCall(fullParams);
    }
  });

  // eth_call
  server.addTool({
    name: "proxy/eth_call",
    description: "Executes a new message call immediately without creating a transaction on the block chain.",
    parameters: z.object({
      to: z.string().describe("the `string` representing the address to interact with"),
      data: z.string().describe("the hash of the method signature and encoded parameters"),
      tag: z.string().describe("the `string` pre-defined block parameter, either `earliest`, `pending` or `latest`"),
      chainid: z.string().optional().default("1").describe("chain id, default 1 ( Ethereum )"),
    }),
    execute: async (params) => {
      const fullParams = { ...params, module: "proxy", action: "eth_call" };
      return await apiCall(fullParams);
    }
  });

  // eth_getCode
  server.addTool({
    name: "proxy/eth_getCode",
    description: "Returns code at a given address.",
    parameters: z.object({
      address: z.string().describe("the `string` representing the address to get code"),
      tag: z.string().describe("the `string` pre-defined block parameter, either `earliest`, `pending` or `latest`"),
      chainid: z.string().optional().default("1").describe("chain id, default 1 ( Ethereum )"),
    }),
    execute: async (params) => {
      const fullParams = { ...params, module: "proxy", action: "eth_getCode" };
      return await apiCall(fullParams);
    }
  });

  // eth_getStorageAt
  server.addTool({
    name: "proxy/eth_getStorageAt",
    description: "Returns the value from a storage position at a given address.",
    parameters: z.object({
      address: z.string().describe("the `string` representing the address to get code"),
      position: z.string().describe("the hex code of the position in storage, eg `0x0`"),
      tag: z.string().describe("the `string` pre-defined block parameter, either `earliest`, `pending` or `latest`"),
      chainid: z.string().optional().default("1").describe("chain id, default 1 ( Ethereum )"),
    }),
    execute: async (params) => {
      const fullParams = { ...params, module: "proxy", action: "eth_getStorageAt" };
      return await apiCall(fullParams);
    }
  });

  // eth_gasPrice
  server.addTool({
    name: "proxy/eth_gasPrice",
    description: "Returns the current price per gas in wei.",
    parameters: z.object({
      chainid: z.string().optional().default("1").describe("chain id, default 1 ( Ethereum )"),
    }),
    execute: async (params) => {
      const fullParams = { ...params, module: "proxy", action: "eth_gasPrice" };
      return await apiCall(fullParams);
    }
  });

  // eth_estimateGas
  server.addTool({
    name: "proxy/eth_estimateGas",
    description: "Makes a call or transaction, which won't be added to the blockchain and returns the used gas.",
    parameters: z.object({
      data: z.string().describe("the hash of the method signature and encoded parameters"),
      to: z.string().describe("the `string` representing the address to interact with"),
      value: z.string().optional().describe("the value sent in this transaction, in hex eg. `0xff22`"),
      gas: z.string().optional().describe("the amount of gas provided for the transaction, in hex eg. `0x5f5e0ff`"),
      gasPrice: z.string().optional().describe("the gas price paid for each unit of gas, in wei"),
      chainid: z.string().optional().default("1").describe("chain id, default 1 ( Ethereum )"),
    }),
    execute: async (params) => {
      const fullParams = { ...params, module: "proxy", action: "eth_estimateGas" };
      return await apiCall(fullParams);
    }
  });
} 