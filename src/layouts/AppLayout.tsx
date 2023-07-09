import {Box} from '@mui/material';
import {Outlet} from 'react-router-dom';
import AppHeader from './header/AppHeader';
import AppFooter from './footer/AppFooter';

const AppLayout = () => {
  return (
    <Box component="div" height="100vh">
      <AppHeader />
      <Box component="div" flexGrow={1}>
        <Outlet />
      </Box>
      <AppFooter />
    </Box>
  );
};

export default AppLayout;
