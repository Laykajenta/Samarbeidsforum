import NavBar from "./components/NavBar";
import Hero from "./components/Hero";
import News from "./components/News";
import Events from "./components/events";
import Members from "./components/Members";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  return (
    <>
      <NavBar />
      <Hero />
      <News />
      <Events />
      <Members />
      <Contact />
      <Footer />
    </>
  );
}