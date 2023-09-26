import {Box, Container, Typography, styled} from '@mui/material';

const StyledAppFooter = styled(Box)(({theme}) => ({
  display: 'flex',
  alignItems: 'center',
  backgroundColor: theme.palette.dark?.main,
  padding: '50px 0',
  '& p': {
    color: theme.palette.light?.main,
  },
}));

const StyledFooterContainer = styled(Container)({
  display: 'flex',
  gap: '50px',
  flexWrap: 'wrap',
});

const footerItems = [
  {
    text: 'Registration',
    link: '#',
  },
  {
    text: 'Company',
    link: '#',
  },
  {
    text: 'Term of service',
    link: '#',
  },
  {
    text: 'Personal information',
    link: '#',
  },
  {
    text: 'SCTL',
    link: '#',
  },
  {
    text: 'Inquiry',
    link: '#',
  },
];

const AppFooter = () => {
  return (
    <StyledAppFooter>
      <StyledFooterContainer maxWidth="lg">
        {footerItems.map((footer, idx) => (
          <Typography variant="tiny" key={idx}>
            {footer.text}
          </Typography>
        ))}
      </StyledFooterContainer>
    </StyledAppFooter>
  );
};

export default AppFooter;
