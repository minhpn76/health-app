export interface ApiToken {
  tokenType?: string;
  accessToken: string;
  refreshToken?: string;
  expiryAt?: number;
}

export interface LoginPayload {
  username: string;
  password: string;
}
