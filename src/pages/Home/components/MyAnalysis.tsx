import {
  Grid,
  Box,
  useTheme,
  styled,
  CircularProgress,
  Typography,
  typographyClasses,
} from '@mui/material';
import {DataLoading, NoResultsFound, WrapperBox} from 'src/components';
import {useAnalysisQuery} from 'src/hooks/analysis/useAnalysisQueries';
import {MM_SLASH_DD, formatDate} from 'src/utils/date';
import BodyChart from 'src/charts/BodyChart';

const StyledWrapperImage = styled(Box)(({theme}) => ({
  background: `url("/images/d01.jpg"), linear-gradient(255deg, ${theme.palette.primary[300]} 0%,  ${theme.palette.primary.main} 100%)`,
  maxHeight: 298,
  minHeight: 298,
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
  const theme = useTheme();

  const {data: myAnalysis, isLoading: isLoadingAnalysis} = useAnalysisQuery({
    createdOn: '2022-05-21T00:00:00.000Z',
  });

  return (
    <Grid container>
      <Grid item xs={12} sm={5}>
        <StyledWrapperImage>
          <DataLoading isLoading={isLoadingAnalysis}>
            {myAnalysis ? (
              <StyledWrapperCircularProgress>
                <CircularProgress
                  variant="determinate"
                  color="light"
                  value={myAnalysis.value}
                  size={200}
                  thickness={1}
                />
                <StyledWrapperTypo>
                  <StyledTypo>
                    <Typography variant="p" mr={0.5}>
                      {formatDate('2022-05-21T00:00:00.000Z', MM_SLASH_DD)}
                    </Typography>
                    <Typography variant="h4">{myAnalysis.value}%</Typography>
                  </StyledTypo>
                </StyledWrapperTypo>
              </StyledWrapperCircularProgress>
            ) : (
              <NoResultsFound />
            )}
          </DataLoading>
        </StyledWrapperImage>
      </Grid>
      <Grid item xs={12} sm={7}>
        <WrapperBox
          backgroundColor={theme.palette.dark?.[600]}
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <BodyChart />
        </WrapperBox>
      </Grid>
    </Grid>
  );
};

export default MyAnalysis;
