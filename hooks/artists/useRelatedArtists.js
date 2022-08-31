import { useSession } from "next-auth/react";
import useSWR from "swr";
import { fetcher } from "../config";

export const useRelatedArtists = (artistID) => {
  const { data: session } = useSession();

  const { data, error } = useSWR(
    [`artists/${artistID}/related-artists`, session?.accessToken],
    fetcher
  );

  return {
    relatedArtists: data,
    isLoading: !error && !data,
    isError: error,
  };
};
