import NavBar from "../../components/NavBar/NavBar";
import About from "./sections/About/About";
import Projects from "./sections/Projects/Projects"
import Hero from "./sections/Hero/Hero";

const Home = () => {
	return (
		<>
      		<NavBar />
			<Hero />
			<About/>
			<Projects />
		</>
	);
};

export default Home;
