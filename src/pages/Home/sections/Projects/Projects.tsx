
import { Box, Container, Grid, Typography, styled, Button, } from "@mui/material";
import Calc from "../../../../assets/images/calculadora.png";
import Portifolio from "../../../../assets/images/portifolio.png";

const Projects: React.FC = () => {
    const StyledProjects = styled("div")(({ theme }) => ({
        background: theme.palette.primary.main,
        minHeight: "100vh", // Use minHeight ao invés de height
        color: theme.palette.primary.contrastText,
        padding: theme.spacing(12),
        paddingTop: theme.spacing(8), // Espaçamento superior
        paddingBottom: theme.spacing(8), // Espaçamento inferior
      
  
    }));

const ProjectButton = styled(Button)(({ theme }) => ({
    position:"sticky",
    backgroundColor: "transparent",
    border: `1px solid ${theme.palette.primary.contrastText}`,
    borderRadius: "3px",
    padding: "5px 15px",
    width: "100%",
    color:theme.palette.primary.contrastText,
    display: "inline-flex",
    justifyContent: "center",
    alignItems: "center",
    transition: "background-color 0.3s ease",
    '&:hover':{
        backgroundColor: theme.palette.secondary.light,
    }
}));

// Estilos personalizados para as caixas de projetos
const ProjectBox = styled(Box)(({ theme }) => ({
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.primary.contrastText,
    border: `1px solid ${theme.palette.primary.contrastText}`,
    padding: theme.spacing(3),
    borderRadius: theme.shape.borderRadius,
    textAlign: "center",
    width: "100%",
    maxWidth: "400px",
    margin: "0 auto",
    minHeight: "500px", // Defina a altura mínima desejada
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between", // Para que o botão fique na parte inferior
    '&:hover': {
      backgroundColor: theme.palette.primary.dark,
    },
}));

const ProjectsImg = styled("img")(({theme}) => ({
     border: `1px solid ${theme.palette.primary.contrastText}`
}));



  return (
    <>
    <StyledProjects>
    <Container maxWidth="lg">
        <Typography variant="h2" display="flex" justifyContent="center" alignItems="center" pb="5%" color="primary.contrastText">
          Projects
        </Typography>
        <Grid container spacing={3}>
          {/* Projeto 1 */}
          <Grid item xs={12} md={6}>
            <ProjectBox>
            <Box display="flex" flexDirection="column" alignItems="flex-start" justifyContent="flex-start" max-width="100%" >
              <Typography variant="h6"  gutterBottom>Calculator loan Br</Typography>
              <Typography variant="body2" color="primary.contrastText" gutterBottom>Jul 2023 - Jul 2023</Typography>
            </Box>
              <Box my={2}>
                <ProjectsImg src={Calc} alt="Project-1" style={{ width: '100%', borderRadius: '8px' }} />
              </Box>
              <Typography variant="body1" paragraph>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras porta semper velit vel rutrum. Aliquam vulputate, nisi eget tristique mattis, nisi sem faucibus eros, a auctor felis sem ut mauris. Phasellus a ultrices elit. Curabitur ut diam eu orci auctor pretium.
              </Typography>
              <Typography variant="body2" paragraph>
                <strong>Technologies:</strong> JavaScript, HTML, CSS, Canvas Graphics
              </Typography>
              <Box my={1} flex="1" display="flex" justifyContent="center" alignItems="center" gap="20px" >
                <ProjectButton variant="outlined" onClick={() => console.log("project")}>View Project</ProjectButton>
                <ProjectButton variant="outlined" onClick={() => console.log("code")}>View Code</ProjectButton>
              </Box>
            </ProjectBox>
          </Grid>
          {/* Projeto 2 */}
          <Grid item xs={12} md={6}>
            <ProjectBox>
            <Box display="flex" flexDirection="column" alignItems="flex-start" justifyContent="flex-start" max-width="100%" >
              <Typography variant="h6" pr="100px" gutterBottom>Primeiro Portifolio</Typography>
              <Typography variant="body2" color="primary.contrastText" gutterBottom>May 2023 - Jul 2023</Typography>
            </Box>
              <Box my={2}>
                <ProjectsImg src={Portifolio} alt="Project-2" style={{ width: '100%', borderRadius: '8px' }} />
              </Box>
              <Typography variant="body1" paragraph>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras porta semper velit vel rutrum. Aliquam vulputate, nisi eget tristique mattis, nisi sem faucibus eros, a auctor felis sem ut mauris. Phasellus a ultrices elit. Curabitur ut diam eu orci auctor pretium.
              </Typography>
              <Typography variant="body2" paragraph>
                <strong>Technologies:</strong> React, TypeScript, Material UI
              </Typography>
              <Box my={1} flex="1" display="flex" justifyContent="center" alignItems="center" gap="20px">
                <ProjectButton variant="outlined" onClick={() => console.log("project")} >View Project</ProjectButton>
                <ProjectButton variant="outlined" onClick={() => console.log("code")}>View Code</ProjectButton>
              </Box>
            </ProjectBox>
          </Grid>
          {/* Adicione mais projetos conforme necessário */}
        </Grid>
    </Container>
    </StyledProjects>
    </>
  );
};

export default Projects;
