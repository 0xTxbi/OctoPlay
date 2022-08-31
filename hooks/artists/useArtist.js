import { useSession } from "next-auth/react";
import useSWR from "swr";
import { fetcher } from "../config";

export const useArtist = (artistID) => {
  const { data: session } = useSession();

  const { data, error } = useSWR(
    [`artists/${artistID}`, session?.accessToken],
    fetcher
  );

  return {
    artist: data,
    isLoading: !error && !data,
    isError: error,
  };
};
