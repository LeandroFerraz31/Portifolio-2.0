import { Box } from "@mui/material";
import Home from "./pages/Home/Home";

const App = () => {
	return (
		<>
			<Box
				sx={{
					overflowX: "hidden", // Impede o scroll horizontal
					width: "100%", // Garante que o Box ocupe toda a largura disponível
				}}
			>
				<Home />
			</Box>
		</>
	);
};

export default App;
