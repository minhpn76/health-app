import {Box, Grid, Typography, styled} from '@mui/material';
import {PostType} from 'src/@types/models/posts';

type RecommendProps = {
  onChangePostType: (postType: PostType) => void;
};

const StyledRecommendItem = styled(Box)(({theme}) => ({
  backgroundColor: theme.palette.dark?.[600],
  cursor: 'pointer',
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

const StyledLine = styled(Box)(({theme}) => ({
  width: theme.spacing(7),
  height: 2,
  backgroundColor: theme.palette.light?.main,
}));

const recommendItems = [
  {
    title: 'RECOMMENDED COLUMN',
    description: 'オススメ',
    type: PostType.COLUMN,
  },
  {
    title: 'RECOMMENDED DIET',
    description: 'ダイエット',
    type: PostType.DIET,
  },
  {
    title: 'RECOMMENDED BEAUTY',
    description: '美容',
    type: PostType.BEAUTY,
  },
  {
    title: 'RECOMMENDED HEALTH',
    description: '健康',
    type: PostType.HEALTH,
  },
];

const Recommend = ({onChangePostType}: RecommendProps) => {
  return (
    <Grid container spacing={4}>
      {recommendItems.map((recommend, idx) => (
        <Grid item xs={12} sm={6} md={3} key={idx}>
          <StyledRecommendItem
            data-testid="recommend-item"
            onClick={() => onChangePostType(recommend.type)}
          >
            <Typography variant="h5">{recommend.title}</Typography>
            <StyledLine />
            <Typography variant="p">{recommend.description}</Typography>
          </StyledRecommendItem>
        </Grid>
      ))}
    </Grid>
  );
};

export default Recommend;
