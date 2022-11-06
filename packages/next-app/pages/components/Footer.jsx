import React from "react";
import { Container, Divider, Link, Text } from "@chakra-ui/react";

function Footer() {
  return (
    <>
      <Divider w={"80%"} mx={"auto"} />
      <Container py={"2rem"}>
        <Text textAlign={"center"} fontSize={"1rem"}>
        H.E.R. DAO LATAM 💜 {" "}
          <Link isExternal href="https://twitter.com/herdaolatam">
            Twitter
          </Link>
        </Text>
      </Container>
    </>
  );
}

export default Footer;