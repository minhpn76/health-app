import {Box, Grid, Typography, styled} from '@mui/material';

const SCRecommendItem = styled(Box)(({theme}) => ({
  backgroundColor: theme.palette.dark?.[600],
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  textAlign: 'center',
  padding: theme.spacing(3),
  minHeight: 144,
  '& h5': {
    color: theme.palette.primary[300],
  },
  color: theme.palette.light?.main,
  gap: theme.spacing(2),
}));

const SCLine = styled(Box)(({theme}) => ({
  width: theme.spacing(7),
  height: 2,
  backgroundColor: theme.palette.light?.main,
}));

const recommendItems = [
  {
    title: 'RECOMMENDED COLUMN',
    description: 'オススメ',
  },
  {
    title: 'RECOMMENDED DIET',
    description: 'ダイエット',
  },
  {
    title: 'RECOMMENDED BEAUTY',
    description: '美容',
  },
  {
    title: 'RECOMMENDED HEALTH',
    description: '健康',
  },
];

const Recommend = () => {
  return (
    <Grid container spacing={4}>
      {recommendItems.map((recommend, idx) => (
        <Grid item xs={3} key={idx}>
          <SCRecommendItem>
            <Typography variant="h5">{recommend.title}</Typography>
            <SCLine />
            <Typography variant="p">{recommend.description}</Typography>
          </SCRecommendItem>
        </Grid>
      ))}
    </Grid>
  );
};

export default Recommend;
