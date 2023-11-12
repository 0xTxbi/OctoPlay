import useSWR from "swr";
import getAccessToken from "../getAccessToken";

const fetcher = async (url: string) => {
	const accessToken = await getAccessToken();

	const headers = {
		Authorization: `Bearer ${accessToken}`,
		"Content-Type": "application/json",
	};

	const response = await fetch(url, { headers });
	const data = await response.json();

	if (!response.ok) {
		throw new Error(data.error.message);
	}

	return data;
};

interface AuthSWRResponse<T> {
	data: T;
	error: Error;
	isLoading: boolean;
}

const useAuthSWR = <T>(url: string): AuthSWRResponse<T> => {
	const { data, error } = useSWR<T>(url, fetcher);

	return {
		data,
		error,
		isLoading: !data && !error,
	};
};

export default useAuthSWR;
