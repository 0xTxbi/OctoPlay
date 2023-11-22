"use client";
import { useSession } from "next-auth/react";
import { UserMenu } from "../../components/ui/user-menu";
import Link from "next/link";

export default function Header() {
	const { data: session } = useSession();

	return (
		<div className="flex-col items-center md:flex">
			<div className="flex justify-around w-full h-16 items-center">
				<Link href="/">
					<h3 className="text-xl font-medium tracking-tight lg:text-3xl">
						OctoPlay
					</h3>
				</Link>

				<div className="ml-auto flex items-center space-x-4">
					<UserMenu
						userBasicDetails={session?.user}
					/>
				</div>
			</div>
		</div>
	);
}
