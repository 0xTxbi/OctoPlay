"use client";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";

import { cn } from "@/lib/utils";
import { TabsContent } from "@radix-ui/react-tabs";
import { TopTracks } from "./top-tracks";
import { TopArtists } from "./top-artists";

export function MainNav({
	className,
	...props
}: React.HTMLAttributes<HTMLElement>) {
	return (
		<nav
			className={cn(className)}
			{...props}
		>
			<Tabs
				defaultValue="top-tracks"
				className="space-y-10 mb-10 mt-10"
			>
				<TabsList>
					{/* <TabsTrigger
						disabled
						value="overview"
					>
						Overview
					</TabsTrigger> */}
					<TabsTrigger value="top-tracks">
						Top Tracks
					</TabsTrigger>
					<TabsTrigger value="top-artists">
						Top Artists
					</TabsTrigger>
					<TabsTrigger
						value="your-playlists"
						disabled
					>
						Your Playlists
					</TabsTrigger>
				</TabsList>
				{/* <TabsContent value="overview">
					<Overview />
				</TabsContent> */}
				<TabsContent value="top-tracks">
					<TopTracks />
				</TabsContent>
				<TabsContent value="top-artists">
					<TopArtists />
				</TabsContent>
			</Tabs>
		</nav>
	);
}
