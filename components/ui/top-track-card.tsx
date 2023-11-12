import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
	Card,
	CardContent,
	CardFooter,
	CardHeader,
} from "@/components/ui/card";
import Image from "next/image";
import { truncateText } from "../../lib/utils";
import { InfoCircledIcon, PlayIcon } from "@radix-ui/react-icons";

type TopTrackCardProps = React.ComponentProps<typeof Card>;

export interface TopTrackCardComponentProps extends TopTrackCardProps {
	name: string;
	album: string;
	artwork: string;
	artist: string;
	duration: string;
	previewUrl: string;
}

export function TopTrackCard({
	name,
	album,
	artwork,
	artist,
	duration,
	previewUrl,
	className,
	...props
}: TopTrackCardComponentProps) {
	return (
		<Card
			className={cn("mr-5", className)}
			{...props}
		>
			<CardHeader className="p-0">
				<Image
					className="rounded-t-md"
					src={artwork}
					alt="Picture of the author"
					width={500}
					height={500}
				/>
			</CardHeader>
			<CardContent className="grid gap-4 mt-5">
				<h2 className="scroll-m-20 text-xl font-semibold tracking-normal">
					{truncateText(name, 15)}
				</h2>
				<h3 className="scroll-m-20 text-md font-medium tracking-tight">
					{album}
				</h3>
				<div className="flex place-items-center">
					<h3 className="scroll-m-20 text-sm font-light tracking-tight">
						{artist}
					</h3>
				</div>
			</CardContent>
			<CardFooter className="space-x-2">
				<Button
					disabled
					className="w-full bg-green-400"
				>
					<PlayIcon className="mr-2 h-4 w-4" />{" "}
					Play
				</Button>
				<Button className="w-full bg-green-400">
					<InfoCircledIcon className="mr-2 h-4 w-4" />{" "}
					Stats
				</Button>
			</CardFooter>
		</Card>
	);
}
