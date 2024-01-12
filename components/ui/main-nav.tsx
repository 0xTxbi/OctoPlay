"use client";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";

import { cn } from "@/lib/utils";
import { TabsContent } from "@radix-ui/react-tabs";
import { TopTracks } from "./top-tracks";
import { TopArtists } from "./top-artists";
import { UserPlaylists } from "./user-playlists";

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
				className="space-y-10 mb-8 mt-10"
			>
				<TabsList>
					<TabsTrigger value="top-tracks">
						Top Tracks
					</TabsTrigger>
					<TabsTrigger value="top-artists">
						Top Artists
					</TabsTrigger>
					<TabsTrigger value="your-playlists">
						Your Playlists
					</TabsTrigger>
				</TabsList>

				<TabsContent value="top-tracks">
					<TopTracks />
				</TabsContent>
				<TabsContent value="top-artists">
					<TopArtists />
				</TabsContent>
				<TabsContent value="your-playlists">
					<UserPlaylists />
				</TabsContent>
			</Tabs>
		</nav>
	);
}
