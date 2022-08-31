import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: "https://api.spotify.com/v1/",
});

export const fetcher = async (url, accessToken) => {
  return axiosInstance
    .get(url, {
      headers: {
        Accept: "application/json",
        Authorization: `Bearer ${accessToken}`,
        "Content-Type": "application/json",
      },
    })
    .then((response) => response.data);
};
