// for a full working demo of Netlify Identity + Functions, see https://netlify-gotrue-in-react.netlify.com/

const fetch = require("node-fetch");
import { Buffer } from "buffer";


export const index = async (folder: string) => {
  const token = Buffer.from(
    process.env.VITE_C_API_KEY +
    ":" +
    process.env.VITE_C_API_SECRET
    ).toString("base64")

    const response = await fetch.get(
      `/api/${
        process.env.VITE_C_CLOUD_NAME
      }/resources/by_asset_folder?asset_folder=g shang garden/${folder}&max_results=500`,
      {
        headers: {
          Authorization: `Basic ${token}`,
        },
      }
    )
      .then((result) => {
        return result.data
      })
      .catch((err) => console.log(err));
    return response;
  };
