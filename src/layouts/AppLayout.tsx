import {Box} from '@mui/material';
import {Outlet} from 'react-router-dom';
import AppHeader from './AppHeader';
import AppFooter from './AppFooter';

const AppLayout = () => {
  return (
    <Box component="div" height="100vh" display="flex">
      <AppHeader />
      <Box component="div" flexGrow={1}>
        <Outlet />
      </Box>
      <AppFooter />
    </Box>
  );
};

export default AppLayout;
