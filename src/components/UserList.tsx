import { Box, Card, CardContent, Typography } from '@mui/material';
import type { User } from '../../types/User';

interface Props {
  users: User[];
}

export default function UserList({ users }: Props) {
  return (
    <Box sx={{ mt: 3 }}>
      {users.map((user, index) => (
        <Card key={index} sx={{ mb: 2 }}>
          <CardContent>
            <Typography variant="h6">{user.nome}</Typography>
            <Typography color="text.secondary">{user.email}</Typography>
          </CardContent>
        </Card>
      ))}
    </Box>
  );
}
