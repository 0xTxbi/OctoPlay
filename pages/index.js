import React from "react";
import {
  Box,
  Heading,
  Container,
  Text,
  Button,
  Stack,
  Icon,
} from "@chakra-ui/react";

import { useToast } from "@chakra-ui/react";
import { GiRocketThruster } from "react-icons/gi";
import { BsSpotify } from "react-icons/bs";
import Head from "next/head";
import { useSession, signIn, signOut } from "next-auth/react";
import AuthenticatedScreen from "../components/AuthenticatedScreen";
import UnauthenticatedScreen from "../components/UnauthenticatedScreen";
import { useEffect } from "react";
import { useState } from "react";

export default function Home() {
  const { status } = useSession();
  const [isValidSession, setIsValidSession] = useState(false);

  useEffect(() => {
    const ISSERVER = typeof window === "undefined";
    if (!ISSERVER) {
      sessionStorage.getItem("userToken" === null)
        ? setIsValidSession(false)
        : setIsValidSession(true);
    }
  });

  if (status === "authenticated" && isValidSession != null) {
    return <AuthenticatedScreen />;
  } else {
    return <UnauthenticatedScreen />;
  }
}
