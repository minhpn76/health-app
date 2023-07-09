import {
  Box,
  Container,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  MenuItem,
  MenuList,
  styled,
} from '@mui/material';
import MemoIcon from 'src/icons/Memo';
import ChallengeIcon from 'src/icons/Challenge';
import InfoIcon from 'src/icons/Info';

const SCAppHeader = styled(Box)(({theme}) => ({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  backgroundColor: theme.palette.dark?.[500],
}));

const menus = [
  {icon: <MemoIcon />, label: '自分の記録'},
  {icon: <ChallengeIcon />, label: 'チャレンジ'},
  {icon: <InfoIcon />, label: 'お知らせ'},
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
            <Box component="img" src="/logo.svg" alt="logo" />
          </Box>
          <Box component="div">
            {menus.map((menu, idx) => (
              <ListItemButton key={idx}>
                <ListItemIcon sx={{color: 'inherit'}}>{menu.icon}</ListItemIcon>
                <ListItemText
                  primary={menu.label}
                  primaryTypographyProps={{fontSize: 14, fontWeight: 'medium'}}
                />
              </ListItemButton>
            ))}
          </Box>
        </Box>
      </Container>
    </SCAppHeader>
  );
};

export default AppHeader;
