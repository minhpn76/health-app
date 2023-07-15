import {ForwardedRef, PropsWithChildren, forwardRef} from 'react';
import {Box, styled} from '@mui/material';

type WrapperBoxProps = {
  title: React.ReactElement;
};

const StyledWrapperBox = styled(Box)(({theme}) => ({
  backgroundColor: theme.palette.dark?.main,
  padding: `${theme.spacing(2)} ${theme.spacing(3)}`,
  color: theme.palette.light?.main,
}));

const StyledWrapperBoxTitle = styled(Box)(({theme}) => ({
  display: 'flex',
  alignItems: 'flex-start',
  '& h5': {
    color: theme.palette.light?.main,
  },
  '& small': {
    color: theme.palette.light?.main,
  },
}));

const WrapperBox = (
  {title, children}: PropsWithChildren<WrapperBoxProps>,
  ref: ForwardedRef<HTMLDivElement>
) => {
  return (
    <StyledWrapperBox component="div" ref={ref}>
      <StyledWrapperBoxTitle>{title}</StyledWrapperBoxTitle>
      <Box mt={2} flexGrow={1}>
        {children}
      </Box>
    </StyledWrapperBox>
  );
};

export default forwardRef(WrapperBox);
