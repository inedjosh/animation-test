import { Box, Flex, Image, ListItem, Link, List } from "@chakra-ui/react";
import React from "react";
import Logo from "./../assets/logo.png";
import ButtonDiv from "./Button";

function Header(props) {
  return (
    <Flex
      justifyContent={"space-between"}
      alignItems={"center"}
      px={"40px"}
      py={"15px"}
    >
      <Image src={Logo} w={"150px"} />

      <List>
        <ListItem display={"flex"} w={"400px"} justifyContent={"space-between"}>
          <Link
            color={"#A1A1A1"}
            fontFamily={"Satoshi"}
            fontWeight={"700"}
            fontSize={"14px"}
          >
            Case studies
          </Link>
          <Link
            color={"#A1A1A1"}
            fontFamily={"Satoshi"}
            fontWeight={"700"}
            fontSize={"14px"}
          >
            Services
          </Link>
          <Link
            color={"#A1A1A1"}
            fontFamily={"Satoshi"}
            fontWeight={"700"}
            fontSize={"14px"}
          >
            About
          </Link>
          <Link
            color={"#A1A1A1"}
            fontFamily={"Satoshi"}
            fontWeight={"700"}
            fontSize={"14px"}
          >
            Careers
          </Link>
        </ListItem>
      </List>

      <Box>
        <ButtonDiv
          fontFamily={"Satoshi"}
          fontWeight={"400"}
          border={"1px solid #D0D5DD"}
          size="sm"
        >
          {" "}
          Start a project
        </ButtonDiv>
      </Box>
    </Flex>
  );
}

export default Header;
