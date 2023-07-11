import {rest} from 'msw';
import qs from 'qs';
import {API_PATH, LOCAL_STORAGE_KEY} from '../../../constants/common';
import {users} from './data/userData';

const generateToken = () => {
  const accessToken = btoa(new Date().toISOString());
  const refreshToken = btoa(String(new Date().getTime()));
  const expiryAt = new Date().getTime() + 30 * 60 * 1000; //in milliseconds, valid for 30min
  const token = {
    tokenType: 'Bearer',
    accessToken,
    refreshToken,
    expiryAt,
  };

  localStorage.setItem(LOCAL_STORAGE_KEY.KEY_TOKEN, JSON.stringify(token));
  return token;
};

export const validateToken = (req: any) => {
  let accessToken = req.headers.get('Authorization');
  if (accessToken) {
    accessToken = accessToken.substring(7);
    const tokenStr = localStorage.getItem(LOCAL_STORAGE_KEY.KEY_TOKEN);
    if (tokenStr) {
      const token = JSON.parse(tokenStr);
      const {accessToken: tokenAuth} = token;
      if (tokenAuth !== accessToken) {
        console.error(
          'Invalid authorisation token',
          'Client->',
          accessToken,
          'Server->',
          tokenAuth
        );
      }
      return tokenAuth === accessToken;
    }
  }
  return false;
};

export const authHandler = [
  rest.post(`${API_PATH}/auth/login`, (req, res, ctx) => {
    const {username, password} = qs.parse(req?.body as any);
    const users = JSON.parse(
      localStorage.getItem(LOCAL_STORAGE_KEY.KEY_USERS) || '[]'
    );
    const user = users.find((item: any) => item.loginId === username);

    if (user?.password === password) {
      const token = generateToken();
      return res(ctx.status(200), ctx.json(token), ctx.delay(3000));
    } else {
      return res(
        ctx.status(400),
        ctx.json({
          message: 'Username or password is wrong',
        })
      );
    }
  }),
  rest.get(`${API_PATH}/auth/refreshtoken`, (req, res, ctx) => {
    let refreshToken = req.headers.get('Authorization');

    if (refreshToken) {
      refreshToken = refreshToken.substring(7);

      const tokenStr = localStorage.getItem(LOCAL_STORAGE_KEY.KEY_TOKEN);
      if (tokenStr) {
        const token = JSON.parse(tokenStr);
        if (token.refreshToken && token.refreshToken === refreshToken) {
          const token = generateToken();
          return res(ctx.status(200), ctx.json(token));
        }
      }

      const token = generateToken();
      return res(ctx.status(200), ctx.json(token));
    }
    return res(
      ctx.status(401),
      ctx.json({
        message: 'Unauthorized request',
      })
    );
  }),
];

if (!localStorage.getItem(LOCAL_STORAGE_KEY.KEY_USERS)) {
  localStorage.setItem(LOCAL_STORAGE_KEY.KEY_USERS, JSON.stringify(users));
}
