import {Box, Typography} from '@mui/material';

interface NoResultsFoundProps {
  text?: string;
  colorText?: string;
}

const NoResultsFound = ({
  text = '結果が見つかりません。',
  colorText,
}: NoResultsFoundProps) => (
  <Box data-testid="no-results" my="100px" textAlign="center">
    <Typography color={colorText}>{text}</Typography>
  </Box>
);

export default NoResultsFound;
