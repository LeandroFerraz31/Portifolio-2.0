import { AppBar, MenuItem, Toolbar, styled } from "@mui/material";

const Navbar = () => {
	const StyledToolbar = styled(Toolbar)(() => ({
		display:"flex",
		justifyContent: "space-between",
    
	}));
	return (
		<>
			<AppBar position='fixed'>
				<StyledToolbar>
					<MenuItem>About</MenuItem>
					<MenuItem>Skill</MenuItem>
					<MenuItem>Project</MenuItem>
				</StyledToolbar>
			</AppBar>
		</>
	);
};

export default Navbar;
