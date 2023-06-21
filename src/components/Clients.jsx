import React from "react";
import TextDiv from "./TextDiv";
import { Box, Flex, Image } from "@chakra-ui/react";
import CTO from "./../assets/ceo.png";
import { AiOutlineArrowRight, AiOutlineArrowLeft } from "react-icons/ai";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { motion } from "framer-motion";

import "react-vertical-timeline-component/style.min.css";
import { fadeIn, staggerContainer, textVariant } from "../utils/motion";

function Clients(props) {
  return (
    <Flex
      as={motion.section}
      variants={staggerContainer()}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
      flexDirection={"column"}
    >
      <Flex as={motion.div} variants={textVariant()} justifyContent={"center"}>
        <TextDiv
          fontSize={"40px"}
          color={"rgba(34, 34, 34, 0.87)"}
          fontFamily={"Cabin"}
          fontWeight={"700"}
          maxW={"40%"}
          textAlign={"center"}
        >
          What our clients think of our services
        </TextDiv>
      </Flex>
      <Flex
        mt={"40px"}
        alignItems={"center"}
        flex={".3"}
        justifyContent={"space-around"}
      >
        <Flex
          w={"45px"}
          borderRadius={"100px"}
          h={"45px"}
          border={"2px solid rgba(161, 161, 161, 0.37) "}
          justifyContent={"center"}
          alignItems={"center"}
        >
          <AiOutlineArrowLeft
            color={"rgba(161, 161, 161, 0.37)"}
            fontSize={"20px"}
            fontWeight={"700"}
          />
        </Flex>

        <Box
          as={motion.div}
          variants={fadeIn("left", "spring", 0.5, 1.5)}
          animate={{ transform: "skewX(0deg)  rotate(-10deg)" }}
          p="15px"
          borderRadius="20px"
          border="1px solid #ccc"
          overflow="hidden"
        >
          <Image src={CTO} w={"200px"} />
          <Flex
            justifyContent={"center"}
            alignItems={"center"}
            flexDirection={"column"}
            // transform="skewX(30deg)"
            mt={"20px"}
          >
            <TextDiv
              fontWeight={"700"}
              fontFamily={"Cabin"}
              color={"rgba(34, 34, 34, 0.87)"}
            >
              Freda Burduon
            </TextDiv>
            <TextDiv
              fontWeight={"400"}
              fontFamily={"Cabin"}
              color={"rgba(34, 34, 34, 0.67)"}
            >
              CTO, Jobberman
            </TextDiv>
          </Flex>
        </Box>
        <Box as={motion.div} variants={textVariant(0.5)} flex={".6"}>
          <TextDiv
            fontSize={"18px"}
            color={"rgba(34, 34, 34, 0.67)"}
            fontFamily={"Cabin"}
            fontWeight={"400"}
          >
            Our experience with DotCircle Labs was truly transformative. They
            listened, helping us frame our ideas, then brought in creativity,
            sensitivity and professionalism in bucket loads. We felt on the same
            side, working to a common aim which Athlon believed in. We are
            delighted with the branding and importantly so are our community of
            users.”
          </TextDiv>
        </Box>

        <Flex
          w={"45px"}
          borderRadius={"100px"}
          h={"45px"}
          border={"2px solid rgba(161, 161, 161, 0.37) "}
          justifyContent={"center"}
          alignItems={"center"}
        >
          <AiOutlineArrowRight
            color={"rgba(161, 161, 161, 0.37)"}
            fontSize={"20px"}
            fontWeight={"700"}
          />
        </Flex>
      </Flex>
    </Flex>
  );
}

export default Clients;
