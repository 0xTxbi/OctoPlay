import { axiosInstance } from "./config";

// Personalised Requests
// GET user's profile
export const getUsersProfile = async () => {
  const response = await axiosInstance.get("me");

  return response;
};

// GET user's top tracks
export const getUsersTopTracks = async (limit, range) => {
  const response = await axiosInstance.get(
    `me/top/tracks?time_range=${range}&limit=${limit}`
  );

  return response;
};

// GET user's top tracks
export const getUsersTopArtists = async (limit, range) => {
  const response = await axiosInstance.get(
    `me/top/artists?time_range=${range}&limit=${limit}`
  );

  return response;
};

// GET user's playlists
export const getUsersPlaylists = async () => {
  const response = await axiosInstance.get(`me/playlists`);

  return response;
};

// Artist Requests
// GET artist's data
export const getArtist = async (artistID) => {
  const response = await axiosInstance.get(`artists/${artistID}`);

  return response;
};

// GET artist's albums
export const getArtistAlbums = async (artistID, limit) => {
  const response = await axiosInstance.get(
    `artists/${artistID}/albums?include_groups=album&limit=${limit}`
  );

  return response;
};

// GET artist's top tracks
export const getArtistTopTracks = async (artistID) => {
  const response = await axiosInstance.get(`artists/${artistID}/top-tracks`);

  return response;
};

// GET artist's related artists
export const getRelatedArtists = async (artistID) => {
  const response = await axiosInstance.get(
    `artists/${artistID}/related-artists`
  );

  return response;
};
