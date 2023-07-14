import {Box, Grid, styled, Typography} from '@mui/material';

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
    backgroundColor: '#D62929',
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
        <StyledExerciseTable container spacing={2}>
          {Array(20)
            .fill(null)
            .map(i => (
              <Grid item xs={6}>
                <StyledExerciseItem>
                  <Box>
                    <StyledDot>●</StyledDot>
                    <StyledExerciseInfo>
                      <Typography variant="small">
                        家事全般（立位・軽い）
                      </Typography>
                      <Typography variant="small">26kcal</Typography>
                    </StyledExerciseInfo>
                  </Box>
                  <Typography variant="p">10 min</Typography>
                </StyledExerciseItem>
              </Grid>
            ))}
        </StyledExerciseTable>
      </Box>
    </StyledMyExercise>
  );
};

export default MyExercise;
