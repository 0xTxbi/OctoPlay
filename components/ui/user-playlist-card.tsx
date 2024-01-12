import { cn } from "@/lib/utils";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import Image from "next/image";
import { Badge } from "./badge";
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
	return (
		<>
			<Card
				className={cn("max-w-[250px] mx-auto")}
				{...props}
			>
				<CardHeader className="p-0">
					<Image
						className="rounded-t-md max-h-[250px] object-cover "
						src={images[0]?.url}
						alt="Picture of the author"
						width={250}
						height={250}
					/>
				</CardHeader>
				<CardContent className="grid gap-4 mt-5">
					<div className="flex space-x-1 items-center">
						<h2 className="scroll-m-20 text-md font-semibold tracking-tight">
							{name}
						</h2>
					</div>
					<span className="flex items-center text-gray-400">
						<IconDisc className="mr-1 h-4 w-4" />
						<h3 className="scroll-m-20 text-xs font-normal tracking-tight">
							{`${tracks?.total} tracks`}
						</h3>
					</span>
					{/* <h3 className="scroll-m-20 text-xs font-normal tracking-normal">
						{description?.length > 0
							? description
							: "no playlist description attached"}
					</h3> */}
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
