import {Container, Box} from '@mui/material';
import MyDiary from './components/MyDiary';
import Entries from './components/Entries';
import MyExercise from './components/MyExercise';
import BodyRecords from './components/BodyRecords';

const MyRecordPage = () => {
  return (
    <Container maxWidth="lg" sx={{py: 6}}>
      <Entries />
      <Box my={5}>
        <BodyRecords />
      </Box>
      <Box my={5}>
        <MyExercise />
      </Box>
      <Box my={5}>
        <MyDiary />
      </Box>
    </Container>
  );
};

export default MyRecordPage;
