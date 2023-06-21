// 1. Import `extendTheme`
import { extendTheme } from "@chakra-ui/react";

// 2. Call `extendTheme` and pass your custom values
export const theme = extendTheme({
  colors: {
    gray: {
      100: "#F4F5F7",
    },
    black: {
      100: "#000",
    },
    white: {
      100: "#fff",
    },
    green: {
      100: "#1DA99E",
    },
  },
});
