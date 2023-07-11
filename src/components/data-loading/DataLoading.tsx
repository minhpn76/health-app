import {PropsWithChildren} from 'react';
import {Container, Skeleton as MuiSkeleton} from '@mui/material';

type DataLoadingProps = {
  isLoading: boolean;
};

const Skeleton = () => (
  <>
    <MuiSkeleton />
    <MuiSkeleton animation="wave" />
    <MuiSkeleton animation="wave" />
    <MuiSkeleton animation="wave" />
    <MuiSkeleton animation="wave" />
    <MuiSkeleton animation={false} />
  </>
);

const DataLoading = ({
  isLoading,
  children,
}: PropsWithChildren<DataLoadingProps>) => {
  return (
    <>
      {isLoading ? (
        <Container maxWidth="md">
          <Skeleton />
        </Container>
      ) : (
        children
      )}
    </>
  );
};

export default DataLoading;
