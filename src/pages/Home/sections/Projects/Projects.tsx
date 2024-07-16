
import { Box, Container, Grid, Typography, styled, Button, } from "@mui/material";
import Calc from "../../../../assets/images/calculadora.png";
import Portifolio from "../../../../assets/images/portifolio.png";



const Projects: React.FC = () => {

 
    const handleViewProject = () => {
      const pdfPath = 'https://portifolioferraz.netlify.app/';
      window.open(pdfPath, '_blank');
    };
  
    const handleViewCode = () => {
      window.open('https://github.com/LeandroFerraz31/Portifolio-Ferraz');
    };

    const handleViewCalc = () => {
      const pdfPath = 'https://imaginative-chaja-c62aba.netlify.app/';
      window.open(pdfPath, '_blank');
    };
  
    const handleViewCodeCalc = () => {
      window.open('https://github.com/LeandroFerraz31/calculadora-emprestimo-br');
    };



    const StyledProjects = styled("div")(({ theme }) => ({
        background: theme.palette.primary.main,
        minHeight: "100vh", // Use minHeight ao invés de height
        color: theme.palette.primary.contrastText,
        padding: theme.spacing(1),
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
    <StyledProjects id="project-section">
    <Container maxWidth="lg" >
        <Typography variant="h2" display="flex" justifyContent="center" alignItems="center" pb="5%" color="primary.contrastText">
          Projetos
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
              A Calculadora de Empréstimo permite ao usuário inserir o valor do empréstimo, taxa de juros e prazo em meses. Após clicar em "Calcular", são exibidos os resultados: juros mensais, juros anuais, valor total e pagamento mensal. A interface é estilizada com CSS e adaptada para diferentes dispositivos. A função JavaScript calculateLoan() processa os dados inseridos e atualiza os resultados na página.              
              </Typography>
              <Typography variant="body2" paragraph>
                <strong>Technologies:</strong> JavaScript, HTML, CSS
              </Typography>
              <Grid item xs={12}  md={12}>
              <Box my={1} flex="1" display="flex" justifyContent="center" alignItems="center" gap="20px" >
                <ProjectButton variant="outlined" onClick={handleViewCalc} sx={{ fontSize: 11 }}>Ver Projeto</ProjectButton>
                <ProjectButton variant="outlined" onClick={handleViewCodeCalc} sx={{ fontSize: 11 }}>Ver Código</ProjectButton>
              </Box>
              </Grid>
            </ProjectBox>
          </Grid>
          {/* Projeto 2 */}
          <Grid item xs={12}  md={6}>
            <ProjectBox>
            <Box display="flex" flexDirection="column" alignItems="flex-start" justifyContent="flex-start" max-width="100%" >
              <Typography variant="h6" gutterBottom>Primeiro Portifolio</Typography>
              <Typography variant="body2" color="primary.contrastText" gutterBottom>May 2023 - Jul 2023</Typography>
            </Box>
              <Box my={3.8}>
                <ProjectsImg src={Portifolio} alt="Project-2" style={{ width: '100%', borderRadius: '8px' }} />
              </Box>
              <Typography variant="body1" paragraph>
              O Portfólio Pessoal é um site Front End que destaca habilidades e projetos do usuário. Organizado em seções como introdução, biografia e lista de projetos, utiliza HTML para estrutura e CSS para estilização responsiva. Cada projeto inclui imagens e links externos para detalhes adicionais. Elementos interativos como botões de contato e links para redes sociais são integrados para facilitar a interação.              </Typography>
              <Typography variant="body2" paragraph>
                <strong>Technologies:</strong> React, TypeScript, Material UI
              </Typography>
              <Grid item xs={12}  md={12}>
              <Box  my={1} flex="1" display="flex" justifyContent="center" alignItems="center" gap="20px">
                <ProjectButton variant="outlined" onClick={handleViewProject} sx={{ fontSize: 11 }}>
                Ver Projeto</ProjectButton>
                <ProjectButton variant="outlined" onClick={handleViewCode}sx={{ fontSize: 11 }}>Ver Código</ProjectButton>
              </Box>
              </Grid>
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
