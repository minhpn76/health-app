import {useMutation} from '@tanstack/react-query';
import {LoginPayload} from 'src/@types/models/auth';
import authApiClient from 'src/api/clients/authApiClient';

export const useLogin = () => {
  const apiClient = authApiClient();

  return useMutation(({username, password}: LoginPayload) =>
    apiClient.login(username, password)
  );
};
