import { cn } from "@/lib/utils";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import Image from "next/image";
import { DiscIcon } from "@radix-ui/react-icons";

type RelatedArtistsCardProps = React.ComponentProps<typeof Card>;

export interface RelatedArtistsCardComponentProps
	extends RelatedArtistsCardProps {
	artistId: string;
	name: string;
	image: string;
}

export function RelatedArtistsCard({
	artistId,
	name,
	image,
	className,
	...props
}: RelatedArtistsCardComponentProps) {
	return (
		<>
			<Card
				className={cn(
					"border-none shadow-none",
					className
				)}
				{...props}
			>
				<CardHeader className="p-0 flex justify-center items-center">
					<Image
						className="rounded-full p-[24px] max-h-[150px] object-cover"
						src={image}
						alt={`Picture of ${name}`}
						width={150}
						height={150}
					/>
				</CardHeader>
				<CardContent className="p-0 flex mb-0 justify-center items-center">
					<h2 className="scroll-m-20 text-xs font-semibold tracking-normal">
						{name}
					</h2>
				</CardContent>
			</Card>
		</>
	);
}
