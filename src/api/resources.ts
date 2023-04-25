import { Buffer } from "buffer";

export const imgResources = async (folder: string) => {

  console.log( import.meta.env.VITE_C_CLOUD_NAME,   import.meta.env.VITE_C_API_KEY +
    ":" +
    import.meta.env.VITE_C_API_SECRET)

    const response = await fetch(
      `/api/${
        import.meta.env.VITE_C_CLOUD_NAME
      }/resources/by_asset_folder?asset_folder=g shang garden/${folder}&max_results=500`,
      {
        headers: {
          Authorization: `Basic ${Buffer.from(
            import.meta.env.VITE_C_API_KEY +
              ":" +
              import.meta.env.VITE_C_API_SECRET
          ).toString("base64")}`,
        },
      }
    )
      .then((result) => {
        console.log(result)
        result.json()
      })
      .catch((err) => console.log(err));
    return response;
  };