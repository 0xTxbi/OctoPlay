import { Metadata } from "next";
import React from "react";
import { SessionProvider } from "next-auth/react";
import { SessionProviders } from "../utils/session-provider";

export const metadata: Metadata = {
	title: "OctoPlay",
	description: "Welcome to OctoPlay",
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<body>
				<SessionProviders>{children}</SessionProviders>
			</body>
		</html>
	);
}
