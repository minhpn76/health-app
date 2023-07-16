import {Box, BoxProps, styled} from '@mui/material';

type PictureProps = {
  link: string;
  title?: string;
} & Omit<BoxProps, 'title'>;

const StyledPicture = styled(Box)({
  position: 'relative',
  height: '100%',
  cursor: 'pointer',
  '& img': {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    objectPosition: 'center',
    display: 'block',
  },
});

const StyledTitle = styled(Box)(({theme}) => ({
  position: 'absolute',
  bottom: 0,
  padding: `0 ${theme.spacing(1)}`,
  backgroundColor: theme.palette.primary[300],
  color: theme.palette.light?.main,
}));

const Picture = ({link, title, height}: PictureProps) => {
  return (
    <StyledPicture>
      <Box component="img" src={link} minHeight={height} alt={link} />
      {title && <StyledTitle>{title}</StyledTitle>}
    </StyledPicture>
  );
};

export default Picture;
