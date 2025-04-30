import { placeOrder } from "./trade";
import { McpServer, ResourceTemplate } from "@modelcontextprotocol/sdk/server/mcp.js";
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";
import { z } from "zod";

// Create an MCP server
const server = new McpServer({
  name: "Demo",
  version: "1.0.0"
});


server.tool("Buy-Stock",
    { stock: z.string(), qty: z.number() },
    async ({ stock, qty }) => {
        placeOrder(stock, "BUY", qty);
        return {
            content: [{ type: "text", text: "Stock has been bought"}]
        }
    }
);

server.tool("Sell-Stock",
    { stock: z.string(), qty: z.number() },
    async ({ stock, qty }) => {
        placeOrder(stock, "SELL", qty);
        return {
            content: [{ type: "text", text: "Stock has been Sold"}]
        }
    }
);

const transport = new StdioServerTransport();
await server.connect(transport);