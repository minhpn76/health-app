import {Box, Grid, Typography, styled} from '@mui/material';
import ButtonLoadMore from 'src/components/button-load-more/ButtonLoadMore';

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
  return (
    <>
      <Typography variant="h5" mb={1}>
        MY DIARY
      </Typography>
      <Grid container spacing={2}>
        {Array(8)
          .fill(null)
          .map(i => (
            <Grid item xs={3}>
              <StyledDairy>
                <Typography variant="p">2021.05.21</Typography>
                <Typography variant="p">23:25</Typography>
                <Typography variant="tiny" mt={2}>
                  私の日記の記録が一部表示されます。
                </Typography>
                <StyledTypography variant="tiny" mt={1}>
                  テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト…
                </StyledTypography>
              </StyledDairy>
            </Grid>
          ))}
      </Grid>
      <Box display="flex" alignItems="center" justifyContent="center" mt={4}>
        <ButtonLoadMore>コラムをもっと見る</ButtonLoadMore>
      </Box>
    </>
  );
};

export default Dairy;
