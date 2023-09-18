import { Header } from "@/components/ui/Header";
import type { Metadata } from "next";

export const metadata: Metadata = {
	title: "Stats | OctoPlay",
	description: "your music listening stats",
};

export default function StatsLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<section>
			<Header />

			<div className="mx-5 h-full">{children}</div>
		</section>
	);
}
