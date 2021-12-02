import { Box, Text, Divider, useColorMode } from "@chakra-ui/react";

export const TinderDaoMaker = () => {
  const { colorMode } = useColorMode();



  const color = { light: "white", dark: "black" };
  return (
    <>
      <Box
        as="section"
        w="100%"
        color={color[colorMode]}
        mt="108px"
        mb="332px"
        textAlign="center"
      >
        <Text as="h3" fontSize="4xl" fontWeight="800">
          Tinder For DAO Maker
        </Text>
        <Text
          as="p"
          maxW="537px"
          fontSize="23px"
          fontWeight="500"
          margin="0 auto"
        >
          Plataforma par encontrar Construtores Anon ou não usando o gitcoin
          como sponser
        </Text>
      </Box>
      <Divider borderBottomWidth='5px' opacity='1' borderColor='#1E1E1E' />
    </>
  );
};
