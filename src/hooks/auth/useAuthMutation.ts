import {useMutation} from '@tanstack/react-query';
import {LoginPayload} from 'src/@types/models/auth';
import {authApiClient} from 'src/api/clients/authApiClient';

export const useLogin = () => {
  return useMutation(({username, password}: LoginPayload) =>
    authApiClient.login(username, password)
  );
};
