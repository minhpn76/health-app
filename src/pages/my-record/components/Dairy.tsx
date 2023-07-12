import {Box, Grid, Typography, styled} from '@mui/material';
import {Fragment} from 'react';
import {DataLoading, NoResultsFound} from 'src/components';
import ButtonLoadMore from 'src/components/button-load-more/ButtonLoadMore';
import {useDiaryQuery} from 'src/hooks/diary/useDiaryQueries';
import {HH_MM, YYYY_MM_DD, formatDate, formatTime} from 'src/utils/date';

let pageNumber = 1;

const StyledDairy = styled(Box)(({theme}) => ({
  border: '1px solid',
  padding: theme.spacing(2),
  borderColor: theme.palette.dark?.[500],
}));

const StyledTypography = styled(Typography)({
  overflow: 'hidden',
  textOverflow: 'ellipsis',
  display: '-webkit-box',
  WebkitLineClamp: 4,
  WebkitBoxOrient: 'vertical',
});

const Dairy = () => {
  const {
    data: diaries,
    isLoading,
    isFetchingNextPage,
    fetchNextPage,
    hasNextPage,
  } = useDiaryQuery();

  const handleLoadMore = async () => {
    pageNumber += 1;
    await fetchNextPage({pageParam: pageNumber});
  };
  return (
    <>
      <Typography variant="h5" mb={1}>
        MY DIARY
      </Typography>
      <DataLoading isLoading={isLoading || isFetchingNextPage}>
        <Grid container spacing={2}>
          {diaries && diaries.pages.length > 0 ? (
            <>
              {diaries.pages.map((group, idx) => (
                <Fragment key={idx}>
                  {group.data.map(d => {
                    let dateText = '';
                    let timeText = '';
                    if (d.createdOn) {
                      dateText = formatDate(
                        new Date(d.createdOn).toLocaleString(),
                        YYYY_MM_DD
                      );

                      timeText = formatTime(
                        new Date(d.createdOn).toLocaleString(),
                        HH_MM
                      );
                    }
                    return (
                      <Grid item xs={3}>
                        <StyledDairy>
                          <Typography variant="p">{dateText}</Typography>
                          <Typography variant="p">{timeText}</Typography>
                          <Typography variant="tiny" mt={2}>
                            {d.title}
                          </Typography>
                          <StyledTypography variant="tiny" mt={1}>
                            {d.description}
                          </StyledTypography>
                        </StyledDairy>
                      </Grid>
                    );
                  })}
                </Fragment>
              ))}
              {hasNextPage && (
                <Grid item xs={12}>
                  <Box
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                    mt={4}
                  >
                    <ButtonLoadMore onClick={handleLoadMore} />
                  </Box>
                </Grid>
              )}
            </>
          ) : (
            <Grid item xs={12}>
              <NoResultsFound />
            </Grid>
          )}
        </Grid>
      </DataLoading>
    </>
  );
};

export default Dairy;
