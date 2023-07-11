import {LOCAL_STORAGE_KEY} from 'src/constants/common';

export const hasToken = () => {
  return !!localStorage.getItem(LOCAL_STORAGE_KEY.TOKEN_PAYLOAD);
};
