import {
  Box,
  Container,
  IconButton,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  styled,
} from '@mui/material';
import {Link} from 'react-router-dom';

import MemoIcon from 'src/icons/Memo';
import ChallengeIcon from 'src/icons/Challenge';
import InfoIcon from 'src/icons/Info';
import MenuIcon from 'src/icons/Menu';

import * as urls from 'src/constants/urls';

const SCAppHeader = styled(Box)(({theme}) => ({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  backgroundColor: theme.palette.dark?.[500],
}));

const SCMenu = styled(Box)(({theme}) => ({
  display: 'flex',
  alignItems: 'center',
  '& span': {
    color: theme.palette.light?.main,
  },
  '& .MuiSvgIcon-root': {
    color: theme.palette.primary?.main,
  },
}));

const menus = [
  {icon: <MemoIcon viewBox="0 0 32 32" />, label: '自分の記録', link: '/test'},
  {icon: <ChallengeIcon viewBox="0 0 32 32" />, label: 'チャレンジ', link: '/'},
  {icon: <InfoIcon viewBox="0 0 32 32" />, label: 'お知らせ', link: '/'},
];

const AppHeader = () => {
  return (
    <SCAppHeader>
      <Container maxWidth="lg">
        <Box
          component="div"
          alignItems="center"
          display="flex"
          justifyContent="space-between"
        >
          <Box component="div">
            <Link to={urls.HOME}>
              <Box component="img" src="/logo.svg" alt="logo" />
            </Link>
          </Box>
          <SCMenu>
            {menus.map((menu, idx) => (
              <ListItemButton key={idx}>
                <ListItemIcon>{menu.icon}</ListItemIcon>
                <ListItemText
                  primary={menu.label}
                  primaryTypographyProps={{
                    fontSize: 14,
                    fontWeight: 'medium',
                  }}
                />
              </ListItemButton>
            ))}
            <Box component="div">
              <IconButton>
                <MenuIcon viewBox="0 0 32 32" />
              </IconButton>
            </Box>
          </SCMenu>
        </Box>
      </Container>
    </SCAppHeader>
  );
};

export default AppHeader;
