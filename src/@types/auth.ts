export type ApiToken = {
  tokenType?: string;
  accessToken: string;
  refreshToken?: string;
  expiryAt?: number;
};
