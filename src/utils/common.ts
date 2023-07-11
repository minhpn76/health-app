import {NavigateFunction} from 'react-router-dom';
import {LOCAL_STORAGE_KEY} from 'src/constants/common';
import * as urls from 'src/constants/urls';

export const loginRedirect = (navigate?: NavigateFunction) => {
  localStorage.removeItem(LOCAL_STORAGE_KEY.TOKEN_PAYLOAD);

  if (navigate) {
    navigate(urls.LOGIN);
  } else {
    window.location.href = urls.LOGIN;
  }
};

export const hasToken = () => {
  return !!localStorage.getItem(LOCAL_STORAGE_KEY.TOKEN_PAYLOAD);
};
