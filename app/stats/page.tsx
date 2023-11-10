"use client";

import { MainNav } from "@/components/ui/main-nav";
import { useSession } from "next-auth/react";

export default function StatsPage() {
	const { data: session } = useSession();
	console.log(session);

	return (
		<div className="flex flex-col items-center justify-center"></div>
	);
}
