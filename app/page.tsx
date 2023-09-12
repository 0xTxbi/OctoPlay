"use client";

import { useSession } from "next-auth/react";
import AuthenticatedScreen from "../components/AuthenticatedScreen";
import UnauthenticatedScreen from "../components/UnauthenticatedScreen";
import { useEffect, useState } from "react";

export default function Home() {
	const { status } = useSession();

	console.log(status);

	if (status === "authenticated") {
		return <AuthenticatedScreen />;
	} else {
		return <UnauthenticatedScreen />;
	}
}
