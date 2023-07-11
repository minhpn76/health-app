import {Box, Grid, Typography, styled} from '@mui/material';

import MyRecommend1Image from 'src/assets/images/MyRecommend-1.jpg';
import MyRecommend2Image from 'src/assets/images/MyRecommend-2.jpg';
import MyRecommend3Image from 'src/assets/images/MyRecommend-3.jpg';

const StyledEntry = styled(Box)(({theme}) => ({
  backgroundColor: theme.palette.primary[300],
  padding: theme.spacing(3),
  position: 'relative',
}));

const StyledImg = styled('img')({
  objectFit: 'cover',
  width: '100%',
  height: '100%',
  filter: 'brightness(30%) sepia(100%) saturate(0)',
});

const StyledTypo = styled(Box)(({theme}) => ({
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  zIndex: '1',
  '& h4': {
    color: theme.palette.primary[300],
    marginBottom: theme.spacing(1),
  },
  '& p': {
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.light?.main,
    padding: `3px ${theme.spacing(2)}`,
  },
}));

const entries = [
  {
    image: MyRecommend1Image,
    title: 'BODY RECORD',
    subTitle: '自分のカラダの記録',
  },
  {
    image: MyRecommend2Image,
    title: 'MY EXERCISE',
    subTitle: '自分の運動の記録',
  },
  {
    image: MyRecommend3Image,
    title: 'MY DIARY',
    subTitle: '自分の日記',
  },
];

const Entries = () => {
  return (
    <Grid container spacing={5}>
      {entries.map((entry, idx) => (
        <Grid item xs={4} key={idx}>
          <StyledEntry>
            <StyledImg src={entry.image} />
            <StyledTypo>
              <Typography variant="h4">{entry.title}</Typography>
              <Typography variant="small">{entry.subTitle}</Typography>
            </StyledTypo>
          </StyledEntry>
        </Grid>
      ))}
    </Grid>
  );
};

export default Entries;
