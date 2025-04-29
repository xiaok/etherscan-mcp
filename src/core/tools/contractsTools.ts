import { FastMCP } from "fastmcp";
import { z } from "zod";
import { apiCall } from "./utils.js";

export function registerContractTools(server: FastMCP) {
  // Get Contract ABI for Verified Contract Source Codes
  server.addTool({
    name: "contract/getabi",
    description: "Returns the Contract Application Binary Interface ( ABI ) of a verified smart contract.",
    parameters: z.object({
      address: z.string().describe("the `contract address` that has a verified source code"),
      chainid: z.string().optional().default("1").describe("chain id, default 1 ( Ethereum )"),
    }),
    execute: async (params) => {
      const fullParams = { ...params, module: "contract", action: "getabi" };
      return await apiCall(fullParams);
    }
  });

  // Get Contract Source Code for Verified Contract Source Codes
  server.addTool({
    name: "contract/getsourcecode",
    description: "Returns the Contract Source Code for Verified Contract Source Codes.",
    parameters: z.object({
      address: z.string().describe("the `contract address` that has a verified source code"),
      chainid: z.string().optional().default("1").describe("chain id, default 1 ( Ethereum )"),
    }),
    execute: async (params) => {
      const fullParams = { ...params, module: "contract", action: "getsourcecode" };
      return await apiCall(fullParams);
    }
  });

  // Get Contract Creator and Creation Tx Hash
  server.addTool({
    name: "contract/getcontractcreation",
    description: "Returns the Contract Creator and Creation Tx Hash.",
    parameters: z.object({
      contractaddresses: z.string().describe("the `contract address` to check for contract creator and creation tx hash, up to 5 at a time"),
      chainid: z.string().optional().default("1").describe("chain id, default 1 ( Ethereum )"),
    }),
    execute: async (params) => {
      const fullParams = { ...params, module: "contract", action: "getcontractcreation" };
      return await apiCall(fullParams);
    }
  });

  // Check Source Code Verification Status
  server.addTool({
    name: "contract/checkverifystatus",
    description: "Returns the success or error status of a contract verification request.",
    parameters: z.object({
      guid: z.string().describe("the unique `guid` received from the verification request"),
      chainid: z.string().optional().default("1").describe("chain id, default 1 ( Ethereum )"),
    }),
    execute: async (params) => {
      const fullParams = { ...params, module: "contract", action: "checkverifystatus" };
      return await apiCall(fullParams);
    }
  });

  // Checking Proxy Contract Verification Submission Status
  server.addTool({
    name: "contract/checkproxyverification",
    description: "Returns the status of a proxy contract verification submission.",
    parameters: z.object({
      guid: z.string().describe("the unique `guid` received from the proxy verification request"),
      chainid: z.string().optional().default("1").describe("chain id, default 1 ( Ethereum )"),
    }),
    execute: async (params) => {
      const fullParams = { ...params, module: "contract", action: "checkproxyverification" };
      return await apiCall(fullParams);
    }
  });
}
