import NavBar from "../../components/NavBar/NavBar";
import About from "./sections/About/About";
import Hero from "./sections/Hero/Hero";

const Home = () => {
	return (
		<>
      		<NavBar />
			<Hero />
			<About/>
		</>
	);
};

export default Home;
