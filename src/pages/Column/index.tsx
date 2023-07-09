import {Box} from '@mui/material';
import Recommend from './components/Recommend';
import News from './components/News';

const Column = () => {
  return (
    <>
      <Recommend />
      <Box margin={'50px 0'}>
        <News />
      </Box>
    </>
  );
};

export default Column;
