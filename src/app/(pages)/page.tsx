
import Hero from "../components/landing/hero";
import About from "../components/landing/about";
import HowItWorks from "../components/landing/how-it-wroks";
import Token from "../components/landing/token";
import Faq from "../components/landing/faq";
import Team from "../components/landing/team";
import Projects from "../components/landing/projects";
import Calculator from "../components/landing/calculator";

export default function Home() {
  return (
    <div>
      <Hero />
      <About />
      <HowItWorks />
      <Token />
      <Calculator />
      <Projects />
      <Faq />
      {/* <Team /> */}
      {/* <Footer /> */}
    </div>
  );
}
