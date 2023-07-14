import {PropsWithChildren} from 'react';
import {Container} from '@mui/material';
import CircularProgress from '@mui/material/CircularProgress';

type DataLoadingProps = {
  isLoading: boolean;
};

const DataLoading = ({
  isLoading,
  children,
}: PropsWithChildren<DataLoadingProps>) => {
  return (
    <>
      {isLoading ? (
        <Container
          maxWidth="md"
          sx={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}
        >
          <CircularProgress />
        </Container>
      ) : (
        children
      )}
    </>
  );
};

export default DataLoading;
