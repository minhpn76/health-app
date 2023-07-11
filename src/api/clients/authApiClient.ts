import axios from 'axios';
import {ApiToken, UserEntity} from 'src/@types/models/auth';
import {API_PATH, LOCAL_STORAGE_KEY} from 'src/constants/common';

export namespace authApiClient {
  export const login = async (username: string, password: string) => {
    const form = new URLSearchParams();
    form.append('username', username);
    form.append('password', password);
    const response = await axios.post<ApiToken>(`${API_PATH}/auth/login`, form);
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
      console.log('token', token);
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
        return refreshToken(token.refreshToken);
      } else {
        return undefined;
      }
    } catch {
      return undefined;
    }
  };

  const refreshToken = async (refreshToken: string) => {
    try {
      const response = await axios.get<ApiToken>(
        `${API_PATH}/auth/refreshtoken`,
        {
          headers: {Authorization: `Bearer ${refreshToken}`},
        }
      );
      const token = response.data;
      localStorage.setItem(
        LOCAL_STORAGE_KEY.TOKEN_PAYLOAD,
        JSON.stringify(token)
      );
      return token;
    } catch {
      //  refresh token not valid or expired
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
