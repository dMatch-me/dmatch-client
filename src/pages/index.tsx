import { Text } from "@chakra-ui/react";

import { Hero } from "../components/Hero";
import { Container } from "../components/Container";
import { Main } from "../components/Main";
import { DarkModeSwitch } from "../components/DarkModeSwitch";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";

const Index = () => (
  <Container>
    <Header />
    <Hero />
    <Main></Main>

    <DarkModeSwitch />
    <Footer />
  </Container>
);

export default Index;
