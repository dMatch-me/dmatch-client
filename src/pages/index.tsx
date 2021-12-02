import { Container } from "../components/Container";
import { Main } from "../components/Main";
import { DarkModeSwitch } from "../components/DarkModeSwitch";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { GitcoinExplore } from "../components/GitcoinExplore";
import { TinderDaoMaker } from "../components/TinderDaoMaker";

const Index = () => (
  <Container>
    <Header />

    <Main>
      <GitcoinExplore />
      <TinderDaoMaker />
    </Main>

    <DarkModeSwitch />
    <Footer />
  </Container>
);

export default Index;
