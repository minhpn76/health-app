import {useState} from 'react';
import {Box, Typography, Button, styled, Stack, useTheme} from '@mui/material';
import {
  WrapperBox,
  LineChart,
  DataLoading,
  NoResultsFound,
} from 'src/components';
import {PeriodType} from 'src/@types/models/bodyRecord';
import useElementSize from 'src/hooks/common/useElementSize';
import {useBodyRecordQuery} from 'src/hooks/bodyRecord/useBodyRecordQueries';

const StyledWrapperAction = styled(Box)(({theme}) => ({
  display: 'flex',
  gap: theme.spacing(3),
}));

const StyledAction = styled(Button)<{isActive?: boolean}>(
  ({theme, isActive}) => ({
    backgroundColor: !isActive
      ? theme.palette.light?.main
      : theme.palette.primary[300],
    color: isActive ? theme.palette.light?.main : theme.palette.primary[300],
    borderRadius: theme.spacing(3),
    padding: '1px 2px',
  })
);

const actions = [
  {
    type: PeriodType.DAY,
    label: '日',
  },
  {
    type: PeriodType.WEEK,
    label: '週',
  },
  {
    type: PeriodType.MONTH,
    label: '月',
  },
  {
    type: PeriodType.YEAR,
    label: '年',
  },
];

const BodyRecords = () => {
  const [rootRef, {width}] = useElementSize();
  const theme = useTheme();
  const [periodType, setPeriodType] = useState<PeriodType>(PeriodType.YEAR);

  const {data: bodyRecords, isLoading} = useBodyRecordQuery({periodType});

  return (
    <WrapperBox
      title={
        <>
          <Typography variant="small" marginRight={3}>
            BODY
            <Typography variant="small">RECORD</Typography>
          </Typography>
          <Typography variant="h5">2021.05.21</Typography>
        </>
      }
    >
      <DataLoading isLoading={isLoading}>
        {bodyRecords && bodyRecords.length > 0 ? (
          <Stack width="100%" height="100%" ref={rootRef}>
            <LineChart width={width} height={250} data={bodyRecords} />
          </Stack>
        ) : (
          <NoResultsFound colorText={theme.palette.light?.main} />
        )}
      </DataLoading>
      <StyledWrapperAction mt={2}>
        {actions.map((ac, idx) => (
          <StyledAction
            isActive={periodType === ac.type}
            onClick={() => setPeriodType(ac.type)}
            key={idx}
          >
            {ac.label}
          </StyledAction>
        ))}
      </StyledWrapperAction>
    </WrapperBox>
  );
};

export default BodyRecords;
