import type { TextContent } from "fastmcp";

// Helper function to format successful API responses
function formatResponse(data: any): TextContent {
  return {
    type: "text",
    text: JSON.stringify(data.result),
  };
}

// Helper function for making API requests to Etherscan
export async function makeApiRequest(params = {}) {
  const apiKey = process.env.ETHERSCAN_API_KEY;
  if (!apiKey) {
    throw new Error("ETHERSCAN_API_KEY environment variable is not set");
  }

  // Build query parameters
  const queryParams = new URLSearchParams();
  Object.entries(params).forEach(([key, value]) => {
    if (value !== undefined && value !== null) {
      queryParams.append(key, value.toString());
    }
  });

  queryParams.append("apikey", apiKey);

  const url = `https://api.etherscan.io/v2/api${
    queryParams.toString() ? `?${queryParams.toString()}` : ""
  }`;

  const response = await fetch(url, {
    method: "GET",
    headers: {
      Accept: "application/json",
    },
  });

  if (!response.ok) {
    throw new Error(
      `Error fetching data from Etherscan: ${response.statusText}`
    );
  }

  return await response.json();
}

export async function apiCall(params = {}): Promise<TextContent> {
  const data = await makeApiRequest(params);
  return formatResponse(data);
}
