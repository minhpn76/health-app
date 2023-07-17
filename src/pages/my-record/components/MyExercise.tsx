import {Box, Grid, styled, Typography} from '@mui/material';
import {DataLoading, NoResultsFound} from 'src/components';
import {useExerciseQuery} from 'src/hooks/exercise/useExerciseQueries';
import {WrapperBox} from 'src/components';

const StyledExerciseTable = styled(Grid)(({theme}) => ({
  height: '260px',
  overflowY: 'scroll',
  paddingRight: theme.spacing(2),

  '&::-webkit-scrollbar': {
    width: '6px',
    backgroundColor: theme.palette.gray?.main,
  },
  '&::-webkit-scrollbar-thumb': {
    borderRadius: theme.spacing(1),
    backgroundColor: theme.palette.primary[300],
  },
}));

const StyledExerciseItem = styled(Box)(({theme}) => ({
  display: 'flex',
  alignItems: 'flex-start',
  justifyContent: 'space-between',
  paddingBottom: '3px',
  borderBottom: `${1}px solid ${theme.palette.gray?.main}`,
  '& p': {
    color: theme.palette.light?.main,
  },
  '& p:last-child': {
    color: theme.palette.primary[300],
  },
  '& > div': {
    display: 'flex',
    alignItems: 'flex-start',
  },
}));

const StyledDot = styled(Typography)(({theme}) => ({
  fontSize: '5px',
  lineHeight: '12px',
  marginRight: theme.spacing(1),
}));

const StyledExerciseInfo = styled(Box)(({theme}) => ({
  display: 'flex',
  alignItems: 'flex-start',
  flexDirection: 'column',
  '& p:last-child': {
    color: theme.palette.primary[300],
  },
}));

const MyExercise = () => {
  const {data: exercises, isLoading} = useExerciseQuery({
    createdOn: '2022-05-21T00:00:00.000Z',
  });
  return (
    <WrapperBox
      title={
        <>
          <Typography component="div" variant="small" marginRight={3}>
            MY
            <Typography variant="small">EXERCISE</Typography>
          </Typography>
          <Typography variant="h5">2021.05.21</Typography>
        </>
      }
    >
      <DataLoading isLoading={isLoading}>
        <StyledExerciseTable container spacing={2}>
          {exercises && exercises.length > 0 ? (
            <>
              {exercises.map(ex => (
                <Grid item xs={12} sm={6} key={ex.id}>
                  <StyledExerciseItem>
                    <Box>
                      <StyledDot>●</StyledDot>
                      <StyledExerciseInfo>
                        <Typography variant="small">{ex.activity}</Typography>
                        <Typography variant="small">
                          {ex.energyConsumption}
                        </Typography>
                      </StyledExerciseInfo>
                    </Box>
                    <Typography variant="p">{ex.activityTime}</Typography>
                  </StyledExerciseItem>
                </Grid>
              ))}
            </>
          ) : (
            <Grid item xs={12}>
              <NoResultsFound />
            </Grid>
          )}
        </StyledExerciseTable>
      </DataLoading>
    </WrapperBox>
  );
};

export default MyExercise;
