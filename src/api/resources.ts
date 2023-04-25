import { Buffer } from "buffer";
import axios from "axios";

export const imgResources = async (folder: string) => {

  
  const token = Buffer.from(
    import.meta.env.VITE_C_API_KEY +
    ":" +
    import.meta.env.VITE_C_API_SECRET
    ).toString("base64")
    console.log( import.meta.env.VITE_C_CLOUD_NAME,  token)

    const response = await axios.get(
      `/api/${
        import.meta.env.VITE_C_CLOUD_NAME
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

      console.log(response);
    return response;
  };