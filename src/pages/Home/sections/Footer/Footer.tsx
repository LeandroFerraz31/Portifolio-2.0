import { Box, Typography, Container, Link, IconButton } from '@mui/material';
import { GitHub, LinkedIn, Email } from '@mui/icons-material';

const Footer: React.FC = () => {
  return (
    <Box
      component="footer"
      sx={{
        py: 4,
        px: 2,
        mt: 'auto',
        backgroundColor: (theme) =>
          theme.palette.mode === 'light'
            ? theme.palette.grey[200]
            : theme.palette.grey[800],
        textAlign: 'center',
        
        
      }}
    >
      <Container maxWidth="lg" id="footer-section">
        <Box sx={{  display: 'flex', justifyContent: 'center', mb: 2 }}>
          <Link href="https://github.com/LeandroFerraz31" target="_blank" rel="noopener" color="inherit">
            <IconButton sx={{ mx:5,'&:hover': { transform: 'scale(1.2)' } }}>
              <GitHub sx={{ fontSize: 40 }}/>
            </IconButton>
          </Link>
          <Link href="https://www.linkedin.com/in/leandro-fz" target="_blank" rel="noopener" color="inherit">
            <IconButton sx={{ mx:5,'&:hover': { transform: 'scale(1.2)' } }}>
              <LinkedIn sx={{ fontSize: 40 }} />
            </IconButton>
          </Link>
          <Link href="mailto:leandro.santos@universo.univates.br" color="inherit">
            <IconButton sx={{mx:5, '&:hover': { transform: 'scale(1.2)' } }}>
              <Email  sx={{ fontSize: 40 }}/>
            </IconButton>
          </Link>
        </Box>
        <Typography variant="body2" color="text.secondary" align="center" >
          {'Todos os direitos reservados Leandro Ferraz © '}
          {new Date().getFullYear()}
          {'.'}
        </Typography>
      </Container>
    </Box>
  );
}

export default Footer;
