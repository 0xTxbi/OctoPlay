import { Container } from "@chakra-ui/react";
import React from "react";
import { ClockLoader } from "react-spinners";

function Loader() {
  return (
    <Container centerContent>
      <ClockLoader size={150} />
    </Container>
  );
}

export default Loader;
