import {Box} from '@mui/material';
import {useState} from 'react';
import {MealType} from 'src/@types/models/meal';
import {useMealHistoryQuery} from 'src/hooks/meal/useMealQuery';
import MealFilter from 'src/pages/Home/components/MealFilter';
import MealHistory from 'src/pages/Home/components/MealHistory';

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
      <Box my={3}>
        <MealFilter onChangeMealType={handleChangeMealType} />
      </Box>
      <MealHistory
        isLoading={isLoading || isFetchingNextPage}
        onLoadMore={handleLoadMore}
        hasNextPage={hasNextPage}
        data={mealHistories}
      />
    </>
  );
};

export default HomePage;
