import {
  Grid,
  Stack,
  Box,
  useTheme,
  styled,
  CircularProgress,
  Typography,
  typographyClasses,
} from '@mui/material';
import {PeriodType} from 'src/@types/models/bodyRecord';
import {
  DataLoading,
  LineChart,
  NoResultsFound,
  WrapperBox,
} from 'src/components';
import {useBodyRecordQuery} from 'src/hooks/bodyRecord/useBodyRecordQueries';
import useElementSize from 'src/hooks/common/useElementSize';

const StyledWrapperImage = styled(Box)(({theme}) => ({
  background: `url("/images/d01.jpg"), linear-gradient(255deg, ${theme.palette.primary[300]} 0%,  ${theme.palette.primary.main} 100%)`,
  maxHeight: 448,
  minHeight: 448,
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',
  backgroundPosition: 'center',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
}));

const StyledWrapperCircularProgress = styled(Box)({
  position: 'relative',
  display: 'inline-flex',
});

const StyledWrapperTypo = styled(Box)({
  top: 0,
  left: 0,
  bottom: 0,
  right: 0,
  position: 'absolute',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
});

const StyledTypo = styled(Box)(({theme}) => ({
  display: 'flex',
  alignItems: 'baseline',
  [`& .${typographyClasses.root}`]: {
    color: theme.palette.light?.main,
  },
}));

const MyAnalysis = () => {
  const [rootRef, {width}] = useElementSize();
  const theme = useTheme();

  const {data: bodyRecords, isLoading} = useBodyRecordQuery({
    periodType: PeriodType.YEAR,
  });

  return (
    <Grid container>
      <Grid item xs={12} sm={5}>
        <StyledWrapperImage>
          <StyledWrapperCircularProgress>
            <CircularProgress
              variant="determinate"
              color="light"
              value={75}
              size={200}
              thickness={1}
            />
            <StyledWrapperTypo>
              <StyledTypo>
                <Typography variant="p" mr={0.5}>
                  05/21
                </Typography>
                <Typography variant="h4">75%</Typography>
              </StyledTypo>
            </StyledWrapperTypo>
          </StyledWrapperCircularProgress>
        </StyledWrapperImage>
      </Grid>
      <Grid item xs={12} sm={7}>
        <WrapperBox backgroundColor={theme.palette.dark?.[600]}>
          <DataLoading isLoading={isLoading}>
            {bodyRecords && bodyRecords.length > 0 ? (
              <Stack width="100%" height="100%" ref={rootRef}>
                <LineChart width={width} height={400} data={bodyRecords} />
              </Stack>
            ) : (
              <NoResultsFound colorText={theme.palette.light?.main} />
            )}
          </DataLoading>
        </WrapperBox>
      </Grid>
    </Grid>
  );
};

export default MyAnalysis;
