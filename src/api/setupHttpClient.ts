import axios, {
  AxiosError,
  AxiosResponse,
  InternalAxiosRequestConfig,
} from 'axios';
import queryString from 'query-string';
import {authApiClient} from './clients/authApiClient';
import {API_PATH} from '../constants/common';
import {loginRedirect} from 'src/utils/common';

const setupHttpClientInterceptors = () => {
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
  axios.defaults.baseURL = API_PATH;
  const onRequest = async (config: InternalAxiosRequestConfig) => {
    const abortController = new AbortController();
    const token = await authApiClient.getToken();
    if (!token) {
      const abortConfig = {
        ...config,
        signal: abortController.signal,
      };
      abortController.abort();
      loginRedirect();
      return abortConfig;
    }

    config.headers.Authorization = `Bearer ${token?.accessToken}`;

    config.paramsSerializer = {
      serialize: p => queryString.stringify(p, {arrayFormat: 'index'}),
    };

    return config;
  };

  const onRequestError = (error: AxiosError) => {
    return Promise.resolve(error);
  };

  const onResponse = (response: AxiosResponse) => {
    return response;
  };

  const onResponseError = (error: AxiosError) => {
    return Promise.reject(error);
  };

  axios.interceptors.request.use(onRequest, onRequestError);
  axios.interceptors.response.use(onResponse, onResponseError);
};

export default setupHttpClientInterceptors;
