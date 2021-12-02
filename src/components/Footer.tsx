import { Flex, Box, List, ListItem, Link, Text } from "@chakra-ui/react";
import TwitterIcon from "../public/twitter-icon.svg";
import Image from "next/image";

const links = [
  { linkName: "Blog", href: "#" },
  { linkName: "Telegram", href: "#" },
  { linkName: "MakertPlace", href: "#" },
  { linkName: "OITO", href: "#" },
];

const currentYear = new Date().getFullYear();

export const Footer = () => (
  <Flex as="footer" w="100%" justify="space-between">
    <Box as="nav">
      <List d="flex" gridGap="16px">
        {links.map(({ href, linkName }) => (
          <ListItem key={linkName}>
            <Link href={href} isExternal _hover={{}} _focus={{}}>
              {linkName}
            </Link>
          </ListItem>
        ))}
      </List>
    </Box>

    <Image width={30} height={24} src={TwitterIcon.src} />

    <Text>Copyright © {currentYear}, dMatch.xyz</Text>
  </Flex>
);
