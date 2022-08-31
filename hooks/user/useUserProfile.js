import { useSession } from "next-auth/react";
import useSWR from "swr";
import { fetcher } from "../config";

export const useUserProfile = () => {
  const { data: session } = useSession();

  const { data, error } = useSWR([`me`, session?.accessToken], fetcher);

  return {
    user: data,
    isLoading: !error && !data,
    isError: error,
  };
};
