import {Box, Grid, Typography, styled} from '@mui/material';
import {ElementType} from 'src/@types/view-models/bodyRecord';

import MyRecommend1Image from 'src/assets/images/MyRecommend-1.jpg';
import MyRecommend2Image from 'src/assets/images/MyRecommend-2.jpg';
import MyRecommend3Image from 'src/assets/images/MyRecommend-3.jpg';

const StyledEntry = styled(Box)(({theme}) => ({
  backgroundColor: theme.palette.primary[300],
  padding: theme.spacing(2),
  position: 'relative',
  cursor: 'pointer',
  [theme.breakpoints.down('md')]: {
    padding: theme.spacing(1),
  },
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
    [theme.breakpoints.down('md')]: {
      fontSize: '20px',
      lineHeight: '28px',
    },
  },
  '& p': {
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.light?.main,
    padding: `3px ${theme.spacing(2)}`,
    [theme.breakpoints.down('md')]: {
      padding: 0,
      fontSize: '12px',
      lineHeight: '20px',
    },
    [theme.breakpoints.down('sm')]: {
      padding: `3px ${theme.spacing(2)}`,
      fontSize: '18px',
      lineHeight: '24px',
    },
  },
}));

const entries = [
  {
    image: MyRecommend1Image,
    title: 'BODY RECORD',
    subTitle: '自分のカラダの記録',
    elementType: ElementType.BODY_RECORD,
  },
  {
    image: MyRecommend2Image,
    title: 'MY EXERCISE',
    subTitle: '自分の運動の記録',
    elementType: ElementType.MY_EXERCISE,
  },
  {
    image: MyRecommend3Image,
    title: 'MY DIARY',
    subTitle: '自分の日記',
    elementType: ElementType.MY_DIARY,
  },
];

const Entries = () => {
  const handleScrollToView = (type: ElementType) => {
    const element = document.getElementById(type);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'center',
        inline: 'center',
      });
    }
  };
  return (
    <Grid container spacing={{xs: 3, sm: 2, md: 5}}>
      {entries.map((entry, idx) => (
        <Grid item xs={12} sm={4} key={idx}>
          <StyledEntry onClick={() => handleScrollToView(entry.elementType)}>
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
