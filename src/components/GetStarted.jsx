import { Box, Flex, Image } from "@chakra-ui/react";
import React from "react";
import TextDiv from "./TextDiv";
import Vector from "./../assets/vector.png";
import ButtonDiv from "./Button";

function GetStarted(props) {
  return (
    <Flex
      justifyContent={"center"}
      flexDirection={"column"}
      alignItems={"center"}
      mt={"60px"}
    >
      <TextDiv
        fontSize={"40px"}
        color={"rgba(34, 34, 34, 0.87)"}
        fontFamily={"Cabin"}
        fontWeight={"700"}
        maxW={"40%"}
        textAlign={"center"}
      >
        Have a great project in mind? Let’s get started.
      </TextDiv>
      <Flex
        flexDirection={"column"}
        justifyContent={"center"}
        alignItems={"center"}
        position={"relative"}
        h={"100%"}
      >
        <Image src={Vector} h={"230px"} w={"100%"} objectFit={"cover"} />
        <Box position={"absolute"} top={"20%"}>
          <ButtonDiv
            fontFamily={"Satoshi"}
            fontWeight={"400"}
            border={"1px solid ##DA99E"}
            size="sm"
            bg={"#1DA99E"}
            color={"#fff"}
          >
            {" "}
            Contact Us
          </ButtonDiv>
        </Box>
      </Flex>
    </Flex>
  );
}

export default GetStarted;
