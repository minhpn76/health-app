import {PropsWithChildren} from 'react';
import {Box, Container, styled} from '@mui/material';
import {Outlet} from 'react-router-dom';

import AppHeader from '../header/AppHeader';
import AppFooter from '../footer/AppFooter';
import AuthenticationTemplate from './AuthenticationTemplate';

type AppLayoutProps = {
  isAnonymous?: boolean;
};
const SCAppContainer = styled(Container)({
  padding: '50px 0',
});

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
          <SCAppContainer maxWidth="lg">
            <Outlet />
          </SCAppContainer>
        </Box>
        <AppFooter />
      </Box>
    </AuthenticationTemplate>
  );
};

export default AppLayout;
