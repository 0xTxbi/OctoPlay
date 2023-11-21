import React, { useState, useRef, useEffect } from "react";
import {
	IconPlayerPause,
	IconPlayerPlay,
	IconPlayerSkipBack,
	IconPlayerSkipForward,
} from "@tabler/icons-react";
import { Slider } from "./slider";
import Portal from "../portal";
import Image from "next/image";
import { formatTrackDuration } from "@/lib/utils";
import { Progress } from "./progress";

interface AudioPlayerProps {
	url?: string;
	name?: string;
	image: string;
}

const AudioPlayer: React.FC<AudioPlayerProps> = ({ url, name, image }) => {
	const audioRef = useRef<HTMLAudioElement | null>(null);
	const isPlayingRef = useRef<boolean>(false);
	const currentTimeRef = useRef<number>(0);

	const handleTimeUpdate = () => {
		const audio = audioRef.current;
		if (audio) {
			currentTimeRef.current = audio.currentTime;
		}
	};

	const handleEnded = () => {
		isPlayingRef.current = false;
		currentTimeRef.current = 0;
	};

	const handlePlayPause = () => {
		const audio = audioRef.current;

		if (audio) {
			if (isPlayingRef.current) {
				audio.pause();
			} else {
				audio.play();
			}
			isPlayingRef.current = !isPlayingRef.current;
		}
	};

	useEffect(() => {
		const audio = audioRef.current;

		if (audio) {
			audio.play().then(() => {
				isPlayingRef.current = true;
			});

			return () => {
				audio.pause();
				audio.currentTime = 0;
			};
		}

		return () => {};
	}, []);

	return (
		<Portal>
			<div className="fixed z-[99999px] bottom-2 h-15 w-[400px] left-2 rounded-md p-4 flex items-center space-x-4 bg-[#0b0a0a] shadow-lg">
				<div className="h-[100px] w-[100px]">
					<Image
						src={image}
						alt="Album Cover"
						height={100}
						width={100}
						className="h-full w-auto object-cover rounded-md"
					/>
				</div>

				<div className="flex-grow justify-center">
					<p className="text-white text-md tracking-wide text-center">
						{name}
					</p>
					<audio
						ref={audioRef}
						src={url}
						preload="auto"
						onTimeUpdate={handleTimeUpdate}
						onEnded={handleEnded}
					/>
					<div className="flex items-center justify-center mt-1">
						<button>
							<IconPlayerSkipBack className="h-4 w-4" />
						</button>
						<button
							onClick={
								handlePlayPause
							}
							className="text-white"
						>
							{isPlayingRef.current ? (
								<IconPlayerPause className="h-6 w-6" />
							) : (
								<IconPlayerPlay className="h-6 w-6" />
							)}
						</button>
						<button>
							<IconPlayerSkipForward className="h-4 w-4" />
						</button>
						<span className="text-white"></span>
					</div>
					<Progress
						className="mt-3"
						max={30}
						value={currentTimeRef.current}
					/>
					<p className="text-gray-500 text-xs mt-2 text-right">
						{formatTrackDuration(
							currentTimeRef.current *
								1000
						)}
						/0:30
					</p>
				</div>
			</div>
		</Portal>
	);
};

export default AudioPlayer;
