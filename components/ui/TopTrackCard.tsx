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
import SpotifyIcon from "./icons/spotify-icon";

const notifications = [
	{
		title: "Your call has been confirmed.",
		description: "1 hour ago",
	},
	{
		title: "You have a new message!",
		description: "1 hour ago",
	},
	{
		title: "Your subscription is expiring soon!",
		description: "2 hours ago",
	},
];

type TopTrackCardProps = React.ComponentProps<typeof Card>;

export function TopTrackCard({ className, ...props }: TopTrackCardProps) {
	return (
		<Card
			className={cn("w-[320px]", className)}
			{...props}
		>
			<CardHeader className="p-0">
				<Image
					className="rounded-t-md"
					src={
						"https://i.scdn.co/image/ab67616d0000b27302854a7060fccc1a66a4b5ad"
					}
					alt="Picture of the author"
					width={320}
					height={320}
				/>
			</CardHeader>
			<CardContent className="grid gap-4 mt-5">
				<h2 className="scroll-m-20 text-xl font-semibold tracking-tight">
					Hours in Silence
				</h2>
				<div className="flex place-items-center gap-2">
					<Avatar className="h-8 w-8">
						<AvatarImage
							src="https://i.scdn.co/image/ab6761610000e5eb4293385d324db8558179afd9"
							alt="@shadcn"
						/>
						<AvatarFallback>
							0x
						</AvatarFallback>
					</Avatar>
					<h3 className="scroll-m-20 text-md font-semibold tracking-tight">
						Drake
					</h3>
				</div>
			</CardContent>
			<CardFooter>
				<Button className="w-full bg-green-400">
					<SpotifyIcon className="mr-2 h-4 w-4" />{" "}
					Play
				</Button>
			</CardFooter>
		</Card>
	);
}
