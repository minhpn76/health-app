import {PropsWithChildren, ReactElement, useEffect, useState} from 'react';
import {useNavigate} from 'react-router-dom';
import {UserEntity} from 'src/@types/models/auth';
import {authApiClient} from 'src/api/clients/authApiClient';
import * as urls from 'src/constants/urls';
import {loginRedirect} from 'src/utils/common';

type AuthenticationTemplateProps = {
  isAnonymous?: boolean;
  loadingComponent: ReactElement;
};

const AuthenticationTemplate = ({
  isAnonymous,
  loadingComponent,
  children,
}: PropsWithChildren<AuthenticationTemplateProps>) => {
  return (
    <>
      {isAnonymous ? (
        {children}
      ) : (
        <AuthenticatedTemplate loadingComponent={loadingComponent}>
          {children}
        </AuthenticatedTemplate>
      )}
    </>
  );
};

const AuthenticatedTemplate = ({
  children,
  loadingComponent: Loading,
}: PropsWithChildren<
  Pick<AuthenticationTemplateProps, 'loadingComponent'>
>) => {
  const navigate = useNavigate();

  const [isLoading, setIsLoading] = useState(true);
  const [userData, setUserData] = useState<UserEntity>();

  useEffect(() => {
    authApiClient
      .checkToken()
      .then(() => {
        authApiClient
          .getCurrentUser()
          .then(data => {
            setUserData(data);
            setIsLoading(false);
          })
          .catch(error => {
            Promise.reject(error);
          });
      })
      .catch(() => {
        setIsLoading(false);
        loginRedirect(navigate);
      });
  }, [navigate]);

  useEffect(() => {
    if (userData) {
      navigate(urls.HOME);
    }
  }, [navigate, userData]);

  if (isLoading) {
    return Loading;
  }

  if (userData) {
    return <>{children}</>;
  }
  return null;
};

export default AuthenticationTemplate;
