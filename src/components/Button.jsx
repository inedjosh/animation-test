import { Button } from "@chakra-ui/react";

function ButtonDiv(props) {
  return (
    <Button borderRadius={"5px"} {...props}>
      {props.children}
    </Button>
  );
}

export default ButtonDiv;
