import { Box, useColorMode } from "@chakra-ui/react";

type CardProps = {
  width: number;
  height: number;
};

export const Card = ({ width, height }:CardProps) => {
  const { colorMode } = useColorMode();

  const bgColor = { light: "#323233", dark: "#fff" };

  return (
    <Box
      w={["100%", ,`${width}px`]}
      h={`${height}px`}
      borderRadius="30px"
      bg={bgColor[colorMode]}
    />
  );
};
