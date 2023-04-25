import { Buffer } from "buffer";

export const imgResources = async (folder: string) => {
  const auth = {login: '137827112126634', password: 'MxHh3jlJZfALgTNxlBnCCCdrh1g'} 

    const response = await fetch(
      `/api/
        dis7ep3yq
      /resources/by_asset_folder?asset_folder=g shang garden/${folder}&max_results=500`,
      {
        headers: {
          Authorization: `Basic ${Buffer.from(
            auth.login +
              ":" +
              auth.password
          ).toString("base64")}`,
        },
      }
    )
      .then((result) => result.json())
      .catch((err) => console.log(err));
    return response;
  };