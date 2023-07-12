import {Box, styled, Typography} from '@mui/material';

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
    </StyledMyExercise>
  );
};

export default MyExercise;
