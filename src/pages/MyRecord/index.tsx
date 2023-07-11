import {Box} from '@mui/material';
import Dairy from './components/Dairy';
import Entries from './components/Entries';

const MyRecord = () => {
  return (
    <>
      <Entries />
      <Box m={'50px 0'}>
        <Dairy />
      </Box>
    </>
  );
};

export default MyRecord;
