import React, { useState } from "react";
import Arrow from "./../assets/doubleArrow.png";
import { Box, Flex, Image, transition } from "@chakra-ui/react";
import TextDiv from "./TextDiv";
import { motion } from "framer-motion";
import { Tilt } from "react-tilt";
import { fadeIn } from "../utils/motion";

function CardAnimation(data) {
  const [showBody, setShowBody] = useState(false);

  return (
    <>
      {data.data.id === 1 ? (
        <Box
          border={"1px solid #031110"}
          p={"20px"}
          borderRadius={"20px"}
          bg={data.data.bg}
          w={showBody ? "20%" : "17%"}
          h={"400px"}
          // onMouseOver={() => setShowBody(true)}
          // onMouseOut={() => setShowBody(false)}
          // transition="display 2s ease-in-out"
          // whileHover={{
          //   transition: { duration: 0.6 },
          // }}
        >
          <Flex
            bg={data.bg}
            flexDirection={"column"}
            justifyContent={"center"}
            alignItems={"center"}
            position={"relative"}
            h={"100%"}
          >
            <Image src={Arrow} h={"230px"} w={"100%"} objectFit={"cover"} />
            <Box>
              <TextDiv
                fontSize={"20px"}
                left={"0"}
                ml={"15px"}
                position={"absolute"}
                fontWeight={"700"}
                color={"#000"}
                top={"35%"}
                layout
                transition={{ duration: 1 }}
              >
                {data.data.title}
              </TextDiv>
            </Box>
          </Flex>
        </Box>
      ) : (
        <Tilt
          style={{
            border: "1px solid #031110",
            padding: "20px",
            borderRadius: "20px",
            background: data.data.bg,
            width: showBody ? "19%" : "17% ",
            height: "400px",
          }}
          onMouseEnter={() => {
            setShowBody(true);
            console.log("working");
          }}
          onMouseLeave={() => setShowBody(false)}
          layout
          whileHover={{
            scaleX: 1.1,
          }}
          transition={{ duration: 1 }}
          animate={{ y: -10 }}
        >
          <motion.div
            style={{
              background: data.data.bg,
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              height: "100%",
            }}
          >
            <Box h={"10px"}></Box>
            <motion.div layout transition={{ duration: 0.8 }}>
              <TextDiv
                fontFamily={"Satoshi"}
                fontWeight={"700"}
                fontSize={"35px"}
                color={"#fff"}
              >
                {data.data.number}.
              </TextDiv>
              <TextDiv
                fontWeight={"700"}
                fontFamily={"Satoshi"}
                fontSize={"20px"}
                color={"#fff"}
              >
                {data.data.title}
              </TextDiv>
            </motion.div>
            <motion.div
              layout
              transition={{ duration: 0.8 }}
              animate={{ y: 0, opacity: 1, x: 0 }}
              initial={{ y: 200, opacity: 0, x: 0 }}
              style={{ display: showBody ? "flex" : "none" }}
              variants={fadeIn("down", "spring", 0.5, 1)}
            >
              <TextDiv
                fontFamily="Satoshi"
                fontWeight="300"
                fontSize="14px"
                color="#fff"
              >
                {data.data.body}
              </TextDiv>
            </motion.div>

            <Box>
              <TextDiv
                fontFamily={"Satoshi"}
                fontWeight={"400"}
                fontSize={"16px"}
                color={"#fff"}
              >
                Stage {data.data.stage}
              </TextDiv>
            </Box>
          </motion.div>
        </Tilt>
      )}
    </>
  );
}

export default CardAnimation;
