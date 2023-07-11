export type ApiToken = {
  tokenType?: string;
  accessToken: string;
  refreshToken?: string;
  expiryAt?: number;
};

export type LoginPayload = {
  username: string;
  password: string;
};
