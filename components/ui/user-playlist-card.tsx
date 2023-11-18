import { cn } from "@/lib/utils";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import Image from "next/image";
import { truncateText } from "../../lib/utils";
import { Badge } from "./badge";
import VerifiedIcon from "./icons/verified-icon";
import { PlaylistItem } from "@/lib/hooks/useUserPlaylists";
import { IconDisc } from "@tabler/icons-react";

type UserPlaylistsCardProps = React.ComponentProps<typeof Card>;

export function UserPlaylistsCard({
	id,
	name,
	isPublic,
	tracks,
	description,
	images,
	...props
}: PlaylistItem) {
	console.log(description);
	return (
		<>
			<Card
				className={cn("mr-5")}
				{...props}
			>
				<CardHeader className="p-0">
					<Image
						className="rounded-t-md max-h-[350px]"
						src={images[0]?.url}
						alt="Picture of the author"
						width={350}
						height={350}
					/>
				</CardHeader>
				<CardContent className="grid gap-4 mt-5">
					<div className="flex space-x-1 items-center">
						<h2 className="scroll-m-20 text-lg font-semibold tracking-tight">
							{name}
						</h2>
					</div>
					<span className="flex items-center text-gray-400">
						<IconDisc className="mr-1 h-4 w-4" />
						<h3 className="scroll-m-20 text-xs font-normal tracking-tight">
							{`${tracks?.total} tracks`}
						</h3>
					</span>
					<h3 className="scroll-m-20 text-xs font-normal tracking-normal">
						{description?.length > 0
							? description
							: "no playlist description attached"}
					</h3>
					<h2 className="scroll-m-20 text-xl font-semibold tracking-normal">
						<Badge>
							{isPublic
								? "Private"
								: "Public"}
						</Badge>
					</h2>
				</CardContent>
			</Card>
		</>
	);
}
