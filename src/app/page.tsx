
import Navigation from "./components/common/navigation";
import Hero from "./components/landing/hero";
import About from "./components/landing/about";
import HowItWorks from "./components/landing/how-it-wroks";
import Token from "./components/landing/token";
import Footer from "./components/common/footer";
import Faq from "./components/landing/faq";

export default function Home() {
  return (
    <div>
      <Navigation />
      <Hero />
      <About />
      <HowItWorks />
      <Token />
      <Faq />
      <Footer />
    </div>
  );
}
