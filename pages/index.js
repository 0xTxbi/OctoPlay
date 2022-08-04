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

export default function Home() {
  const { status } = useSession();

  if (status === "authenticated") {
    return <AuthenticatedScreen />;
  } else {
    return <UnauthenticatedScreen />;
  }
}
