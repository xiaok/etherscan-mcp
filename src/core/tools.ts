import { FastMCP } from "fastmcp";
import * as tools from "./tools/index.js";

/**
 * Register all tools with the MCP server
 * 
 * @param server The FastMCP server instance
 */
export function registerTools(server: FastMCP) {
  tools.registerAccountTools(server);
  tools.registerContractTools(server);
  tools.registerTransactionsTools(server);
  tools.registerBlocksTools(server);
  tools.registerLogsTools(server);
  tools.registerRpcTools(server);
  tools.registerTokensTools(server);
  tools.registerGasTools(server);
}