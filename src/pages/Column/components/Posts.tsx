import {Box, Grid, Typography, styled} from '@mui/material';
import Picture from 'src/components/Picture';

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
  return (
    <Grid container spacing={2}>
      {Array(8)
        .fill(null)
        .map(i => (
          <Grid item xs={3}>
            <StyledWrapperPost>
              <Picture link="/images/column-3.jpg" title="2021.05.17   23:25" />
              <StyledTypography mt={1} variant="small">
                魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ
              </StyledTypography>
              <StyledTags mt={1}>
                <Typography color="primary" variant="tiny">
                  #魚料理
                </Typography>
                <Typography color="primary" variant="tiny">
                  #和食
                </Typography>
                <Typography color="primary" variant="tiny">
                  #DHA
                </Typography>
              </StyledTags>
            </StyledWrapperPost>
          </Grid>
        ))}
    </Grid>
  );
};

export default Posts;
