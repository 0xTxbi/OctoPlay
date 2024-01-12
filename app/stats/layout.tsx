import Header from "./header";

export default function StatsLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<section className="container mt-5 ">
			<Header />
			<div>{children}</div>
		</section>
	);
}
