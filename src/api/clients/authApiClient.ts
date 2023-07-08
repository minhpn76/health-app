import axios from 'axios';
import {ApiToken} from 'src/@types/auth';
import {API_PATH, LOCAL_STORAGE_KEY} from 'src/constants/common';

const authApiClient = () => {
  const login = (username: string, password: string) => {
    const form = new URLSearchParams();
    form.append('username', username);
    form.append('password', password);
    return axios.post<ApiToken>(`${API_PATH}/login`, form).then(resp => {
      localStorage.setItem(
        LOCAL_STORAGE_KEY.TOKEN_PAYLOAD,
        JSON.stringify(resp.data)
      );
      // return Promise.resolve(transformApiToken(resp.data));
    });
  };
  return {
    login,
  };
};

export default authApiClient;
