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
				<ListItemText primary='Inicio' />
			</ListItem>
			<Divider component="li" />
			<ListItem button onClick={() => scrollToSection("skill-section")}>
			<StorageTwoToneIcon/>
				<ListItemText primary='Sobre' />
			</ListItem>
			<Divider component="li" />
			<ListItem button onClick={() => scrollToSection("project-section")}>
			<AccountTreeTwoToneIcon/>
				<ListItemText primary='Projetos' />
			</ListItem>
			<Divider component="li" />
			<ListItem button onClick={() => scrollToSection("footer-section")}>
			<ConnectWithoutContactTwoToneIcon/>
				<ListItemText primary='Conexões' />
			</ListItem>
		</List>
	);

	return (
		<>
			<Container maxWidth="lg">
				<AppBar position='fixed'
				sx={{
				  overflowX: 'hidden',
				  width: '100%',
				}}
				>
					<Hidden mdDown>
						<StyledToolbar>
							<MenuItem onClick={() => scrollToSection("about-section")} >
								Inicio
							</MenuItem>
							<MenuItem onClick={() => scrollToSection("skill-section")}>
							
								Sobre
							</MenuItem>
							<MenuItem onClick={() => scrollToSection("project-section")}>
							
								Projetos
							</MenuItem>
							<MenuItem onClick={() => scrollToSection("footer-section")}>
							
							Conexões
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
							height: "32%", // Defina a altura do Drawer aqui
							
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
