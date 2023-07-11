import {Box, Typography} from '@mui/material';

interface NoResultsFoundProps {
  text?: string;
}

const NoResultsFound = ({text = 'No results found.'}: NoResultsFoundProps) => (
  <Box data-testid="no-results" my="100px" textAlign="center">
    <Typography>{text}</Typography>
  </Box>
);

export default NoResultsFound;
