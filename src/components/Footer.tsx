import {
  Flex,
  Box,
  List,
  ListItem,
  Link,
  Text,
  useColorMode,
} from "@chakra-ui/react";
import TwitterIcon from "../public/twitter-icon.svg";
import Image from "next/image";

const links = [
  { linkName: "Blog", href: "#" },
  { linkName: "Telegram", href: "#" },
  { linkName: "MakertPlace", href: "#" },
  { linkName: "OITO", href: "#" },
];

const currentYear = new Date().getFullYear();

export const Footer = () => {
  const { colorMode } = useColorMode();

  const color = { light: "white", dark: "black" };
  return (
    <Flex
      as="footer"
      w="100%"
      justify="space-between"
      color={color[colorMode]}
      px="86px"
      mb="65px"
    >
      <Box as="nav">
        <List d="flex" gridGap="20px">
          {links.map(({ href, linkName }) => (
            <ListItem key={linkName}>
              <Link
                href={href}
                fontWeight="500"
                fontSize="15px"
                isExternal
                _hover={{}}
                _focus={{}}
              >
                {linkName}
              </Link>
            </ListItem>
          ))}
        </List>
      </Box>
      <Box ml="-60px">
        <Image width={30} height={24} src={TwitterIcon.src} />
      </Box>

      <Text fontWeight="500" fontSize="15px">
        Copyright © {currentYear}, dMatch.xyz
      </Text>
    </Flex>
  );
};
