import {Box, Container, Typography, styled} from '@mui/material';

const SCAppFooter = styled(Box)(({theme}) => ({
  display: 'flex',
  alignItems: 'center',
  backgroundColor: theme.palette.dark?.[500],
  padding: '50px 0',
  '& p': {
    color: theme.palette.light?.main,
    fontFamily: 'NotoSansJP-Regular',
  },
}));

const SCFooterContainer = styled(Container)({
  display: 'flex',
  gap: '50px',
});

const footerItems = [
  {
    text: '会員登録',
    link: '#',
  },
  {
    text: '運営会社',
    link: '#',
  },
  {
    text: '利用規約',
    link: '#',
  },
  {
    text: '個人情報の取扱について',
    link: '#',
  },
  {
    text: '特定商取引法に基づく表記',
    link: '#',
  },
  {
    text: 'お問い合わせ',
    link: '#',
  },
];

const AppFooter = () => {
  return (
    <SCAppFooter>
      <SCFooterContainer maxWidth="lg">
        {footerItems.map((footer, idx) => (
          <Typography key={idx}>{footer.text}</Typography>
        ))}
      </SCFooterContainer>
    </SCAppFooter>
  );
};

export default AppFooter;
