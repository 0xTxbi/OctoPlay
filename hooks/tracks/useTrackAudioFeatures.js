import { useSession } from "next-auth/react";
import useSWR from "swr";
import { fetcher } from "../config";

export const useTrackAudioFeatures = (trackID) => {
  const { data: session } = useSession();

  const { data, error } = useSWR(
    [`/audio-features/${trackID}`, session?.accessToken],
    fetcher
  );

  return {
    trackAudioFeatures: data,
    isLoading: !error && !data,
    isError: error,
  };
};
