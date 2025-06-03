import { useEffect, useState } from 'react';
import { Container, Typography } from '@mui/material';
import type { User } from '../../types/User';
import UserForm from '../components/UserForm';

export default function CadastroPage() {
  const [users, setUsers] = useState<User[]>(() => {
    return JSON.parse(localStorage.getItem('users') || '[]');
  });

  const handleAddUser = (newUser: User) => {
    const updated = [...users, newUser];
    setUsers(updated);
    localStorage.setItem('users', JSON.stringify(updated));
  };

  return (
    <Container>
      <Typography variant="h4" sx={{ my: 3 }}>Cadastro de Usuários</Typography>
      <UserForm onAddUser={handleAddUser} />
    </Container>
  );
}
