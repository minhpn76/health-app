import {Button, ButtonProps, styled} from '@mui/material';

type ButtonLoadMore = ButtonProps;

const StyledButtonLoadMore = styled(Button)(({theme}) => ({
  padding: `${theme.spacing(2)} ${theme.spacing(6)}`,
  color: theme.palette.light?.main,
  background: `linear-gradient(5deg, ${theme.palette.primary[300]} 0%,  ${theme.palette.primary.main} 100%)`,
}));

const ButtonLoadMore = ({children, ...restProps}: ButtonLoadMore) => {
  return <StyledButtonLoadMore {...restProps}>{children}</StyledButtonLoadMore>;
};

export default ButtonLoadMore;
