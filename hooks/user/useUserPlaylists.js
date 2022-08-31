import { useSession } from "next-auth/react";
import useSWR from "swr";
import { fetcher } from "../config";

export const useUserPlaylists = () => {
  const { data: session } = useSession();

  const { data, error } = useSWR(
    [`me/playlists`, session?.accessToken],
    fetcher
  );

  return {
    userPlaylists: data,
    isLoading: !error && !data,
    isError: error,
  };
};
