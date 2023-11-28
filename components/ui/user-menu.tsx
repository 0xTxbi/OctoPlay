import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuGroup,
	DropdownMenuItem,
	DropdownMenuLabel,
	DropdownMenuSeparator,
	DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { signOut } from "next-auth/react";
import { IconDiscountCheckFilled } from "@tabler/icons-react";

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
						className="object-cover"
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
							<IconDiscountCheckFilled className="h-4 w-4 text-green-500" />
						</div>
						<p className="text-xs leading-none text-muted-foreground">
							{
								userBasicDetails?.email
							}
						</p>
					</div>
				</DropdownMenuLabel>
				<DropdownMenuSeparator />
				<DropdownMenuGroup></DropdownMenuGroup>
				<DropdownMenuSeparator />
				<DropdownMenuItem
					className="cursor-pointer"
					onClick={() =>
						signOut({ callbackUrl: "/" })
					}
				>
					Log out
				</DropdownMenuItem>
			</DropdownMenuContent>
		</DropdownMenu>
	);
}
