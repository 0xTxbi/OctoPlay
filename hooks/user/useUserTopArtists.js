import { useSession } from "next-auth/react";
import useSWR from "swr";
import { fetcher } from "../config";

export const useUserTopArtists = (limit, range) => {
  const { data: session } = useSession();

  const { data, error } = useSWR(
    [`me/top/artists?time_range=${range}&limit=${limit}`, session?.accessToken],
    fetcher
  );

  return {
    topArtists: data,
    isLoading: !error && !data,
    isError: error,
  };
};
