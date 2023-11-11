"use client";

import { useSession } from "next-auth/react";
import { MainNav } from "./main-nav";
import { UserMenu } from "./user-menu";

export function Header() {
	const { data: session } = useSession();

	return (
		<div className="flex-col items-center md:flex">
			<div className="flex justify-around w-full h-16 items-center px-4">
				<h3 className="text-xl font-medium tracking-tight lg:text-3xl">
					OctoPlay
				</h3>

				<div className="ml-auto flex items-center space-x-4">
					<UserMenu
						userBasicDetails={session?.user}
					/>
				</div>
			</div>
		</div>
	);
}
