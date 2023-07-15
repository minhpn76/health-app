import {Box, Typography} from '@mui/material';

interface NoResultsFoundProps {
  text?: string;
  colorText?: string;
}

const NoResultsFound = ({
  text = 'No results found.',
  colorText,
}: NoResultsFoundProps) => (
  <Box data-testid="no-results" my="100px" textAlign="center">
    <Typography color={colorText}>{text}</Typography>
  </Box>
);

export default NoResultsFound;
