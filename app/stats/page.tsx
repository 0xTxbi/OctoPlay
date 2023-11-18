"use client";
import ArrowLeftIcon from "@/components/ui/icons/arrow-left-icon";
import { MainNav } from "@/components/ui/main-nav";
import useCurrentUser from "@/lib/hooks/useCurrentuser";
import usePlaylists from "@/lib/hooks/useUserPlaylists";
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
