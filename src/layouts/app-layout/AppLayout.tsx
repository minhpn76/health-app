import {PropsWithChildren} from 'react';
import {Box} from '@mui/material';
import {Outlet} from 'react-router-dom';

import AppHeader from '../header/AppHeader';
import AppFooter from '../footer/AppFooter';
import AuthenticationTemplate from './AuthenticationTemplate';

type AppLayoutProps = {
  isAnonymous?: boolean;
};

const AppLayout = ({
  isAnonymous = false,
}: PropsWithChildren<AppLayoutProps>) => {
  return (
    <AuthenticationTemplate
      loadingComponent={<>Loading...</>}
      isAnonymous={isAnonymous}
    >
      <Box component="div" height="100vh">
        <AppHeader />
        <Box component="div" flexGrow={1}>
          <Outlet />
        </Box>
        <AppFooter />
      </Box>
    </AuthenticationTemplate>
  );
};

export default AppLayout;
