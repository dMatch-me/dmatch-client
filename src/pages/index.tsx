import { Container } from "../components/Container";
import { Main } from "../components/Main";
import { DarkModeSwitch } from "../components/DarkModeSwitch";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { GitcoinExplore } from "../components/GitcoinExplore";

const Index = () => (
  <Container>
    <Header />

    <Main>
      <GitcoinExplore />
    </Main>

    <DarkModeSwitch />
    <Footer />
  </Container>
);

export default Index;
