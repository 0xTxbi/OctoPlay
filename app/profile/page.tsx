import HomeHeader from "../components/HomeHeader";
import {
	Container,
	Stack,
	Heading,
	Text,
	Box,
	Button,
	Center,
	useDisclosure,
} from "@chakra-ui/react";
import OverviewPageModal from "../components/OverviewPageModal";
import { useState } from "react";
import { useUserProfile } from "../hooks/user/useUserProfile";

interface ProfileProps {}

export default function Profile(props: ProfileProps) {
	const { isOpen, onOpen, onClose } = useDisclosure();
	const [modalTitle, setModalTitle] = useState<string>("");
	const [modalContent, setModalContent] = useState<string>("");

	const { user, isLoading, isError } = useUserProfile();

	return (
		<>
			{/* Header */}
			<HomeHeader />
			<Center height={"80vh"}>
				<Container maxW={"3xl"}>
					<Stack
						as={Box}
						textAlign={"center"}
						spacing={{ base: 8, md: 14 }}
						py={{ base: 20, md: 36 }}
					>
						<Heading
							fontWeight={600}
							fontSize={{
								base: "xl",
								sm: "2xl",
								md: "4xl",
							}}
							lineHeight={"110%"}
						>
							Welcome,{" "}
							{user?.display_name}
						</Heading>
						<Text>
							Select any of the
							buttons to proceed 👇🏽
						</Text>
						<Stack
							direction={"row"}
							spacing={3}
							align={"center"}
							alignSelf={"center"}
							position={"relative"}
						>
							<Button
								colorScheme={
									"green"
								}
								onClick={() => {
									setModalTitle(
										"Top Tracks"
									);
									setModalContent(
										"TT"
									);
									onOpen();
								}}
								bg={"green.400"}
								rounded={"full"}
								px={6}
								_hover={{
									bg: "green.500",
								}}
							>
								Top Tracks
							</Button>

							<Button
								colorScheme={
									"green"
								}
								onClick={() => {
									setModalTitle(
										"Top Artists"
									);
									setModalContent(
										"TA"
									);
									onOpen();
								}}
								variant={
									"outline"
								}
								rounded={"full"}
								px={6}
							>
								Top Artists
							</Button>

							<Button
								colorScheme={
									"green"
								}
								onClick={() => {
									setModalTitle(
										"Your Playlists"
									);
									setModalContent(
										"PL"
									);
									onOpen();
								}}
								bg={"green.400"}
								rounded={"full"}
								px={6}
								_hover={{
									bg: "green.500",
								}}
							>
								Your Playlists
							</Button>
						</Stack>
					</Stack>

					{/* Modals */}
					<OverviewPageModal
						content={modalContent}
						title={modalTitle}
						isOpen={isOpen}
						onOpen={onOpen}
						onClose={onClose}
					/>
				</Container>
			</Center>
		</>
	);
}
