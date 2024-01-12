"use client";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import SpotifyIcon from "@/components/ui/icons/spotify-icon";
import { ArrowRightIcon } from "@radix-ui/react-icons";
import { signIn, useSession } from "next-auth/react";
import Link from "next/link";
import * as React from "react";
import { Badge } from "./ui/badge";
import { stat } from "fs";
import { Toaster, toast } from "sonner";

export default function Hero() {
	const { status } = useSession();

	return (
		<main className="flex min-h-screen flex-col items-center justify-between p-24">
			<div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
				<Badge variant="secondary">
					welcome to OctoPlay&nbsp;
					<code className="font-mono font-bold">
						v2
					</code>
				</Badge>
				<div className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:h-auto lg:w-auto lg:bg-none">
					<a
						className="pointer-events-none flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0"
						href="https://github.com/0xTxbi"
						target="_blank"
						rel="noopener noreferrer"
					>
						by
						<Avatar>
							<AvatarImage
								src="https://avatars.githubusercontent.com/u/46839250?v=4"
								alt="@0xTxbi"
							/>
							<AvatarFallback>
								0x
							</AvatarFallback>
						</Avatar>
						0xTxbi
					</a>
				</div>
			</div>

			<div className="relative flex flex-col items-center gap-5 place-items-center">
				<h1 className="scroll-m-20 text-4xl font-medium tracking-wide lg:text-5xl">
					OctoPlay
					<span className="text-green-400">
						.
					</span>
				</h1>

				{status === "loading" ? (
					<Button
						isLoading
						disabled
						className="mt-5 w-full bg-green-500 cursor-pointer"
					></Button>
				) : (
					<React.Fragment>
						{status ===
						"unauthenticated" ? (
							<Button
								onClick={() =>
									signIn(
										"spotify"
									)
								}
								className="mt-5 w-full bg-green-500 cursor-pointer"
							>
								<SpotifyIcon className="mr-2 h-4 w-4" />
								Sign In
							</Button>
						) : (
							<Link href="/stats">
								<Button className="mt-5 w-full bg-green-500">
									<ArrowRightIcon className="mr-2 h-4 w-4" />
									View
									Listening
									Stats
								</Button>
							</Link>
						)}
					</React.Fragment>
				)}
			</div>

			<div></div>
		</main>
	);
}
