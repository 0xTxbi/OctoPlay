import axios from "axios";

export const topArtistsReq = async (token) => {
  await axios.get(`https://api.spotify.com/v1/me`, {
    headers: {
      Accept: "application/json",
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
  });
};
