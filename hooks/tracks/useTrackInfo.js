import { useSession } from "next-auth/react";
import useSWR from "swr";
import { fetcher } from "../config";

export const useTrackInfo = (trackID) => {
  const { data: session } = useSession();

  const { data, error } = useSWR(
    [`tracks/${trackID}`, session?.accessToken],
    fetcher
  );

  return {
    trackInfo: data,
    isLoading: !error && !data,
    isError: error,
  };
};
