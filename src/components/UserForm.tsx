import { useState } from 'react';
import { TextField, Button, Box } from '@mui/material';
import type { User } from '../../types/User';

interface Props {
  onAddUser: (user: User) => void;
}

export default function UserForm({ onAddUser }: Props) {
  const [user, setUser] = useState<User>({ nome: '', email: '' });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (user.nome && user.email) {
      onAddUser(user);
      setUser({ nome: '', email: '' });
    }
  };

  return (
    <Box component="form" onSubmit={handleSubmit} sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
      <TextField label="Nome" name="nome" value={user.nome} onChange={handleChange} required />
      <TextField label="Email" name="email" value={user.email} onChange={handleChange} required />
      <Button type="submit" variant="contained">Cadastrar</Button>
    </Box>
  );
}
