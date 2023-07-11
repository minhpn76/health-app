import {Box, Grid, styled} from '@mui/material';
import ButtonLoadMore from 'src/components/button-load-more/ButtonLoadMore';
import Picture from 'src/components/picture/Picture';

const MealHistory = () => {
  return (
    <>
      <Grid container spacing={1}>
        {Array(8)
          .fill(null)
          .map(i => (
            <Grid item xs={3}>
              <Picture link="/images/d02.jpg" title="05.21.Dinner" />
            </Grid>
          ))}
      </Grid>
      <Box display="flex" alignItems="center" justifyContent="center" mt={4}>
        <ButtonLoadMore>記録をもっと見る</ButtonLoadMore>
      </Box>
    </>
  );
};

export default MealHistory;
