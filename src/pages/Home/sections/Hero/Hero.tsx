import { Box, Container, Grid, styled, Typography } from "@mui/material";
import Avatar from "../../../../assets/images/avatar.png";
import DownloadIcon from "@mui/icons-material/Download";
import EmailIcon from "@mui/icons-material/Email";
import StyledButton from "../../../../components/StyledButton/StyledButton";
import { AnimatedBackground } from "../../../../components/AnimatedBackground/AnimatedBackground";

const Hero = () => {
	const StyledHero = styled("div")(({ theme }) => ({
		background: theme.palette.primary.main,
  minHeight: "100vh",  // Use minHeight ao invés de height
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  color: theme.palette.primary.contrastText,
  paddingTop: "100px",
  paddingBottom: "50px", // Espaçamento adicional no final
  [theme.breakpoints.up('md')]: {
    paddingTop: "0",
  }
	}));

	const StyledImg = styled("img")(({theme}) => ({
		width: "75%",
		borderRadius: "50%",
		border: `1px solid ${theme.palette.primary.contrastText}`
	}));

	return (
		<>
			<StyledHero>
				<Container maxWidth="lg">
					<Grid container spacing={2}>
						<Grid item xs={12} md={5}>
							<Box position="relative">
							<Box position="absolute" width={"130%"} top={-100} right={0}>
							<AnimatedBackground/>	
							</Box>
							<Box position="relative" textAlign="center">
							<StyledImg src={Avatar} />
							</Box>
							</Box>						
							
						</Grid>
						<Grid item xs={12} md={7}>
							<Typography
								color="primary.contrastText"
								variant="h1"
								textAlign="center"
								pb={2}
							>
								Leandro Ferraz
							</Typography>
							<Typography
								color="primary.contrastText"
								variant="h2"
								textAlign="center"
								
							>
								I'm a Developer FullStack
							</Typography>
							<Grid container display="flex" justifyContent="center" spacing={4} pt={3} >
								<Grid
									item
									xs={12}
									md={4}
									display="flex"
									justifyContent="center"
								>
									<StyledButton onClick={() => console.log("download")}>
										<DownloadIcon />
										<Typography>
										Dowload CV
										</Typography>
									</StyledButton>
								</Grid>
								<Grid
									item
									xs={12}
									md={4}
									display="flex"
									justifyContent="center"
								>
									<StyledButton onClick={() => console.log("contact")}>
										<EmailIcon />
										<Typography>
										Contact me
										</Typography>
									</StyledButton>
								</Grid>
							</Grid>
						</Grid>
					</Grid>
				</Container>
			</StyledHero>
		</>
	);
};

export default Hero;
