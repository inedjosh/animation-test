import React from "react";
import TextDiv from "./TextDiv";
import { Box, Flex, Image } from "@chakra-ui/react";
import AppMockImg from "./../assets/iphone-mock.png";

function AppMock(props) {
  return (
    <Flex py={"100px"} justifyContent={"space-around"}>
      <Flex flex={".5"} justifyContent={"space-around"} mt={"40px"}>
        <Box pr={"25px"} mt={"20px"}>
          {["01", "02", "03", "04", "05"].map((num) => (
            <TextDiv
              key={num}
              color={num == "01" ? "#1DA99E" : "rgba(34, 34, 34, 0.37)"}
              fontSize={"30px"}
              fontFamily={"Cabin"}
              fontWeight={"700"}
              borderLeft={num == "01" && " 1px solid #1DA99E"}
              pl={"10px"}
            >
              {num}
            </TextDiv>
          ))}
        </Box>
        <Box>
          <TextDiv
            fontSize={"40px"}
            color={"rgba(34, 34, 34, 0.87)"}
            fontFamily={"Cabin"}
            fontWeight={"700"}
            maxW={"90%"}
          >
            Transforming the UI design of the rising fintech app - Pennywise
          </TextDiv>
          <TextDiv
            color={"rgba(34, 34, 34, 0.6)"}
            fontSize={"18px"}
            fontFamily={"Cabin"}
            fontWeight={"400"}
            maxW={"85%"}
          >
            Our experience with DotCircle Labs was truly transformative. They
            listened, helping us frame our ideas, then brought in creativity,
            sensitivity and professionalism in bucket loads. We felt on the same
            side, working to a common aim which Athlon believed in.
          </TextDiv>
        </Box>
      </Flex>
      <Box flex={".35"}>
        <Image src={AppMockImg} />
      </Box>
    </Flex>
  );
}

export default AppMock;
