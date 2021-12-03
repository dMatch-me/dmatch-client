import {
  Box,
  Flex,
  SimpleGrid,
  Text,
  Button,
  useColorMode,
} from "@chakra-ui/react";

import { Card } from "../Card";

export const GitcoinExplore = () => {
  const { colorMode } = useColorMode();

  const bgColor = { light: "gray.50", dark: "gray.900" };

  const color = { light: "white", dark: "black" };
  return (
    <Box as="section" justifyContent="flex-start" color={color[colorMode]}>
      <Flex direction={["column", , "row"]}>
        <Card width={677} height={410} />

        <Box
          d="flex"
          justifyContent={["center", , "flex-end"]}
          flexDirection="column"
          w={["100%", , "537px"]}
          alignItems="center"
        >
          <Text fontSize="4xl" fontWeight="800">
            Gitcoin
          </Text>
          <Text
            fontSize="23px"
            fontWeight="500"
            my="20px"
            maxWidth="340px"
            textAlign="center"
          >
            Build and Fund the Open Web Together Connect with the community
            developing digital public goods, creating financial freedom, and
            defining the future of the open web.
          </Text>
          <Button
            width="214px"
            height="59px"
            borderRadius="50px"
            lineHeight="-1px"
            bg="#6736DD"
            fontSize="23px"
            fontWeight="700"
            variant="solid"
            _hover={{ filter: "brightness(0.9)" }}
          >
            Explorer Now
          </Button>
        </Box>
      </Flex>
      <GitcoinExploreGrid />
    </Box>
  );
};

const GitcoinExploreGrid = () => {
  return (
    <SimpleGrid
      maxW="1302px"
      minChildWidth={["100%", "390px"]}
      placeItems="center"
      spacing="45px 34px"
      mt="74px"
    >
      <Card width={400} height={242} />
      <Card width={400} height={242} />
      <Card width={400} height={242} />
      <Card width={400} height={242} />
      <Card width={400} height={242} />
      <Card width={400} height={242} />
    </SimpleGrid>
  );
};
