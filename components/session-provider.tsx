"use client";

import {
	SessionProvider as NextAuthSessionProvider,
	SessionProviderProps,
} from "next-auth/react";

export function SessionProvider({ children, ...props }: SessionProviderProps) {
	return (
		<NextAuthSessionProvider {...props}>
			{children}
		</NextAuthSessionProvider>
	);
}
