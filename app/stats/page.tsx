"use client";

import useAuthSWR from "@/lib/hooks/useAuthSWR";
import useTopTracks from "@/lib/hooks/useTopTracks";
import { fetcher } from "@/lib/utils";
import useSWR from "swr";

export default function Stats() {
	const { data, isLoading } = useAuthSWR(
		"https://api.spotify.com/v1/me/top/artists"
	);

	console.log(isLoading, data);
	return <h1>hey</h1>;
}
