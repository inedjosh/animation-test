import { Box, Flex, Image } from "@chakra-ui/react";
import { useEffect, useRef, useState } from "react";
import { useInView, motion } from "framer-motion";
import MovingImg from "./../assets/movingImg.png";

function MovingImageDiv(props) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const [scaleVal, setScaleVal] = useState(1);
  const [translateVal, setTranslateVal] = useState(10);

  useEffect(() => {
    const interval = setInterval(() => {
      const randomScale = Math.random() * (1.3 - 1.15) + 1;
      setScaleVal(randomScale);

      const randomTranslate = Math.random() * (30 - -30) + -20;
      setTranslateVal(randomTranslate);
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <Box ref={ref} w={"100%"} mt={"90px"}>
      <Box
        as={motion.div}
        style={{
          scale: isInView && scaleVal,
          transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.3s",
          translateX: isInView && `${translateVal}px`,
          translateY: isInView && `${translateVal}px`,
        }}
        px={"11%"}
        h={"90vh"}
      >
        <Image
          src={MovingImg}
          w={"100%"}
          borderRadius={"20px"}
          h={"100%"}
          objectFit={"cover"}
        />
      </Box>
    </Box>
  );
}

export default MovingImageDiv;
