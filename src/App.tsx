import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import CadastroPage from './pages/CadastroPage';
import UsuariosPage from './pages/UsuariosPage';
import { AppBar, Toolbar, Button, Container } from '@mui/material';

export default function App() {
  return (
    <Router>
      <AppBar position="static">
        <Toolbar>
          <Button color="inherit" component={Link} to="/">Cadastro</Button>
          <Button color="inherit" component={Link} to="/usuarios">Usuários</Button>
        </Toolbar>
      </AppBar>
      <Container sx={{ mt: 4 }}>
        <Routes>
          <Route path="/" element={<CadastroPage />} />
          <Route path="/usuarios" element={<UsuariosPage />} />
        </Routes>
      </Container>
    </Router>
  );
}
