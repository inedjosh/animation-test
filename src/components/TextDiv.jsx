import { Text } from "@chakra-ui/react";
import React from "react";

function TextDiv(props) {
  return (
    <Text lineHeight={"1.6"} color={"#000"} {...props}>
      {props.children}
    </Text>
  );
}

export default TextDiv;
