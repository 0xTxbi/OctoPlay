import Header from "@/components/ui/header";
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
		<section className="container mt-5">
			<Header />

			<div className="mx-5 h-full">{children}</div>
		</section>
	);
}
