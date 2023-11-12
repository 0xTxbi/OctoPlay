import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuGroup,
	DropdownMenuItem,
	DropdownMenuLabel,
	DropdownMenuSeparator,
	DropdownMenuShortcut,
	DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { signOut } from "next-auth/react";
import VerifiedIcon from "./icons/verified-icon";

interface UserMenuProps {
	userBasicDetails?: {
		id?: string | null | undefined;
		name?: string | null | undefined;
		image?: string | null | undefined;
		email?: string | null | undefined;
	};
}

export function UserMenu({ userBasicDetails }: UserMenuProps) {
	return (
		<DropdownMenu>
			<DropdownMenuTrigger asChild>
				<Avatar className="hover:cursor-pointer">
					<AvatarImage
						src={
							userBasicDetails?.image ||
							undefined
						}
					/>
					<AvatarFallback>0x</AvatarFallback>
				</Avatar>
			</DropdownMenuTrigger>
			<DropdownMenuContent
				className="w-56"
				align="end"
				forceMount
			>
				<DropdownMenuLabel className="font-normal">
					<div className="flex flex-col space-y-1">
						<div className="flex space-x-1">
							<p className="text-lg font-medium leading-none">
								{
									userBasicDetails?.name
								}
							</p>
							<VerifiedIcon />
						</div>
						<p className="text-xs leading-none text-muted-foreground">
							{
								userBasicDetails?.email
							}
						</p>
					</div>
				</DropdownMenuLabel>
				<DropdownMenuSeparator />
				<DropdownMenuGroup>
					<DropdownMenuItem>
						Profile
						<DropdownMenuShortcut>
							⇧⌘P
						</DropdownMenuShortcut>
					</DropdownMenuItem>
					<DropdownMenuItem>
						Open Spotify App
						<DropdownMenuShortcut>
							⌘S
						</DropdownMenuShortcut>
					</DropdownMenuItem>
				</DropdownMenuGroup>
				<DropdownMenuSeparator />
				<DropdownMenuItem
					className="cursor-pointer"
					onClick={() => signOut()}
				>
					Log out
					<DropdownMenuShortcut>
						⇧⌘Q
					</DropdownMenuShortcut>
				</DropdownMenuItem>
			</DropdownMenuContent>
		</DropdownMenu>
	);
}
