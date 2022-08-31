import { useSession } from "next-auth/react";
import useSWR from "swr";
import { fetcher } from "../config";

export const useArtistTopTracks = (artistID) => {
  const { data: session } = useSession();

  const { data, error } = useSWR(
    [`artists/${artistID}/top-tracks`, session?.accessToken],
    fetcher
  );

  return {
    artistTopTracks: data,
    isLoading: !error && !data,
    isError: error,
  };
};
