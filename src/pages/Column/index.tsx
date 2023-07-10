import {Box} from '@mui/material';
import Recommend from './components/Recommend';
import Posts from './components/Posts';
import ButtonLoadMore from 'src/components/ButtonLoadMore';

const Column = () => {
  return (
    <>
      <Recommend />
      <Box margin={'50px 0'}>
        <Posts />
        <Box display="flex" alignItems="center" justifyContent="center" mt={4}>
          <ButtonLoadMore>コラムをもっと見る</ButtonLoadMore>
        </Box>
      </Box>
    </>
  );
};

export default Column;
