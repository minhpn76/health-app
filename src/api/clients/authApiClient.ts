/* eslint-disable @typescript-eslint/restrict-template-expressions */
import axios from 'axios';
import {ApiToken} from 'src/@types/model/auth';
import {API_PATH, LOCAL_STORAGE_KEY} from 'src/constants/common';

const authApiClient = () => {
  const login = (username: string, password: string) => {
    const form = new URLSearchParams();
    form.append('username', username);
    form.append('password', password);
    return axios.post<ApiToken>(`${API_PATH}/auth/login`, form).then(resp => {
      localStorage.setItem(
        LOCAL_STORAGE_KEY.TOKEN_PAYLOAD,
        JSON.stringify(resp.data)
      );
      return Promise.resolve(resp.data);
    });
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

  const checkToken = async () => {
    const token = await acquireToken();
    if (!token) throw new Error('Not authenticated');
  };

  return {
    login,
    checkToken,
  };
};

export default authApiClient;
