import {Box, Grid, Typography, styled} from '@mui/material';
import {InfiniteData} from '@tanstack/react-query';
import {Fragment} from 'react';
import {PaginableData} from 'src/@types/models/paginableData';
import {PostEntity} from 'src/@types/models/posts';
import {DataLoading, NoResultsFound} from 'src/components';
import ButtonLoadMore from 'src/components/button-load-more/ButtonLoadMore';
import Picture from 'src/components/picture/Picture';
import {formatDate, formatTime} from 'src/utils/date';

type PostsProps = {
  isLoading: boolean;
  data?: InfiniteData<PaginableData<PostEntity>>;
  hasNextPage?: boolean;
  onLoadMore: () => void;
};

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

const StyledTags = styled(Box)(({theme}) => ({
  display: 'flex',
  gap: theme.spacing(1),
  '& p': {
    color: theme.palette.primary[400],
  },
}));

const Posts = ({isLoading, data, hasNextPage, onLoadMore}: PostsProps) => {
  return (
    <DataLoading isLoading={isLoading}>
      <Grid container spacing={2}>
        {data && data.pages.length > 0 ? (
          <>
            {data.pages.map((group, idx) => (
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
                    <Grid
                      item
                      xs={12}
                      sm={6}
                      md={3}
                      key={p.id}
                      data-testid="post-item"
                    >
                      <StyledWrapperPost>
                        <Picture
                          link={p.image}
                          title={dateTimeText}
                          height={185}
                        />
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
                  <ButtonLoadMore onClick={onLoadMore} />
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
