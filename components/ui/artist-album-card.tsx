import { cn } from "@/lib/utils";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import Image from "next/image";
import { truncateText } from "../../lib/utils";

type ArtistAlbumCardProps = React.ComponentProps<typeof Card>;

export interface ArtistAlbumCardComponentProps extends ArtistAlbumCardProps {
	albumId: string;
	name: string;
	artwork: string;
}

export function ArtistAlbumCard({
	albumId,
	name,
	artwork,
	className,
	...props
}: ArtistAlbumCardComponentProps) {
	return (
		<>
			<Card
				className={cn("w-[150px] mr-5", className)}
				{...props}
			>
				<CardHeader className="p-0">
					<Image
						className="rounded-t-md"
						src={artwork}
						alt="Picture of the author"
						width={300}
						height={300}
					/>
				</CardHeader>
				<CardContent className="grid gap-4 mt-5">
					<h2 className="scroll-m-20 text-xs font-semibold tracking-normal">
						{truncateText(name, 20)}
					</h2>
				</CardContent>
			</Card>
		</>
	);
}
