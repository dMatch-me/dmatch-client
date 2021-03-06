import { Container } from "../components/Container";
import { Main } from "../components/Main";
import { DarkModeSwitch } from "../components/DarkModeSwitch";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { GitcoinExplore } from "../components/GitcoinExplore";
import { TinderDaoMaker } from "../components/TinderDaoMaker";
import { TestimonialMatch } from "../components/TestimonialMatch";
import { NewDao } from "../components/NewDao";

const Index = () => (
  <Container>
    <Header />

    <Main>
      <GitcoinExplore />
      <TinderDaoMaker />
      <TestimonialMatch />
      <NewDao />
    </Main>

    <DarkModeSwitch />
    <Footer />
  </Container>
);

export default Index;
