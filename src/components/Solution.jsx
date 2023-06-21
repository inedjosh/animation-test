import { Box, Flex, Image } from "@chakra-ui/react";
import React from "react";
import TextDiv from "./TextDiv";
import Span from "./Span";
import CardAnimation from "./CardAnimation";
import ProjectsImg from "./../assets/image1.png";
import { motion } from "framer-motion";

function Solution(props) {
  const cards = [
    {
      id: 1,
      title: "OUR PROBLEM SOLVING APPROACH",
      body: "",
      stage: 0,
      number: 0,
      bg: "#fff",
    },
    {
      id: 2,
      title: "IDEATE",
      body: "The goal of ideation is to generate a large quantity of ideas without self-censoring, and then refine and combine them into more actionable ideas. It is an essential step in the design thinking process",
      stage: 1,
      number: "01",
      bg: "#1DA99E",
    },
    {
      id: 3,
      title: "DESIGN",
      body: "The goal of ideation is to generate a large quantity of ideas without self-censoring, and then refine and combine them into more actionable ideas. It is an essential step in the design thinking process",
      stage: 2,
      number: "02",
      bg: "#17877E",
    },
    {
      id: 4,
      title: "DEVELOP",
      body: "The goal of ideation is to generate a large quantity of ideas without self-censoring, and then refine and combine them into more actionable ideas. It is an essential step in the design thinking process",
      stage: 3,
      number: "03",
      bg: "#11655F",
    },
    {
      id: 5,
      title: "IMPROVE",
      body: "The goal of ideation is to generate a large quantity of ideas without self-censoring, and then refine and combine them into more actionable ideas. It is an essential step in the design thinking process",
      stage: 4,
      number: "04",
      bg: "#0C443F",
    },
  ];

  return (
    <Box
      bg={"#FAFAFA"}
      w={"100%"}
      py={"25px"}
      mt={"40px"}
      justifyContent={"center"}
    >
      <Flex justifyContent={"center"} mt={"10px"}>
        <TextDiv
          fontFamily={"Satoshi"}
          color={"#011133"}
          fontSize={"30px"}
          fontWeight={"700"}
          maxW={"75%"}
          textAlign={"center"}
        >
          We specialize in{" "}
          <Span
            as={motion.p}
            display={"inline-block"}
            whileHover={{
              y: [0, -40, 0],
              opacity: [1, 0.5, 0],
              transition: {
                duration: 1.4,
                repeat: Infinity,
                repeatType: "loop",
              },
            }}
            color={"#1DA99E"}
          >
            designing
          </Span>
          ,{" "}
          <Span
            as={motion.p}
            display={"inline-block"}
            whileHover={{
              y: [0, 40, 0],
              opacity: [1, 0.5, 0],
              transition: {
                duration: 1.4,
                repeat: Infinity,
                repeatType: "loop",
              },
            }}
            color={"#FFDF55"}
          >
            building
          </Span>
          ,{" "}
          <Span
            as={motion.p}
            display={"inline-block"}
            whileHover={{
              y: [0, -40, 0],
              opacity: [1, 0.5, 0],
              transition: {
                duration: 1.4,
                repeat: Infinity,
                repeatType: "loop",
              },
            }}
            color={"#D96A3D"}
          >
            shipping
          </Span>{" "}
          and{" "}
          <Span
            as={motion.p}
            display={"inline-block"}
            whileHover={{
              y: [0, 40, 0],
              opacity: [1, 0.5, 0],
              transition: {
                duration: 1.4,
                repeat: Infinity,
                repeatType: "loop",
              },
            }}
            color={"#236BFE"}
          >
            {" "}
            scaling
          </Span>{" "}
          beautiful, usable product with blazing fast efficiency.
        </TextDiv>
      </Flex>

      <Flex justifyContent={"center"} mt={"80px"}>
        {cards.map((card) => (
          <CardAnimation data={card} />
        ))}
      </Flex>
      <Box py={"40px"} px={"60px"} borderRadius={"20px"} mt={"60px"}>
        <Image src={ProjectsImg} w={"100%"} h={"100%"} borderRadius={"20px"} />
      </Box>
      <Flex justifyContent={"center"} mt={"10px"}>
        <TextDiv
          fontFamily={"Satoshi"}
          color={"#011133"}
          fontSize={"30px"}
          fontWeight={"700"}
          maxW={"75%"}
          textAlign={"center"}
        >
          Through challenging core assumptions, we create exact solutions that
          are suited to{" "}
          <Span
            as={motion.p}
            display={"inline-block"}
            whileHover={{
              y: [0, -40, 0],
              opacity: [1, 0.5, 0],
              transition: {
                duration: 1.4,
                repeat: Infinity,
                repeatType: "loop",
              },
            }}
            color={"#1DA99E"}
          >
            {" "}
            user needs
          </Span>{" "}
          since we know that{" "}
          <Span
            as={motion.p}
            display={"inline-block"}
            whileHover={{
              y: [0, 40, 0],
              opacity: [1, 0.5, 0],
              transition: {
                duration: 1.4,
                repeat: Infinity,
                repeatType: "loop",
              },
            }}
            color={"#D96A3D"}
          >
            our clients
          </Span>{" "}
          seek quality and excellence in{" "}
          <Span
            as={motion.p}
            display={"inline-block"}
            whileHover={{
              y: [0, -40, 0],
              opacity: [1, 0.5, 0],
              transition: {
                duration: 1.4,
                repeat: Infinity,
                repeatType: "loop",
              },
            }}
            color={"#FFDF55"}
          >
            products.
          </Span>
        </TextDiv>
      </Flex>
    </Box>
  );
}

export default Solution;
