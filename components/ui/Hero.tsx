"use client";
import { useSession } from "next-auth/react";
import AuthenticatedScreen from "./AuthenticatedScreen";
import UnauthenticatedScreen from "./UnauthenticatedScreen";

export default function Hero() {
	const { status } = useSession();
	console.log(status);

	return (
		<>
			{status === "authenticated" ? (
				<AuthenticatedScreen />
			) : (
				<UnauthenticatedScreen />
			)}
		</>
	);
}
