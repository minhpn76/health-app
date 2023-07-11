import {Container, Box, TextField, Button} from '@mui/material';

const Login = () => {
  return (
    <Container component="main" maxWidth="xs">
      <Box
        sx={{
          boxShadow: 3,
          borderRadius: 2,
          px: 4,
          py: 6,
          marginTop: 8,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Box component="img" src="/logo.svg" alt="logo" />
        <Box component="form" sx={{mt: 1}}>
          <TextField
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
          />

          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{mt: 3, mb: 2}}
          >
            Login
          </Button>
        </Box>
      </Box>
    </Container>
  );
};

export default Login;
