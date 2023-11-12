import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs));
}

// swr config
export const fetcher = (url: string, ...args: any[]) =>
	fetch(url, ...args).then((res) => res.json());

// truncate text
export function truncateText(text: string, maxLength: number = 10): string {
	if (text.length <= maxLength) {
		return text;
	} else {
		return text.slice(0, maxLength) + "...";
	}
}
