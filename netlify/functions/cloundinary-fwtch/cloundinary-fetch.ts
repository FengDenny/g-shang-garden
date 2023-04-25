import { Handler } from '@netlify/functions'
import axios from 'axios';

export const handler: Handler = async (folder)  => {
  const token = Buffer.from(
    process.env.VITE_C_API_KEY +
    ":" +
    process.env.VITE_C_API_SECRET
    ).toString("base64")

    const response = await axios.get(
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
  
}