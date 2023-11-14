import React from "react";
import { Button } from "./button";
import { IconAdjustments } from "@tabler/icons-react";
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuLabel,
	DropdownMenuRadioGroup,
	DropdownMenuRadioItem,
	DropdownMenuSeparator,
	DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ClockIcon } from "@radix-ui/react-icons";

type RangeFilterProps = {
	value: string;
	onValueChange: (value: string) => void;
};

export const RangeFilter: React.FC<RangeFilterProps> = ({
	value,
	onValueChange,
}) => (
	<DropdownMenu>
		<DropdownMenuTrigger asChild>
			<Button className="bg-green-500 mb-4 text-end">
				<IconAdjustments
					size={20}
					className="mr-2"
				/>
				Filter
			</Button>
		</DropdownMenuTrigger>
		<DropdownMenuContent className="">
			<DropdownMenuLabel className="flex items-center">
				<ClockIcon className="mr-2" />
				Time Range
			</DropdownMenuLabel>
			<DropdownMenuSeparator />
			<DropdownMenuRadioGroup
				value={value}
				onValueChange={onValueChange}
			>
				<DropdownMenuRadioItem value="short_term">
					Short term
				</DropdownMenuRadioItem>
				<DropdownMenuRadioItem value="medium_term">
					Medium term
				</DropdownMenuRadioItem>
				<DropdownMenuRadioItem value="long_term">
					Long term
				</DropdownMenuRadioItem>
			</DropdownMenuRadioGroup>
		</DropdownMenuContent>
	</DropdownMenu>
);
