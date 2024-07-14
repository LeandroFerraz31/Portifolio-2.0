
import { AppBar, Container, MenuItem, Toolbar, styled, Drawer, List, ListItem, ListItemText, Paper } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Hidden from "@mui/material/Hidden";
import { useState, type MouseEvent, type KeyboardEvent } from "react";


const Navbar = () => {
	const [drawerOpen, setDrawerOpen] = useState(false);

	const toggleDrawer = (open: boolean) => (event: MouseEvent | KeyboardEvent) => {
		if (event.type === 'keydown' && ((event as KeyboardEvent).key === 'Tab' || (event as KeyboardEvent).key === 'Shift')) {
			return;
		}
		setDrawerOpen(open);
    
	};

	const scrollToSection = (id: string) => {
		const section = document.getElementById(id);
		if (section) {
			section.scrollIntoView({ behavior: 'smooth' });
		}
		setDrawerOpen(false);
	};

	const StyledToolbar = styled(Toolbar)(() => ({
		display: "flex",
		justifyContent: "space-between",
	}));

  const StyledDrawer = styled(Paper)(() => ({
			height: "50%", // Defina a altura do Drawer aqui
		
	}));

	const drawerItems = (
		<List>
			<ListItem button onClick={() => scrollToSection('about-section')}>
				<ListItemText primary="About" />
			</ListItem>
			<ListItem button onClick={() => scrollToSection('skill-section')}>
				<ListItemText primary="Skill" />
			</ListItem>
			<ListItem button onClick={() => scrollToSection('project-section')}>
				<ListItemText primary="Project" />
			</ListItem>
		</List>
	);

	return (
		<>
    <StyledDrawer>
			<Container maxWidth='lg'>
				<AppBar position='fixed'>
					<Hidden mdDown>
						<StyledToolbar>
							<MenuItem onClick={() => scrollToSection('about-section')}>About</MenuItem>
							<MenuItem onClick={() => scrollToSection('skill-section')}>Skill</MenuItem>
							<MenuItem onClick={() => scrollToSection('project-section')}>Project</MenuItem>
						</StyledToolbar>
					</Hidden>

					<Hidden smUp>
						<StyledToolbar>
							<IconButton
								size='large'
								edge='start'
								color='inherit'
								aria-label='menu'
								onClick={toggleDrawer(true)}
							>
								<MenuIcon />
							</IconButton>
						</StyledToolbar>
					</Hidden>
				</AppBar>
				<Drawer anchor='left' open={drawerOpen} onClose={toggleDrawer(false)}>
					{drawerItems}
				</Drawer>
			</Container>
      </StyledDrawer>
		</>
	);
};


export default Navbar;
