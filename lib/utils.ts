import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs));
}

// swr config
export const fetcher = (url: string, ...args: any[]) =>
	fetch(url, ...args).then((res) => res.json());
