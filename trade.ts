import { KiteConnect } from "kiteconnect";

const now = new Date();
const hours = now.getHours();

const apiKey = "Your_api_key";
let accessToken = "Your_access_token";

const kc = new KiteConnect({ api_key: apiKey });


export async function placeOrder(smb: string, transaction: "BUY" | "SELL", qty: number) {
  try { 
    kc.setAccessToken(accessToken);
    if(hours > 9 && hours < 14)  {
        await kc.placeOrder("regular", {
            exchange: "NSE",
            tradingsymbol: smb,
            transaction_type: transaction,
            quantity: qty,
            product: "CNC",
            order_type: "MARKET",
        
    });}
    else {
        await kc.placeOrder("amo", {
            exchange: "NSE",
            tradingsymbol: smb,
            transaction_type: transaction,
            quantity: qty,
            product: "CNC",
            order_type: "MARKET",
            
        });
    }
  } catch (err) {
    console.error(err);
  }
}
