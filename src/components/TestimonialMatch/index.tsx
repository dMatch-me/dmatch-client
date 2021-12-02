import { Box, Flex, Text, Divider, useColorMode } from "@chakra-ui/react";

import { Card } from "../Card";

export const TestimonialMatch = () => {
  const { colorMode } = useColorMode();

  const color = { light: "white", dark: "black" };
  return (
    <>
      <Box
        as="section"
        w="100%"
        color={color[colorMode]}
        mt="118px"
        textAlign="center"
      >
        <Text as="h3" fontSize="4xl" fontWeight="800">
          What others say about dMatch?
        </Text>
        <Text
          as="p"
          maxW="537px"
          fontSize="23px"
          fontWeight="500"
          margin="0 auto"
        >
          Testimonial of makers playing the games at Supermakers. Thanks a
          million guys!
        </Text>
        <TestimonialMatchFlex />
      </Box>
      <Divider borderBottomWidth="5px" opacity="1" borderColor="#1E1E1E" />
    </>
  );
};

const TestimonialMatchFlex = () => {
  return (
    <Flex gridGap="40px" justify="center" mt="65px" mb="144px">
      <Card width={279} height={384} />
      <Card width={279} height={384} />
      <Card width={279} height={384} />
      <Card width={279} height={384} />
    </Flex>
  );
};
