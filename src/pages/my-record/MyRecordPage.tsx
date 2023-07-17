import {Container, Box} from '@mui/material';
import MyDiary from './components/MyDiary';
import Entries from './components/Entries';
import MyExercise from './components/MyExercise';
import BodyRecords from './components/BodyRecords';
import {ElementType} from 'src/@types/view-models/bodyRecord';

const MyRecordPage = () => {
  return (
    <Container maxWidth="lg" sx={{py: 6}}>
      <Entries />
      <Box my={5} id={ElementType.BODY_RECORD}>
        <BodyRecords />
      </Box>
      <Box my={5} id={ElementType.MY_EXERCISE}>
        <MyExercise />
      </Box>
      <Box my={5} id={ElementType.MY_DIARY}>
        <MyDiary />
      </Box>
    </Container>
  );
};

export default MyRecordPage;
