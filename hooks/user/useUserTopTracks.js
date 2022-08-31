import { useSession } from "next-auth/react";
import useSWR from "swr";
import { fetcher } from "../config";

export const useUserTopTracks = (limit, range) => {
  const { data: session } = useSession();

  const { data, error } = useSWR(
    [`me/top/tracks?time_range=${range}&limit=${limit}`, session?.accessToken],
    fetcher
  );

  return {
    topTracks: data,
    isLoading: !error && !data,
    isError: error,
  };
};
