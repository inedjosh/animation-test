import { Box, Button, Flex } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import TextDiv from "./TextDiv";
import ButtonDiv from "./Button";
import {
  motion,
  useMotionValue,
  useMotionValueEvent,
  useTransform,
} from "framer-motion";
import { fadeIn, textVariant } from "../utils/motion";

function Hero(props) {
  const x = useMotionValue(10);
  const xInput = [0, 50, 100];
  const background = useTransform(x, xInput, [
    "rgba(0, 82, 204, )",
    "rgba(235, 54, 127, 1)",
    "rgba(252, 109, 38)",
  ]);
  const gradientA = useTransform(x, xInput, [
    "rgba(0, 82, 204, )",
    "#161616",
    "#161616",
  ]);
  const gradientB = useTransform(x, xInput, [
    "#161616",
    "rgba(235, 54, 127, 1)",
    "#161616",
  ]);
  const gradientC = useTransform(x, xInput, [
    "#161616",
    "#161616",
    "rgba(252, 109, 38)",
  ]);
  const fontSizeA = useTransform(
    x,
    xInput,

    ["100px", "90px", "85px"]
  );
  const fontSizeB = useTransform(
    x,
    xInput,

    ["90px", "100px", "85px"]
  );
  const fontSizeC = useTransform(
    x,
    xInput,

    ["85px", "90px", "100px"]
  );

  useMotionValueEvent(x, "animationStart", () => {
    console.log("animation started on x");
  });

  useMotionValueEvent(x, "change", (latest) => {
    console.log("x changed to", latest);
  });

  const [xValTracker, setxValTracker] = useState(0);

  const heroText = [
    "World class design and engineering teams to get your ideas and projects up and running quickly",
    "We offer custom software development solutions tailored to your business needs.",
    "World class design and engineering teams to get your ideas and projects up and running quickly",
  ];

  const [textIndex, setTextIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setTextIndex((prevIndex) => (prevIndex + 1) % heroText.length);
    }, 3500);

    return () => {
      clearInterval(interval);
    };
  }, []);

  const currentText = heroText[textIndex];

  useEffect(() => {
    const interval = setInterval(() => {
      setxValTracker((prev) => {
        const newValue = prev + 10;
        if (newValue === 100) {
          return 0;
        }
        return newValue;
      });
    }, 1500);

    return () => {
      clearInterval(interval);
    };
  }, []);

  useEffect(() => {
    x.set(xValTracker);
  }, [x, xValTracker]);

  return (
    <Flex
      as={motion.div}
      // style={{ background: background }}
      justifyContent={"center"}
      alignItems={"center"}
      mt={"120px"}
      flexDirection={"column"}
    >
      <Flex px={"60px"} w={"100%"} justifyContent={"space-around"}>
        <TextDiv
          as={motion.p}
          style={{ color: gradientA, fontSize: fontSizeA }}
          fontWeight={"700"}
          fontFamily={"Inter"}
          transition={{
            duration: 0.5,
            ease: "easeInOut",
          }}
        >
          Design.
        </TextDiv>
        <TextDiv
          as={motion.p}
          style={{ color: gradientB, fontSize: fontSizeB }}
          fontWeight={"700"}
          fontFamily={"Inter"}
          fonstSize={"85px"}
          transition={{
            duration: 0.5,
            ease: "easeInOut",
          }}
        >
          Develop.
        </TextDiv>
        <TextDiv
          as={motion.p}
          style={{ color: gradientC, fontSize: fontSizeC }}
          fontWeight={"700"}
          fontFamily={"Inter"}
          fonstSize={"85px"}
          transition={{
            duration: 0.5,
            ease: "easeInOut",
          }}
        >
          Maintain.
        </TextDiv>
      </Flex>
      <TextDiv
        as={motion.p}
        mt={"20px"}
        fontFamily={"Satoshi"}
        maxW={"560px"}
        textAlign={"center"}
        fontSize={"19px"}
        fontWeight={"400"}
        color={"#888888"}
        layout
        variants={textVariant()}
        transition={{
          duration: 1,
          delay: 0.3,
          ease: "easeInOut",
        }}
      >
        {currentText}
      </TextDiv>
      <Flex mt={"30px"} justifyContent={"space-between"}>
        <Box mr={"5px"}>
          <ButtonDiv
            fontFamily={"Inter"}
            fontWeight={"500"}
            border={"1px solid #000"}
            bg={"#000"}
            color={"#fff"}
            size="sm"
            fontSize={"14px"}
          >
            {" "}
            Start a project
          </ButtonDiv>
        </Box>
        <Box ml={"5px"} position="relative" zIndex={1}>
          <ButtonDiv
            fontFamily={"Inter"}
            fontWeight={"500"}
            border={"1px solid #0052CC"}
            bg={"#fff"}
            color={"#000000"}
            size="sm"
            fontSize={"14px"}
          >
            {" "}
            Free consultation
          </ButtonDiv>
          <Box
            as={motion.div}
            position="absolute"
            top={0}
            left={0}
            right={0}
            bottom={0}
            style={{ backgroundColor: background }}
            opacity={0.7}
            zIndex={-1}
            filter="blur(30px)"
          />
        </Box>
      </Flex>
    </Flex>
  );
}

export default Hero;
