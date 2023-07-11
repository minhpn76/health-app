import {Box} from '@mui/material';
import Dairy from './components/Dairy';
import Entries from './components/Entries';

const MyRecordPage = () => {
  return (
    <>
      <Entries />
      <Box m={'50px 0'}>
        <Dairy />
      </Box>
    </>
  );
};

export default MyRecordPage;
