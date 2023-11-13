import {
	Sheet,
	SheetClose,
	SheetContent,
	SheetDescription,
	SheetFooter,
	SheetHeader,
	SheetTitle,
	SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { InfoCircledIcon } from "@radix-ui/react-icons";

export interface TrackSheetComponentProps {
	trackId: string;
	name: string;
	album: string;
	artwork: string;
	artist: string;
	duration: string;
	previewUrl: string;
}

export function TrackSheet({
	trackId,
	name,
	album,
	artwork,
}: TrackSheetComponentProps) {
	// const { trackInfo, loading, error } = useTrack(
	// 	"1sxGIhaxY8eF52e1TlShSP"
	// );

	// console.log(trackInfo  );

	return (
		<Sheet>
			<SheetTrigger asChild>
				<Button className="w-full bg-green-400">
					<InfoCircledIcon className="mr-2 h-4 w-4" />{" "}
					Stats
				</Button>
			</SheetTrigger>
			<SheetContent>
				<SheetHeader>
					<SheetTitle>Track Info</SheetTitle>
					<SheetDescription>
						stats on this track
					</SheetDescription>
				</SheetHeader>
				<div className="grid gap-4 py-4">
					<div className="grid grid-cols-4 items-center gap-4"></div>
					<div className="grid grid-cols-4 items-center gap-4"></div>
				</div>
				<SheetFooter>
					<SheetClose asChild>
						<Button className="bg-green-500">
							Close
						</Button>
					</SheetClose>
				</SheetFooter>
			</SheetContent>
		</Sheet>
	);
}
