import {
  Link as ChakraLink,
  Text,
  Code,
  List,
  ListIcon,
  ListItem,
} from "@chakra-ui/react";
import { CheckCircleIcon, LinkIcon } from "@chakra-ui/icons";

import { Hero } from "../components/Hero";
import { Container } from "../components/Container";
import { Main } from "../components/Main";
import { DarkModeSwitch } from "../components/DarkModeSwitch";
import { CTA } from "../components/CTA";
import { Footer } from "../components/Footer";



const Index = () => (
  <Container minHeight="100vh">
    <Hero />
    <Main>
    </Main>

    <DarkModeSwitch />
    <Footer>
      <Text>Copyright © 2022, dMatch.xyz</Text>
    </Footer>
  </Container>
);

export default Index;
