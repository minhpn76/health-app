import {Container, Box} from '@mui/material';
import Recommend from './components/Recommend';
import Posts from './components/Posts';

const ColumnPage = () => {
  return (
    <Container maxWidth="lg" sx={{py: 6}}>
      <Recommend />
      <Box my={5}>
        <Posts />
      </Box>
    </Container>
  );
};

export default ColumnPage;
