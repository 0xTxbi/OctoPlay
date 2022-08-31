import { useSession } from "next-auth/react";
import useSWR from "swr";
import { fetcher } from "../config";

export const useArtistAlbums = (artistID, limit) => {
  const { data: session } = useSession();

  const { data, error } = useSWR(
    [
      `artists/${artistID}/albums?include_groups=album&limit=${limit}`,
      session?.accessToken,
    ],
    fetcher
  );

  return {
    artistAlbums: data,
    isLoading: !error && !data,
    isError: error,
  };
};
