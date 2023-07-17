import {ForwardedRef, Fragment, forwardRef, useState} from 'react';
import {Box, Typography, Button, styled} from '@mui/material';
import {WrapperBox} from 'src/components';
import {PeriodType} from 'src/@types/models/bodyRecord';
import BodyRecordWidget from 'src/widgets/body-record-widget/BodyRecordWidget';

const StyledWrapperAction = styled(Box)(({theme}) => ({
  display: 'flex',
  gap: theme.spacing(3),
}));

const StyledAction = styled(Button)<{active?: string}>(({theme, active}) => ({
  backgroundColor:
    active && Boolean(active)
      ? theme.palette.primary[300]
      : theme.palette.light?.main,
  color:
    active && Boolean(active)
      ? theme.palette.light?.main
      : theme.palette.primary[300],
  borderRadius: theme.spacing(3),
  padding: '1px 2px',
}));

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
  const [periodType, setPeriodType] = useState<PeriodType>(PeriodType.YEAR);

  return (
    <WrapperBox
      title={
        <>
          <Typography component="div" variant="small" marginRight={3}>
            BODY
            <Typography variant="small">RECORD</Typography>
          </Typography>
          <Typography variant="h5">2021.05.21</Typography>
        </>
      }
    >
      <BodyRecordWidget periodType={periodType} />
      <StyledWrapperAction mt={2}>
        {actions.map((ac, idx) => (
          <StyledAction
            active={periodType === ac.type ? 'true' : 'false'}
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
