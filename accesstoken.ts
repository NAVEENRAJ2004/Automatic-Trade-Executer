import { KiteConnect } from "kiteconnect";

const apiKey = "lxg58qjs9hnjys5h";
const apiSecret = "c8azilb3v05dy14orsw8a2sqqt3b84nl";
const requestToken = "rOSdyC0HK6YDfFsj7EGhmtmg4O4Bpy67";

const kc = new KiteConnect({ api_key: apiKey });
console.log(kc.getLoginURL());
async function init() {
  try {
    await generateSession();
  } catch (err) {
    console.error(err);
  }
}

async function generateSession() {
  try {
    const response = await kc.generateSession(requestToken, apiSecret);
    console.log(response.access_token);
    kc.setAccessToken(response.access_token);
    console.log("Session generated:", response);
  } catch (err) {
    console.error("Error generating session:", err);
  }
}
init();