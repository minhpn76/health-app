import {Box} from '@mui/material';
import Recommend from './components/Recommend';
import Posts from './components/Posts';

const Column = () => {
  return (
    <>
      <Recommend />
      <Box margin={'50px 0'}>
        <Posts />
      </Box>
    </>
  );
};

export default Column;
