import {PropsWithChildren} from 'react';
import {Box, Hidden, IconButton, styled, svgIconClasses} from '@mui/material';
import {Outlet} from 'react-router-dom';

import AppHeader from '../header/AppHeader';
import AppFooter from '../footer/AppFooter';
import AuthenticationTemplate from './AuthenticationTemplate';

import {ScrollUp as ScrollUpIcon} from 'src/icons';
import useScrollToTop from 'src/hooks/common/useScrollToTop';

type AppLayoutProps = {
  isAnonymous?: boolean;
};

const StyledScrollToTop = styled(IconButton)(({theme}) => ({
  position: 'fixed',
  bottom: '200px',
  right: '50px',
  [`& .${svgIconClasses.root}`]: {
    fontSize: theme.spacing(7),
  },
}));

const AppLayout = ({
  isAnonymous = false,
}: PropsWithChildren<AppLayoutProps>) => {
  const {onScrollTopTop, showScroll: showScrollToTop} = useScrollToTop({
    clientY: 200,
  });

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
        <Hidden mdDown>
          {showScrollToTop && (
            <StyledScrollToTop onClick={onScrollTopTop}>
              <ScrollUpIcon viewBox="0 0 48 48" />
            </StyledScrollToTop>
          )}
        </Hidden>
        <AppFooter />
      </Box>
    </AuthenticationTemplate>
  );
};

export default AppLayout;
