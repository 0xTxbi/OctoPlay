import axios from "axios";

export const topArtistsReq = async (userSesh) => {
  await axios.get(`https://api.spotify.com/v1/me/top/artists`, {
    headers: {
      Accept: "application/json",
      Authorization: `Bearer ${userSesh?.accessToken}`,
      "Content-Type": "application/json",
    },
  });
};
