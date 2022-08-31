import { Container, Spinner } from "@chakra-ui/react";
import React from "react";

function Loader() {
  return (
    <Container centerContent>
      <Spinner speed="0.5" color="green.500" />
    </Container>
  );
}

export default Loader;
