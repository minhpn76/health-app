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
    label: '自分の記録',
    link: urls.MY_RECORD,
  },
  {
    label: '体重グラフ',
    link: '#',
  },
  {
    label: '目標',
    link: '#',
  },
  {
    label: '選択中のコース',
    link: '#',
  },
  {
    label: 'コラム一覧',
    link: urls.COLUMN,
  },
  {
    label: '設定',
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
