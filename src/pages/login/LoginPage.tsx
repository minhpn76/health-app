import {Container, Box} from '@mui/material';
import LoadingButton from '@mui/lab/LoadingButton';
import {useNavigate} from 'react-router-dom';
import {useForm} from 'react-hook-form';
import {yupResolver} from '@hookform/resolvers/yup';
import * as yup from 'yup';

import {LoginValues} from 'src/@types/view-model/auth';
import FormTextField from 'src/components/form-control/FormTextField';
import {useLogin} from 'src/hooks/auth/useAuthMutation';
import ErrorSlate from 'src/components/error-slate/ErrorSlate';

import * as urls from 'src/constants/urls';

const loginFormSchema = yup.object({
  username: yup.string().required('Username is required'),
  password: yup.string().required('Password is required'),
});

const LoginPage = () => {
  const navigate = useNavigate();
  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm<LoginValues>({
    defaultValues: {
      username: '',
      password: '',
    },
    resolver: yupResolver(loginFormSchema),
  });

  const {mutateAsync: login, error: loginError, isLoading} = useLogin();

  const onSubmit = async (data: LoginValues) => {
    await login(data).then(() => {
      navigate(urls.HOME);
    });
  };

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
        <Box component="img" src="/logo.svg" alt="logo" mb={2} />
        <form onSubmit={handleSubmit(onSubmit)}>
          <FormTextField
            label="Username"
            name="username"
            control={control}
            required
            fullWidth
            error={Boolean(errors?.username)}
            helperText={errors?.username?.message}
          />
          <FormTextField
            label="Password"
            name="password"
            control={control}
            required
            fullWidth
            sx={{mt: 2}}
            type="password"
            error={Boolean(errors?.password)}
            helperText={errors?.password?.message}
          />
          <ErrorSlate error={loginError} />
          <LoadingButton
            type="submit"
            fullWidth
            variant="contained"
            sx={{mt: 3, mb: 2}}
            loading={isLoading}
            disabled={isLoading}
          >
            Login
          </LoadingButton>
        </form>
      </Box>
    </Container>
  );
};

export default LoginPage;
