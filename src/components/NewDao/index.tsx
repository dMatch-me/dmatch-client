import { Box, Text, useColorMode } from "@chakra-ui/react";

import { Card } from "../Card";

export const NewDao = () => {
  const { colorMode } = useColorMode();

  const color = { light: "white", dark: "black" };
  return (
    <>
      <Box
        as="section"
        w="100%"
        color={color[colorMode]}
        d='flex'
        flexDirection="column"
        alignItems='center'
        mt="108px"
        mb="400px"
        textAlign="center"
      >
        <Text as="h3" fontSize="4xl" fontWeight="800" mb='42px'>
          New DAO
        </Text>
        <Card width={677} height={410} />
      </Box>
    </>
  );
};
