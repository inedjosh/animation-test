import { Text } from "@chakra-ui/react";

function Span(props) {
  return (
    <Text as="span" color="red" fontWeight="bold" {...props}>
      {props.children}
    </Text>
  );
}

export default Span;
