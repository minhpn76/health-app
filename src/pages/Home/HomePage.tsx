import {Container, Box} from '@mui/material';
import {useState} from 'react';
import {MealType} from 'src/@types/models/meal';
import {useMealHistoryQuery} from 'src/hooks/meal/useMealQuery';
import MealFilter from './components/MealFilter';
import MealHistory from './components/MealHistory';
import MyAnalysis from './components/MyAnalysis';

let pageNumber = 1;

const HomePage = () => {
  const [mealType, setMealType] = useState<MealType>();

  const {
    data: mealHistories,
    isLoading,
    isFetchingNextPage,
    fetchNextPage,
    hasNextPage,
  } = useMealHistoryQuery({mealType});

  const handleLoadMore = async () => {
    pageNumber += 1;
    await fetchNextPage({pageParam: pageNumber});
  };
  const handleChangeMealType = (type: MealType) => {
    setMealType(type);
  };

  return (
    <>
      <MyAnalysis />
      <Container maxWidth="lg" sx={{py: 6}}>
        <MealFilter onChangeMealType={handleChangeMealType} />
        <Box my={5}>
          <MealHistory
            isLoading={isLoading || isFetchingNextPage}
            onLoadMore={handleLoadMore}
            hasNextPage={hasNextPage}
            data={mealHistories}
          />
        </Box>
      </Container>
    </>
  );
};

export default HomePage;
