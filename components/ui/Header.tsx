import { MainNav } from "./main-nav";
import { UserMenu } from "./user-menu";

export function Header() {
	return (
		<div className="flex-col items-center md:flex">
			<div className="flex justify-around w-full h-16 items-center px-4">
				<h3>OctoPlay</h3>

				<div className="ml-auto flex items-center space-x-4">
					<UserMenu />
				</div>
			</div>
		</div>
	);
}
