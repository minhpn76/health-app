import {Fragment} from 'react';
import {
  Divider,
  List,
  ListItem,
  ListItemText,
  Typography,
  styled,
} from '@mui/material';
import * as urls from 'src/constants/urls';
import {useLocation} from 'react-router-dom';

const StyledList = styled(List)(({theme}) => ({
  backgroundColor: theme.palette.gray?.main,
}));

const menus = [
  {
    label: 'My records',
    link: urls.MY_RECORD,
  },
  {
    label: 'My graph',
    link: '#',
  },
  {
    label: 'Target',
    link: '#',
  },
  {
    label: 'Course',
    link: '#',
  },
  {
    label: 'Column list',
    link: urls.COLUMN,
  },
  {
    label: 'Settings',
    link: '#',
  },
];

const MenuMobile = () => {
  const location = useLocation();
  return (
    <StyledList sx={{width: '100%', minWidth: 200}}>
      {menus.map((menu, idx) => (
        <Fragment key={idx}>
          <ListItem alignItems="flex-start" component="a" href={menu.link}>
            <ListItemText>
              <Typography
                variant="p"
                color={
                  menu.link === location.pathname
                    ? 'primary.main'
                    : 'light.main'
                }
              >
                {menu.label}
              </Typography>
            </ListItemText>
          </ListItem>
          {menus.length !== idx + 1 && <Divider component="li" />}
        </Fragment>
      ))}
    </StyledList>
  );
};

export default MenuMobile;
