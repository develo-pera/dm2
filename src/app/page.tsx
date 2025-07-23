
import Navigation from "./components/common/navigation";
import Hero from "./components/landing/hero";
import About from "./components/landing/about";
import HowItWorks from "./components/landing/how-it-wroks";

export default function Home() {
  return (
    <div>
      <Navigation />
      <Hero />
      <About />
      <HowItWorks />
    </div>
  );
}
