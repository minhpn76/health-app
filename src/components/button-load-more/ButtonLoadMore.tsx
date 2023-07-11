import {Button, ButtonProps, styled} from '@mui/material';

type ButtonLoadMore = ButtonProps;

const StyledButtonLoadMore = styled(Button)(({theme, disabled}) => ({
  padding: `${theme.spacing(2)} ${theme.spacing(10)}`,
  color: theme.palette.light?.main,
  ...(disabled
    ? {
        background: theme.palette.grey[400],
      }
    : {
        background: `linear-gradient(5deg, ${theme.palette.primary[300]} 0%,  ${theme.palette.primary.main} 100%)`,
      }),
}));

const ButtonLoadMore = ({children, ...restProps}: ButtonLoadMore) => {
  return <StyledButtonLoadMore {...restProps}>{children}</StyledButtonLoadMore>;
};

export default ButtonLoadMore;
