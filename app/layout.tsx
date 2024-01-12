import { ThemeProvider } from "@/components/theme-provider";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { SessionProvider } from "@/components/session-provider";
import { Toaster } from "@/components/ui/sonner";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "OctoPlay",
	description:
		"A simplified music insight tool built on Spotify's web API",
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<body className={inter.className}>
				<SessionProvider>
					<ThemeProvider
						attribute="class"
						defaultTheme="dark"
					>
						<main>{children}</main>
						<Toaster />
					</ThemeProvider>
				</SessionProvider>
			</body>
		</html>
	);
}
