import {
  Box,
  Container,
  Hidden,
  IconButton,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  styled,
  svgIconClasses,
} from '@mui/material';
import {Link, useLocation} from 'react-router-dom';

import MemoIcon from 'src/icons/Memo';
import ChallengeIcon from 'src/icons/Challenge';
import InfoIcon from 'src/icons/Info';
import MenuIcon from 'src/icons/Menu';

import * as urls from 'src/constants/urls';

const StyledAppHeader = styled(Box)(({theme}) => ({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  backgroundColor: theme.palette.dark?.main,
  position: 'sticky',
  top: 0,
  zIndex: 2,
}));

const StyledMenu = styled(Box)(({theme}) => ({
  display: 'flex',
  alignItems: 'center',
  [`& .${svgIconClasses.root}`]: {
    color: theme.palette.primary?.main,
  },
}));

const StyledTextLink = styled(ListItemText)<{isActive?: boolean}>(
  ({theme, isActive}) => ({
    '& span': {
      color: `${
        isActive ? theme.palette.primary.main : theme.palette.light?.main
      }`,
    },
  })
);

const menus = [
  {
    icon: <MemoIcon viewBox="0 0 32 32" />,
    label: '自分の記録',
    link: urls.MY_RECORD,
  },
  {
    icon: <ChallengeIcon viewBox="0 0 32 32" />,
    label: 'チャレンジ',
    link: '#',
  },
  {icon: <InfoIcon viewBox="0 0 32 32" />, label: 'お知らせ', link: '#'},
];

const AppHeader = () => {
  const location = useLocation();
  return (
    <StyledAppHeader>
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
          <StyledMenu>
            <Hidden mdDown>
              {menus.map((menu, idx) => (
                <ListItemButton key={idx} component={Link} to={menu.link}>
                  <ListItemIcon>{menu.icon}</ListItemIcon>
                  <StyledTextLink
                    isActive={menu.link === location.pathname}
                    primary={menu.label}
                  />
                </ListItemButton>
              ))}
            </Hidden>
            <Box component="div">
              <IconButton>
                <MenuIcon viewBox="0 0 32 32" />
              </IconButton>
            </Box>
          </StyledMenu>
        </Box>
      </Container>
    </StyledAppHeader>
  );
};

export default AppHeader;
