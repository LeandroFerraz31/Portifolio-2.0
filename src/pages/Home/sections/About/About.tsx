import { Box, Container, Grid, Typography, styled, Button, Divider } from "@mui/material";
import SchoolIcon from '@mui/icons-material/School';
import WorkspacePremiumIcon from '@mui/icons-material/WorkspacePremium';
import { useInView } from 'react-intersection-observer'; // Import useInView for detecting element visibility

const About = () => {
  const [experienceRef, experienceInView] = useInView({ triggerOnce: true });
  const [educationRef, educationInView] = useInView({ triggerOnce: true });

  return (
    <StyledAbout id="skill-section">
      <Container maxWidth="lg">
        <Typography variant="h2" display="flex" justifyContent="center" alignItems="center" pb="5%">
          Sobre mim
        </Typography>
        <Grid container spacing={3} display={"flex"} justifyContent={"center"}>
          <Grid item xs={12} md={4} ref={experienceRef} className={`fade-in ${experienceInView ? 'active' : ''}`}>
            <ExperienceBox>
              <WorkspacePremiumIcon />
              <Typography variant="h5">
              Experiência
              </Typography>
              <Typography>1 ano <br /> Desenvolvedor FullStack</Typography>
            </ExperienceBox>
          </Grid>
          <Grid item xs={12} md={4} ref={educationRef} className={`fade-in ${educationInView ? 'active' : ''}`}>
            <CertificationBox>
              <SchoolIcon />
              <Typography variant="h5">Educação</Typography>
              <Typography>Desenvolvedor Front-End <br />Desenvolvedor FullStack</Typography>
            </CertificationBox>
          </Grid>
          <Grid item xs={12}>
            <Typography align="center">
            Sou desenvolvedor FullStack em formação, focado em aprender diversas tecnologias através do DevClub. Estou entusiasmado em colaborar em projetos significativos e procuro ativamente oportunidades para aplicar meu conhecimento em um ambiente profissional. Comprometido em alcançar a excelência, me dedico a expandir minhas habilidades e contribuir positivamente para as equipes de desenvolvimento.            </Typography>
          </Grid>

          <Grid item xs={12}>
            <Divider style={{ background: "black", width: "100%" }} />

          </Grid>
          <Grid item xs={12}>
            <Typography variant="h2" display="flex" justifyContent="center" alignItems="center" gutterBottom>
            Habilidades
            </Typography>
            <Box display="flex" justifyContent="center" flexWrap="wrap">
              <SkillButton variant="outlined">JavaScript</SkillButton>
              <SkillButton variant="outlined">React</SkillButton>
              <SkillButton variant="outlined">Material UI</SkillButton>
              <SkillButton variant="outlined">CSS</SkillButton>
              <SkillButton variant="outlined">HTML</SkillButton>
              <SkillButton variant="outlined">Figma</SkillButton>
              <SkillButton variant="outlined">Git</SkillButton>
              <SkillButton variant="outlined">Typescript</SkillButton>
              <SkillButton variant="outlined">Node.js</SkillButton>
              <SkillButton variant="outlined">MongoDB</SkillButton>
              {/* Add more skill buttons as needed */}
            </Box>
          </Grid>
        </Grid>
      </Container>
    </StyledAbout>
  );
};

const StyledAbout = styled(Box)(({ theme }) => ({
  backgroundColor: "#fff",
  padding: theme.spacing(0),
  paddingTop: theme.spacing(8),
  paddingBottom: theme.spacing(8),
  minHeight: "100vh",
}));

const SkillButton = styled(Button)(({ theme }) => ({
  margin: theme.spacing(1),
  borderColor: theme.palette.primary.main,
  color: theme.palette.primary.main,
  '&:hover': {
    backgroundColor: theme.palette.primary.light,
    color: "#fff",
  },
  width: "150px",
  height: "40px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
}));

const ExperienceBox = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.primary.contrastText,
  color: theme.palette.primary.main,
  border: `1px solid ${theme.palette.primary.main}`,
  padding: theme.spacing(3),
  borderRadius: theme.shape.borderRadius,
  textAlign: "center",
  width: "100%",
  maxWidth: "300px",
  margin: "0 auto",
}));

const CertificationBox = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.primary.contrastText,
  color: theme.palette.primary.main,
  border: `1px solid ${theme.palette.primary.main}`,
  padding: theme.spacing(3),
  borderRadius: theme.shape.borderRadius,
  textAlign: "center",
  width: "100%",
  maxWidth: "300px",
  margin: "0 auto",
}));

export default About;
