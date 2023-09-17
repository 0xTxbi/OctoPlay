"use client";
import { useSession } from "next-auth/react";
import AuthenticatedScreen from "./AuthenticatedScreen";
import UnauthenticatedScreen from "./UnauthenticatedScreen";

export default function Hero() {
	const { status, data: session } = useSession();
	console.log(status);

	console.log(session);

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
