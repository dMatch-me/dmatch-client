import { Box } from "@chakra-ui/react";
import Image from "next/image";

import DMatchBg from "../../public/background/hero-dMatch.svg";
import Logo from "../../public/logo.svg";

export const Header = () => {
  return (
    <Box
      as="header"
      width="100%"
      height="977px"
      bgImage={`url(${DMatchBg.src})`}
      bgPosition="center"
      bgSize="cover"
      bgRepeat="no-repeat"
      p="49px 0 0 57px"
    >
      <Image width="53px" height="58px" src={Logo.src} alt="Logo" />
    </Box>
  );
};
