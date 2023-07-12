import {Box, Grid} from '@mui/material';
import {InfiniteData} from '@tanstack/react-query';
import {Fragment} from 'react';
import {MealHistoryEntity} from 'src/@types/models/meal';
import {PaginableData} from 'src/@types/models/paginableData';
import {DataLoading, NoResultsFound} from 'src/components';
import ButtonLoadMore from 'src/components/button-load-more/ButtonLoadMore';
import Picture from 'src/components/picture/Picture';
import {formatDate, MM_DD} from 'src/utils/date';

type MealHistoryProps = {
  isLoading: boolean;
  data?: InfiniteData<PaginableData<MealHistoryEntity>>;
  hasNextPage?: boolean;
  onLoadMore: () => void;
};

const MealHistory = ({
  isLoading,
  data,
  hasNextPage,
  onLoadMore,
}: MealHistoryProps) => {
  return (
    <DataLoading isLoading={isLoading}>
      <Grid container spacing={1}>
        {data && data.pages.length > 0 ? (
          <>
            {data.pages.map((group, idx) => (
              <Fragment key={idx}>
                {group.data.map(meal => {
                  let titleText = '';
                  if (meal.datedOn) {
                    titleText += formatDate(
                      new Date(meal.datedOn).toLocaleString(),
                      MM_DD
                    );
                  }
                  if (meal.type) {
                    titleText += `.${meal.type}`;
                  }
                  return (
                    <Grid item xs={3} key={meal.id}>
                      <Picture
                        link={meal.image}
                        title={titleText}
                        height={195}
                      />
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

export default MealHistory;
