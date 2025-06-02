import { useEffect, useState } from 'react';
import { Container, Typography } from '@mui/material';
import type { User } from 'C:/Users/DELL/Projetos/login-usuarios/types/User.ts';
import UserList from '../components/UserList';

export default function UsuariosPage() {
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    const stored = localStorage.getItem('users');
    const parsed: User[] = stored ? JSON.parse(stored) : [];
    setUsers(parsed);
  }, []);

  return (
    <Container>
      <Typography variant="h4" sx={{ my: 3 }}>
        Usuários Cadastrados
      </Typography>
      <UserList users={users} />
    </Container>
  );
}
