import {Box} from '@mui/material';
import MealFilter from './components/MealFilter';
import MealHistory from './components/MealHistory';

const HomePage = () => {
  return (
    <>
      <Box my={3}>
        <MealFilter />
      </Box>
      <MealHistory />
    </>
  );
};

export default HomePage;
