
import { Box, Container, Grid, Typography, styled, Button, Divider } from "@mui/material";
import SchoolIcon from '@mui/icons-material/School';
import WorkspacePremiumIcon from '@mui/icons-material/WorkspacePremium';

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

const About: React.FC = () => {
  const AboutSection = styled(Box)(({ theme }) => ({
    backgroundColor: "#fff",
  padding: theme.spacing(0),
  paddingBottom: theme.spacing(8), // Espaçamento adicional no final
  minHeight: "100vh", // Garantir altura mínima
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

  return (
    <Container maxWidth="lg">
      <AboutSection>
        <Typography variant="h2" display="flex" justifyContent="center" alignItems="center" pb="20px" >
          About me
        </Typography>
        <Grid container spacing={3}>
          <Grid item xs={12} md={6}>
            <ExperienceBox>
            <WorkspacePremiumIcon/>
              <Typography variant="h5">
                Experience
                </Typography>
              <Typography>1 year <br /> FullStack Developer</Typography>
            </ExperienceBox>
          </Grid>
          <Grid item xs={12} md={6}>
            <CertificationBox>
            <SchoolIcon/>
              <Typography variant="h5">Education</Typography>
              <Typography>Front-End Developer <br /> FullStack Developer</Typography>
            </CertificationBox>
          </Grid>
          <Grid item xs={12}>
            <Typography align="center">
              I am a FullStack developer in training, focused on learning various technologies through DevClub. I am enthusiastic about collaborating on meaningful projects and am actively seeking opportunities to apply my knowledge in a professional environment. Committed to achieving excellence, I am dedicated to expanding my skills and making a positive contribution to development teams.
            </Typography>
          </Grid>

          <Grid item xs={12} >
            <Divider  style={{ background: "black", width: "100%", }}/>
          
          </Grid>
          <Grid item xs={12}>
            <Typography variant="h2" display="flex" justifyContent="center" alignItems="center" gutterBottom>
              Skills
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
      </AboutSection>
    </Container>
  );
};

export default About;
