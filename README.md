# @xiaok/etherscan-mcp

[![smithery badge](https://smithery.ai/badge/@xiaok/etherscan-mcp-server)](https://smithery.ai/server/@xiaok/etherscan-mcp-server)

A dynamic MCP server for interacting with Etherscan's API and services.

<a href="https://glama.ai/mcp/servers/@xiaok/etherscan-mcp">
  <img width="380" height="200" src="https://glama.ai/mcp/servers/@xiaok/etherscan-mcp/badge" alt="Etherscan MCP server" />
</a>

## Running Your Server

### Test with `mcp-cli`

The fastest way to test and debug your server is with `fastmcp dev`:

```bash
npx fastmcp dev src/index.ts
```

This will run your server with [`mcp-cli`](https://github.com/wong2/mcp-cli) for testing and debugging your MCP server in the terminal.

### Inspect with `MCP Inspector`

Another way is to use the official [`MCP Inspector`](https://modelcontextprotocol.io/docs/tools/inspector) to inspect your server with a Web UI:

```bash
npx npx fastmcp inspect src/index.ts
```

## FAQ

### How to use with Claude Desktop?

Follow the guide https://modelcontextprotocol.io/quickstart/user and add the following configuration:

```json
{
  "mcpServers": {
    "etherscan_mcp": {
      "command": "npx",
      "args": ["tsx", "/PATH/TO/YOUR_PROJECT/src/index.ts"],
      "env": {
        "ETHERSCAN_API_KEY": "********"
      }
    }
  }
}
```

## API Doc

https://docs.etherscan.io/etherscan-v2  

support chain list: https://docs.etherscan.io/etherscan-v2/getting-started/supported-chains  

Please note that not all endpoints are supported by all chains. Please find support list here: https://forms.blockscan.com/public/grid/3E9QiN00NLhCQVibiP3Z-Bpqhmd7zGXsgapEKJupxiI  

## TODO

1. support pro api
