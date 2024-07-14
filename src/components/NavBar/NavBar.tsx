import {
	AppBar,
	Container,
	MenuItem,
	Toolbar,
	styled,
	Drawer,
	List,
	ListItem,
	ListItemText,
	IconButton,
	Hidden,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { useState, type MouseEvent, type KeyboardEvent } from "react";
import AccountCircleTwoToneIcon from '@mui/icons-material/AccountCircleTwoTone';
import StorageTwoToneIcon from '@mui/icons-material/StorageTwoTone';
import AccountTreeTwoToneIcon from '@mui/icons-material/AccountTreeTwoTone';
import ConnectWithoutContactTwoToneIcon from '@mui/icons-material/ConnectWithoutContactTwoTone';
import Divider from '@mui/material/Divider';



const Navbar = () => {
	const [drawerOpen, setDrawerOpen] = useState(false);

	const toggleDrawer =
		(open: boolean) => (event: MouseEvent | KeyboardEvent) => {
			if (
				event.type === "keydown" &&
				((event as KeyboardEvent).key === "Tab" ||
					(event as KeyboardEvent).key === "Shift")
			) {
				return;
			}
			setDrawerOpen(open);
		};

	const scrollToSection = (id: string) => {
		const section = document.getElementById(id);
		if (section) {
			section.scrollIntoView({ behavior: "smooth" });
		}
		setDrawerOpen(false);
	};

	const StyledToolbar = styled(Toolbar)(() => ({
		display: "flex",
		justifyContent: "space-between",
	}));

	const drawerItems = (
		<List>
			<ListItem button onClick={() => scrollToSection("about-section")}>
			<AccountCircleTwoToneIcon/>
				<ListItemText primary='About' />
			</ListItem>
			<Divider component="li" />
			<ListItem button onClick={() => scrollToSection("skill-section")}>
			<StorageTwoToneIcon/>
				<ListItemText primary='Skill' />
			</ListItem>
			<Divider component="li" />
			<ListItem button onClick={() => scrollToSection("project-section")}>
			<AccountTreeTwoToneIcon/>
				<ListItemText primary='Project' />
			</ListItem>
			<Divider component="li" />
			<ListItem button onClick={() => scrollToSection("footer-section")}>
			<ConnectWithoutContactTwoToneIcon/>
				<ListItemText primary='Connections' />
			</ListItem>
		</List>
	);

	return (
		<>
			<Container maxWidth='lg'>
				<AppBar position='fixed'>
					<Hidden mdDown>
						<StyledToolbar>
							<MenuItem onClick={() => scrollToSection("about-section")} >
								About
							</MenuItem>
							<MenuItem onClick={() => scrollToSection("skill-section")}>
							
								Skill
							</MenuItem>
							<MenuItem onClick={() => scrollToSection("project-section")}>
							
								Project
							</MenuItem>
							<MenuItem onClick={() => scrollToSection("footer-section")}>
							
							Connections
							</MenuItem>
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
				<Drawer
					anchor='left'
					open={drawerOpen}
					onClose={toggleDrawer(false)}
					sx={{
						"& .MuiDrawer-paper": {
							height: "30%", // Defina a altura do Drawer aqui
							
						},
					}}
				>
					{drawerItems}
				</Drawer>
			</Container>
		</>
	);
};

export default Navbar;
