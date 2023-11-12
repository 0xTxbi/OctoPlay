"use client";
import { Button } from "@/components/ui/button";
import ArrowLeftIcon from "@/components/ui/icons/arrow-left-icon";
import { MainNav } from "@/components/ui/main-nav";
import { TopTracks } from "@/components/ui/top-tracks";
import useAuthSWR from "@/lib/hooks/useAuthSWR";
import Link from "next/link";

export default function Stats() {
	return (
		<div>
			<Link href="/">
				<ArrowLeftIcon className="mr-2 mt-5" />
			</Link>

			<MainNav />
		</div>
	);
}
