import { Box, Container, Grid, styled, Typography } from "@mui/material";
import Avatar from "../../../../assets/images/avatar.png";
import DownloadIcon from "@mui/icons-material/Download";
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import StyledButton from "../../../../components/StyledButton/StyledButton";
import { AnimatedBackground } from "../../../../components/AnimatedBackground/AnimatedBackground";
import React from "react";

const Hero = () => {
  const handleDownloadCV = () => {
    const pdfPath = 'https://drive.google.com/file/d/1aKX7S6gww8vTPY-1VE485iWK7ot0AKbT/view?usp=drive_link';
    window.open(pdfPath, '_blank');
  };

  const handleContactMe = () => {
    window.open('https://api.whatsapp.com/send?phone=051983012611');
  };

  const StyledHero = styled("div")(({ theme }) => ({
    background: theme.palette.primary.main,
    minHeight: "100vh", // Use minHeight ao invés de height
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

  const StyledImg = styled("img")(({ theme }) => ({
    width: "75%",
    borderRadius: "50%",
    border: `1px solid ${theme.palette.primary.contrastText}`
  }));

  const [typedText, setTypedText] = React.useState('');
  const targetText = "Developer FullStack";

  React.useEffect(() => {
    const textSpeed = 100; 

    let currentIndex = 0;
    const intervalId = setInterval(() => {
      if (currentIndex <= targetText.length) {
        setTypedText(targetText.slice(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(intervalId);
      }
    }, textSpeed);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return (
    <>
      <StyledHero>
        <Container maxWidth="lg">
          <Grid container spacing={2}>
            <Grid item xs={12} md={5}>
              <Box position="relative">
                <Box position="absolute" width={"130%"} top={-100} right={0}>
                  <AnimatedBackground />
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
                I'm a {typedText}
              </Typography>
              <Grid container display="flex" justifyContent="center" spacing={4} pt={3}>
                <Grid
                  item
                  xs={12}
                  md={4}
                  display="flex"
                  justifyContent="center"
                >
                  <StyledButton onClick={handleDownloadCV}>
                    <DownloadIcon />
                    <Typography>
                      Download CV
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
                  <StyledButton onClick={handleContactMe}>
                    <WhatsAppIcon/>
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
