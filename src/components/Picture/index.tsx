import {Box, styled} from '@mui/material';

type PictureProps = {
  link: string;
  title?: string;
};

const StyledPicture = styled(Box)({
  position: 'relative',
  '& img': {
    width: '100%',
    objectFit: 'cover',
    height: 'auto',
    display: 'block',
    flexGrow: 1,
  },
});

const StyledTitle = styled(Box)(({theme}) => ({
  position: 'absolute',
  bottom: 0,
  padding: `0 ${theme.spacing(1)}`,
  backgroundColor: theme.palette.primary[300],
  color: theme.palette.light?.main,
}));

const Picture = ({link, title}: PictureProps) => {
  return (
    <StyledPicture>
      <Box component="img" src={link} alt={link} />
      {title && <StyledTitle>{title}</StyledTitle>}
    </StyledPicture>
  );
};

export default Picture;
