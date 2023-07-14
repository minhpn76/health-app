import {Box, Grid, styled, Typography} from '@mui/material';
import {DataLoading, NoResultsFound} from 'src/components';
import {useExerciseQuery} from 'src/hooks/exercise/useExerciseQueries';

const StyledMyExercise = styled(Box)(({theme}) => ({
  backgroundColor: theme.palette.dark?.main,
  padding: `${theme.spacing(2)} ${theme.spacing(3)}`,
  color: theme.palette.light?.main,
}));

const StyledTitle = styled(Box)(({theme}) => ({
  display: 'flex',
  alignItems: 'flex-start',
  '& h5': {
    color: theme.palette.light?.main,
  },
  '& small': {
    color: theme.palette.light?.main,
  },
}));

const StyledExerciseTable = styled(Grid)(({theme}) => ({
  height: '260px',
  overflowY: 'scroll',

  '&::-webkit-scrollbar': {
    width: '6px',
    backgroundColor: '#ffff',
  },
  '&::-webkit-scrollbar-thumb': {
    borderRadius: theme.spacing(1),
    backgroundColor: theme.palette.primary[300],
  },
  '&::-webkit-scrollbar-track': {
    marginBlock: '15px',
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
    <StyledMyExercise>
      <StyledTitle>
        <Typography variant="small" marginRight={3}>
          MY
          <Typography variant="small">EXERCISE</Typography>
        </Typography>
        <Typography variant="h5">2021.05.21</Typography>
      </StyledTitle>
      <Box mt={2}>
        <DataLoading isLoading={isLoading}>
          <StyledExerciseTable container spacing={2}>
            {exercises && exercises.length > 0 ? (
              <>
                {exercises.map(ex => (
                  <Grid item xs={6} key={ex.id}>
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
      </Box>
    </StyledMyExercise>
  );
};

export default MyExercise;
