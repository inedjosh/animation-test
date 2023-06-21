import { Box, Flex, Image } from "@chakra-ui/react";
import React from "react";
import Logo from "./../assets/logo.png";
import TextDiv from "./TextDiv";
import {
  AiOutlineTwitter,
  AiFillLinkedin,
  AiFillGithub,
  AiOutlineDribbble,
} from "react-icons/ai";
import { BsFacebook } from "react-icons/bs";

function Footer(props) {
  const products = [
    {
      id: 1,
      name: "Overview",
    },
    {
      id: 2,
      name: "Features",
    },
    {
      id: 3,
      name: "Solutions",
    },
    {
      id: 4,
      name: "Tutorials",
    },
    {
      id: 5,
      name: "Pricing",
    },
    {
      id: 6,
      name: "Releases",
    },
  ];

  const company = [
    {
      id: 1,
      name: "About us",
    },
    {
      id: 2,
      name: "Careers",
    },
    {
      id: 3,
      name: "Press",
    },
    {
      id: 4,
      name: "News",
    },
    {
      id: 5,
      name: "Media kit",
    },
    {
      id: 6,
      name: "Contact",
    },
  ];

  const resources = [
    {
      id: 1,
      name: "Blog",
    },
    {
      id: 2,
      name: "Newsletter",
    },

    {
      id: 4,
      name: "Events",
    },
    {
      id: 5,
      name: "Help center",
    },
    {
      id: 6,
      name: "Turorials",
    },
    {
      id: 7,
      name: "Support",
    },
  ];

  const social = [
    {
      id: 1,
      name: "Twitter",
    },
    {
      id: 2,
      name: "LinkedIn",
    },
    {
      id: 3,
      name: "Facebook",
    },
    {
      id: 4,
      name: "Github",
    },
    {
      id: 5,
      name: "Instagram",
    },
    {
      id: 6,
      name: "Dribble",
    },
  ];

  const legal = [
    {
      id: 1,
      name: "Terms",
    },
    {
      id: 2,
      name: "Privacy",
    },
    {
      id: 3,
      name: "Cookies",
    },
    {
      id: 4,
      name: "Licences",
    },
    {
      id: 5,
      name: "Settings",
    },
    {
      id: 6,
      name: "Contact",
    },
  ];

  return (
    <Box mt={"40px"}>
      <Flex justifyContent={"center"} px={"60px"}>
        <Box flex={".35"} p={"20px"}>
          <Box>
            <Image src={Logo} w={"180px"} />
          </Box>
          <TextDiv
            fontFamily={"Satoshi"}
            maxW={"70%"}
            fontWeight={"400"}
            fontSize={"16px"}
          >
            Design amazing digital experiences that create more happy in the
            world.
          </TextDiv>
        </Box>
        <Flex flex={".7"} justifyContent={"space-around"}>
          <Box>
            <TextDiv
              fontFamily={"Satoshi"}
              color={"#667085"}
              fontSize={"14px"}
              fontWeight={"500"}
            >
              Products
            </TextDiv>
            {products.map((item) => (
              <Flex alignItems={"center"}>
                <TextDiv
                  key={item.id}
                  fontFamily={"Satoshi"}
                  color={"#475467"}
                  my={"5px"}
                  fontWeight={"500"}
                  fontSize={"16px"}
                >
                  {item.name}{" "}
                </TextDiv>
                {item.name === "Solutions" && (
                  <Box
                    ml={"10px"}
                    bg={"#ECFDF3"}
                    p={"2px"}
                    borderRadius={"20px"}
                  >
                    <TextDiv
                      fontSize={"9px"}
                      fontWeight={"500"}
                      color={"#027A48"}
                    >
                      New
                    </TextDiv>
                  </Box>
                )}
              </Flex>
            ))}
          </Box>
          <Box>
            <TextDiv
              fontFamily={"Satoshi"}
              color={"#667085"}
              fontSize={"14px"}
              fontWeight={"500"}
            >
              Company
            </TextDiv>
            {company.map((item) => (
              <Flex alignItems={"center"}>
                <TextDiv
                  key={item.id}
                  fontFamily={"Satoshi"}
                  color={"#475467"}
                  my={"5px"}
                  fontWeight={"500"}
                  fontSize={"16px"}
                >
                  {item.name}{" "}
                </TextDiv>
                {item.name === "Solutions" && (
                  <Box
                    ml={"10px"}
                    bg={"#ECFDF3"}
                    p={"2px"}
                    borderRadius={"20px"}
                  >
                    <TextDiv
                      fontSize={"9px"}
                      fontWeight={"500"}
                      color={"#027A48"}
                    >
                      New
                    </TextDiv>
                  </Box>
                )}
              </Flex>
            ))}
          </Box>
          <Box>
            <TextDiv
              fontFamily={"Satoshi"}
              color={"#667085"}
              fontSize={"14px"}
              fontWeight={"500"}
            >
              Resources
            </TextDiv>
            {resources.map((item) => (
              <Flex alignItems={"center"}>
                <TextDiv
                  key={item.id}
                  fontFamily={"Satoshi"}
                  color={"#475467"}
                  my={"5px"}
                  fontWeight={"500"}
                  fontSize={"16px"}
                >
                  {item.name}{" "}
                </TextDiv>
                {item.name === "Solutions" && (
                  <Box
                    ml={"10px"}
                    bg={"#ECFDF3"}
                    p={"2px"}
                    borderRadius={"20px"}
                  >
                    <TextDiv
                      fontSize={"9px"}
                      fontWeight={"500"}
                      color={"#027A48"}
                    >
                      New
                    </TextDiv>
                  </Box>
                )}
              </Flex>
            ))}
          </Box>
          <Box>
            <TextDiv
              fontFamily={"Satoshi"}
              color={"#667085"}
              fontSize={"14px"}
              fontWeight={"500"}
            >
              Social
            </TextDiv>
            {social.map((item) => (
              <Flex alignItems={"center"}>
                <TextDiv
                  key={item.id}
                  fontFamily={"Satoshi"}
                  color={"#475467"}
                  my={"5px"}
                  fontWeight={"500"}
                  fontSize={"16px"}
                >
                  {item.name}{" "}
                </TextDiv>
                {item.name === "Solutions" && (
                  <Box
                    ml={"10px"}
                    bg={"#ECFDF3"}
                    p={"2px"}
                    borderRadius={"20px"}
                  >
                    <TextDiv
                      fontSize={"9px"}
                      fontWeight={"500"}
                      color={"#027A48"}
                    >
                      New
                    </TextDiv>
                  </Box>
                )}
              </Flex>
            ))}
          </Box>
          <Box>
            <TextDiv
              fontFamily={"Satoshi"}
              color={"#667085"}
              fontSize={"14px"}
              fontWeight={"500"}
            >
              Legal
            </TextDiv>
            {legal.map((item) => (
              <Flex alignItems={"center"}>
                <TextDiv
                  key={item.id}
                  fontFamily={"Satoshi"}
                  color={"#475467"}
                  my={"5px"}
                  fontWeight={"500"}
                  fontSize={"16px"}
                >
                  {item.name}{" "}
                </TextDiv>
                {item.name === "Solutions" && (
                  <Box
                    ml={"10px"}
                    bg={"#ECFDF3"}
                    p={"2px"}
                    borderRadius={"20px"}
                  >
                    <TextDiv
                      fontSize={"9px"}
                      fontWeight={"500"}
                      color={"#027A48"}
                    >
                      New
                    </TextDiv>
                  </Box>
                )}
              </Flex>
            ))}
          </Box>
        </Flex>
      </Flex>
      <Flex
        bg={"#F9FAFB"}
        justifyContent={"space-between"}
        px={"60px"}
        py={"20px"}
        mt={"40px"}
      >
        <TextDiv fontFamily={"Satoshi"} color={"#667085"} fontWeight={"400"}>
          © 2023 DotCircle Labs. All rights reserved.
        </TextDiv>
        <Flex
          w={"200px"}
          justifyContent={"space-between"}
          alignItems={"center"}
        >
          <AiOutlineTwitter color={"#98A2B3"} fontSize={"25px"} />
          <AiFillLinkedin color={"#98A2B3"} fontSize={"25px"} />
          <BsFacebook color={"#98A2B3"} fontSize={"22px"} />
          <AiFillGithub color={"#98A2B3"} fontSize={"25px"} />
          <AiOutlineDribbble color={"#98A2B3"} fontSize={"25 px"} />
        </Flex>
      </Flex>
    </Box>
  );
}

export default Footer;
