"use client";

import { SessionProvider } from "next-auth/react";

export function SessionProviders({ children }) {
	return <SessionProvider>{children}</SessionProvider>;
}
