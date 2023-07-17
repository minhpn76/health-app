import {useState, MouseEvent} from 'react';
import {
  Box,
  Container,
  Hidden,
  IconButton,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Popover,
  buttonBaseClasses,
  paperClasses,
  styled,
  svgIconClasses,
} from '@mui/material';
import {Link, useLocation} from 'react-router-dom';

import {
  Close as CloseIcon,
  Menu as MenuIcon,
  Challenge as ChallengeIcon,
  Info as InfoIcon,
  Memo as MemoIcon,
} from 'src/icons';

import * as urls from 'src/constants/urls';
import MenuMobile from './MenuMobile';

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

const StyledTextLink = styled(ListItemText)<{active?: string}>(
  ({theme, active}) => ({
    '& span': {
      color: `${
        active === 'true'
          ? theme.palette.primary.main
          : theme.palette.light?.main
      }`,
    },
  })
);

const StyledIconButton = styled(IconButton)(({theme}) => ({
  backgroundColor: theme.palette.dark?.main,
  borderRadius: 0,
}));

const StyledPopover = styled(Popover)(({theme}) => ({
  [`& .${paperClasses.root}`]: {
    backgroundColor: 'transparent',
  },
  [`& .${buttonBaseClasses.root}`]: {
    '&:hover': {
      backgroundColor: theme.palette.dark?.main,
    },
  },
}));

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

  const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);

  const handleClick = (event: MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'menu-mobile-popover' : undefined;

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
                    active={menu.link === location.pathname ? 'true' : 'false'}
                    primary={menu.label}
                  />
                </ListItemButton>
              ))}
            </Hidden>
            <Box component="div">
              <IconButton aria-describedby={id} onClick={handleClick}>
                <MenuIcon viewBox="0 0 32 32" />
              </IconButton>
              <Hidden mdUp>
                <StyledPopover
                  id={id}
                  open={open}
                  anchorEl={anchorEl}
                  anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'center',
                  }}
                >
                  <Box
                    sx={{
                      position: 'relative',
                      top: '0',
                      left: '160px',
                    }}
                  >
                    <StyledIconButton onClick={handleClose}>
                      <CloseIcon viewBox="0 0 32 32" />
                    </StyledIconButton>
                  </Box>
                  <MenuMobile />
                </StyledPopover>
              </Hidden>
            </Box>
          </StyledMenu>
        </Box>
      </Container>
    </StyledAppHeader>
  );
};

export default AppHeader;
