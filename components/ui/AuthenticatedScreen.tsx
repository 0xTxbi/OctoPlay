"use client";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { ArrowRightIcon } from "@radix-ui/react-icons";
import Link from "next/link";

export default function AuthenticatedScreen() {
	return (
		<main className="flex min-h-screen flex-col items-center justify-between p-24">
			<div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
				<p className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
					welcome to OctoPlay&nbsp;
					<code className="font-mono font-bold">
						v2
					</code>
				</p>
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

			<div className="relative flex flex-col items-center place-items-center before:absolute before:h-[100px] before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 before:lg:h-[360px] z-[-1]">
				<h1 className="scroll-m-20 text-4xl font-medium tracking-wide lg:text-5xl">
					OctoPlay
				</h1>

				<Link href="/stats">
					<Button className="mt-5 w-full bg-green-500">
						<ArrowRightIcon className="mr-2 h-4 w-4" />
						View Listening Stats
					</Button>
				</Link>
			</div>

			<div className="mb-32 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-4 lg:text-left"></div>
		</main>
	);
}
