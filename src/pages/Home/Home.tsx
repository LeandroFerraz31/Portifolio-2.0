import NavBar from "../../components/NavBar/NavBar";
import About from "./sections/About/About";
import Projects from "./sections/Projects/Projects";
import Hero from "./sections/Hero/Hero";
import Footer from "./sections/Footer/Footer";

const Home = () => {
  

  return (
    <>
      <NavBar />
      <Hero />
      <About />
      <Projects />
      <Footer />
    </>
  );
};

export default Home;
