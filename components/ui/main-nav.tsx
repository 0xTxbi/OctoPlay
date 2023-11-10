"use client";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";

import { cn } from "@/lib/utils";
import { TabsContent } from "@radix-ui/react-tabs";
import { TopTracks } from "./top-tracks";

export function MainNav({
	className,
	...props
}: React.HTMLAttributes<HTMLElement>) {
	return (
		<nav
			className={cn(
				"flex space-x-4 items-center lg:space-x-6",
				className
			)}
			{...props}
		>
			<Tabs
				defaultValue="overview"
				className="space-y-10 mb-10 mt-10"
			>
				<TabsList>
					<TabsTrigger value="overview">
						Overview
					</TabsTrigger>
					<TabsTrigger value="top-tracks">
						Top Tracks
					</TabsTrigger>
					<TabsTrigger
						value="top-artists"
						disabled
					>
						Top Artists
					</TabsTrigger>
					<TabsTrigger
						value="your-playlists"
						disabled
					>
						Your Playlists
					</TabsTrigger>
				</TabsList>
				<TabsContent value="top-tracks">
					<TopTracks />
				</TabsContent>
			</Tabs>
		</nav>
	);
}
