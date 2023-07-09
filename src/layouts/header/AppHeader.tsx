import {Box, Container, styled} from '@mui/material';

const SCAppHeader = styled(Box)(({theme}) => ({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: `${theme.spacing(2)}px 0`,
  backgroundColor: theme.palette.dark?.[500],
}));

const AppHeader = () => {
  return (
    <SCAppHeader>
      <Box component="div" alignItems="center" display="flex">
        <Box component="div">Logo</Box>
        <Box component="div">Menu</Box>
      </Box>
    </SCAppHeader>
  );
};

export default AppHeader;
