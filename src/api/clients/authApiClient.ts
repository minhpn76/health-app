import axios from 'axios';
import {ApiToken, UserEntity} from 'src/@types/models/auth';
import {API_PATH, LOCAL_STORAGE_KEY} from 'src/constants/common';

export namespace authApiClient {
  export const login = async (username: string, password: string) => {
    const form = new URLSearchParams();
    form.append('username', username);
    form.append('password', password);
    const response = await axios.post<ApiToken>(`${API_PATH}/auth/login`, form);
    console.log('response', response);
    localStorage.setItem(
      LOCAL_STORAGE_KEY.TOKEN_PAYLOAD,
      JSON.stringify(response.data)
    );
    return response.data;
  };
  const acquireToken = async () => {
    let token: ApiToken;
    try {
      token = JSON.parse(
        localStorage.getItem(LOCAL_STORAGE_KEY.TOKEN_PAYLOAD) || '{}'
      );
      if (token.expiryAt && token.accessToken && token.refreshToken) {
        // minus 20 seconds for network latency
        if (new Date(token.expiryAt - 20 * 1000) > new Date()) {
          return token;
        }
        console.log(
          'token expired, requesting a new token',
          'expired at',
          new Date(token.expiryAt)
        );
        return undefined;
      }
      return undefined;
    } catch {
      return undefined;
    }
  };

  export const checkToken = async () => {
    const token = await acquireToken();
    if (!token) throw new Error('Not authenticated');
  };

  export const getCurrentUser = () => {
    return axios
      .get<UserEntity>(`${API_PATH}/user/me`)
      .then(response => response.data);
  };

  export const getToken = acquireToken;
}
