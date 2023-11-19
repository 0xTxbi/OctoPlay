import React, { useState, useRef } from "react";
import { formatDuration } from "@/lib/utils";
import {
	IconPlayerPause,
	IconPlayerPlay,
	IconPlayerSkipBack,
	IconPlayerSkipForward,
} from "@tabler/icons-react";
import { Button } from "./button";
import { Slider } from "./slider";

interface AudioPlayerProps {
	url: string;
	image: string;
	duration: number;
}

const AudioPlayer: React.FC<AudioPlayerProps> = ({ url, image, duration }) => {
	const audioRef = useRef<HTMLAudioElement>(null);
	const [isPlaying, setIsPlaying] = useState(false);

	const handlePlayPause = () => {
		const audio = audioRef.current;

		if (audio) {
			if (isPlaying) {
				audio.pause();
			} else {
				audio.play();
			}
			setIsPlaying((prevIsPlaying) => !prevIsPlaying);
		}
	};

	return (
		<div className="fixed bottom-2 h-15 w-[400px] left-2 rounded-md p-4 flex items-center space-x-4 bg--200 shadow-lg">
			<div className="h-[100px] w-[100px]">
				<img
					src="http://localhost:3000/_next/image?url=https%3A%2F%2Fi.scdn.co%2Fimage%2Fab67616d0000b2739bf7698a1737bc7c2e4a14f3&w=640&q=75"
					alt="Album Cover"
					className="h-full w-auto object-cover rounded-md"
				/>
			</div>

			<div className="flex-grow justify-center">
				<p className="text-white text-center">
					Now Playing
				</p>
				<audio
					ref={audioRef}
					src={url}
					preload="auto"
				/>
				<div className="flex items-center justify-center mt-1">
					<button>
						<IconPlayerSkipBack className="h-4 w-4" />
					</button>
					<button
						onClick={handlePlayPause}
						className="text-white"
					>
						{isPlaying ? (
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
				<Slider
					className="mt-3"
					max={100}
					step={1}
				/>
			</div>
		</div>
	);
};

export default AudioPlayer;
