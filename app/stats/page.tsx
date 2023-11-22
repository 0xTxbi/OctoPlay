"use client";
import { MainNav } from "@/components/ui/main-nav";
import { IconArrowLeft } from "@tabler/icons-react";
import Link from "next/link";

export default function Stats() {
	return (
		<div>
			<Link href="/">
				<IconArrowLeft className="mr-2 mt-5 h-7 w-7 bg-green-500 rounded-full p-2" />
			</Link>

			<MainNav />
		</div>
	);
}
