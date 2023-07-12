import {Box, Grid, Typography, styled} from '@mui/material';
import {Fragment} from 'react';
import {DataLoading, NoResultsFound} from 'src/components';
import ButtonLoadMore from 'src/components/button-load-more/ButtonLoadMore';
import Picture from 'src/components/picture/Picture';
import {usePostsQuery} from 'src/hooks/posts/usePostQueries';
import {formatDate, formatTime} from 'src/utils/date';

let pageNumber = 1;

const StyledWrapperPost = styled(Box)(({theme}) => ({
  marginBottom: theme.spacing(1),
}));

const StyledTypography = styled(Typography)({
  overflow: 'hidden',
  textOverflow: 'ellipsis',
  display: '-webkit-box',
  WebkitLineClamp: 2,
  WebkitBoxOrient: 'vertical',
});

const StyledTags = styled(Typography)(({theme}) => ({
  display: 'flex',
  gap: theme.spacing(1),
  '& p': {
    color: theme.palette.primary[400],
  },
}));

const Posts = () => {
  const {
    data: posts,
    isLoading,
    isFetchingNextPage,
    fetchNextPage,
    hasNextPage,
  } = usePostsQuery();

  const handleLoadMore = async () => {
    pageNumber += 1;
    await fetchNextPage({pageParam: pageNumber});
  };

  return (
    <DataLoading isLoading={isLoading || isFetchingNextPage}>
      <Grid container spacing={2}>
        {posts && posts.pages.length > 0 ? (
          <>
            {posts.pages.map((group, idx) => (
              <Fragment key={idx}>
                {group.data.map(p => {
                  let dateTimeText = '';
                  if (p.createdOn) {
                    dateTimeText += formatDate(
                      new Date(p.createdOn).toLocaleString()
                    );
                    dateTimeText += ' ';
                    dateTimeText += formatTime(
                      new Date(p.createdOn).toLocaleString()
                    );
                  }
                  return (
                    <Grid item xs={3} key={p.id}>
                      <StyledWrapperPost>
                        <Picture link={p.image} title={dateTimeText} />
                        <StyledTypography mt={1} variant="small">
                          {p.title}
                        </StyledTypography>
                        {p.tags && p.tags.length > 0 && (
                          <StyledTags mt={1}>
                            {p.tags.map((t, idxTag) => (
                              <Typography
                                color="primary"
                                variant="tiny"
                                key={idxTag}
                              >
                                {`#${t}`}
                              </Typography>
                            ))}
                          </StyledTags>
                        )}
                      </StyledWrapperPost>
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
  );
};

export default Posts;
