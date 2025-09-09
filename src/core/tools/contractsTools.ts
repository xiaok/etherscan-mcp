import { FastMCP } from "fastmcp";
import { z } from "zod";
import { apiCall, makeApiRequest } from "./utils.js";

export function registerContractTools(server: FastMCP) {
  // Get Contract ABI for Verified Contract Source Codes
  server.addTool({
    name: "contract__getabi",
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
    name: "contract__getsourcecode",
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
    name: "contract__getcontractcreation",
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
    name: "contract__checkverifystatus",
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

  // Check if Contract is Proxy and Get Implementation Address
  server.addTool({
    name: "contract__checkproxy",
    description: "Checks if a contract is a proxy contract and returns the implementation address if it is.",
    parameters: z.object({
      address: z.string().describe("the contract address to check for proxy pattern"),
      chainid: z.string().optional().default("1").describe("chain id, default 1 ( Ethereum )"),
    }),
    execute: async (params) => {
      const fullParams = { ...params, module: "contract", action: "getsourcecode" };
      const response = await makeApiRequest(fullParams);
      
      if (response.result && response.result.length > 0) {
        const contractData = response.result[0];
        const isProxy = contractData.Proxy === "1";
        const implementationAddress = contractData.Implementation || "";
        
        return {
          type: "text",
          text: JSON.stringify({
            address: params.address,
            isProxy: isProxy,
            implementationAddress: implementationAddress,
            contractName: contractData.ContractName || "",
            proxyType: isProxy ? (contractData.Implementation ? "EIP-1967" : "Custom") : "Not a proxy"
          }),
        };
      } else {
        return {
          type: "text",
          text: JSON.stringify({
            address: params.address,
            isProxy: false,
            implementationAddress: "",
            error: "Contract source code not verified or not found"
          }),
        };
      }
    }
  });
}
