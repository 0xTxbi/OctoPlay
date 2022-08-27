import axios from "axios";

const userToken = sessionStorage?.getItem("userToken");

export const axiosInstance = axios.create({
  baseURL: "https://api.spotify.com/v1/",
  headers: {
    Accept: "application/json",
    Authorization: `Bearer ${userToken}`,
    "Content-Type": "application/json",
  },
});
