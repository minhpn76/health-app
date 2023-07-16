import {Stack, useTheme} from '@mui/material';
import {CartesianGrid, Line, LineChart, Tooltip, XAxis} from 'recharts';
import {PeriodType} from 'src/@types/models/bodyRecord';
import {DataLoading, NoResultsFound} from 'src/components';
import {useBodyRecordQuery} from 'src/hooks/bodyRecord/useBodyRecordQueries';
import useElementSize from 'src/hooks/common/useElementSize';

const STROKEWIDTH = 3;

type BodyRecordWidgetProps = {
  periodType?: PeriodType;
};

const BodyRecordWidget = ({
  periodType = PeriodType.YEAR,
}: BodyRecordWidgetProps) => {
  const theme = useTheme();
  const [rootRef, {width, height: heightRootEl}] = useElementSize();

  const {data: bodyRecords, isLoading} = useBodyRecordQuery({periodType});

  return (
    <Stack
      width="100%"
      height={250}
      ref={rootRef}
      display="flex"
      justifyContent="center"
    >
      <DataLoading isLoading={isLoading}>
        {bodyRecords && bodyRecords.length > 0 ? (
          <LineChart
            width={width}
            height={heightRootEl}
            data={bodyRecords}
            margin={{
              top: 5,
              right: 20,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid horizontal={false} />
            <XAxis dataKey="name" tick={{fill: theme.palette.light?.main}} />
            <Tooltip />
            <Line
              strokeWidth={STROKEWIDTH}
              dataKey="pv"
              stroke={theme.palette.primary[300]}
            />
            <Line
              strokeWidth={STROKEWIDTH}
              dataKey="uv"
              stroke={theme.palette.secondary.main}
            />
          </LineChart>
        ) : (
          <NoResultsFound colorText={theme.palette.light?.main} />
        )}
      </DataLoading>
    </Stack>
  );
};

export default BodyRecordWidget;
