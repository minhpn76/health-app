import {BaseEntity} from './baseEntities';

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

export interface UserEntity extends BaseEntity {
  countryCode: string;
  customer: string;
  emailId: string;
  firstName: string;
  lastName: string;
  loginId: string;
  mobileNo: string;
  salutation: string;
  timeZone: string;
}
