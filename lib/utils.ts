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

// convert date
export const formatDate = (inputDate: string): string => {
	const options: Intl.DateTimeFormatOptions = {
		year: "numeric",
		month: "long",
		day: "numeric",
	};

	const formattedDate = new Date(inputDate).toLocaleDateString(
		"en-US",
		options
	);

	return formattedDate.replace(/(\d)(?:st|nd|rd|th)/, (_, digit) => {
		const day = parseInt(digit);
		if (day >= 11 && day <= 13) {
			return `${digit}th`;
		}
		switch (day % 10) {
			case 1:
				return `${digit}st`;
			case 2:
				return `${digit}nd`;
			case 3:
				return `${digit}rd`;
			default:
				return `${digit}th`;
		}
	});
};

// format duration
export function formatDuration(durationInMs: number): string {
	const seconds = Math.floor((durationInMs / 1000) % 60);
	const minutes = Math.floor((durationInMs / (1000 * 60)) % 60);
	const hours = Math.floor((durationInMs / (1000 * 60 * 60)) % 24);

	const formattedHours = hours > 0 ? `${hours}hr` : "";
	const formattedMinutes = minutes > 0 ? `${minutes}m` : "";
	const formattedSeconds = seconds > 0 ? `${seconds}s` : "";

	return `${formattedHours} ${formattedMinutes} ${formattedSeconds}`.trim();
}

// format track duration
export function formatTrackDuration(duration: number): string {
	const minutes = Math.floor(duration / 60000);
	const seconds = Math.floor((duration % 60000) / 1000);

	const minutesString = String(minutes).padStart(2, "0");
	const secondsString = String(seconds).padStart(2, "0");

	return `${minutesString}:${secondsString}`;
}

// format followers count
export function formatFollowersCount(count: number): string {
	const suffixes = ["", "k", "M", "B", "T"];
	const tier = (Math.log10(count) / 3) | 0;

	if (tier === 0) return count.toString();

	const suffix = suffixes[tier];
	const scale = Math.pow(10, tier * 3);

	const scaledNumber = count / scale;

	// handle cases like 15.5k instead of 15k
	return scaledNumber.toFixed(1) + suffix;
}
