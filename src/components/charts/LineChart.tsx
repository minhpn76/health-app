import {useTheme} from '@mui/material';
import {
  CartesianGrid,
  Line,
  LineChart as ReLineChart,
  Tooltip,
  XAxis,
} from 'recharts';

const STROKEWIDTH = 3;

type LineChartProps<T> = {
  width: number;
  height: number;
  data: T;
};

const LineChart = <T extends object>({
  width,
  height,
  data,
}: LineChartProps<T>) => {
  const theme = useTheme();
  return (
    <ReLineChart
      width={width}
      height={height}
      data={data as T}
      margin={{
        top: 5,
        right: 20,
        left: 20,
        bottom: 5,
      }}
    >
      <CartesianGrid horizontal={false} />
      <XAxis dataKey="name" color={theme.palette.light?.main} />
      <Tooltip />
      <Line
        strokeWidth={STROKEWIDTH}
        dataKey="pv"
        stroke={theme.palette.primary[300]}
      />
      <Line strokeWidth={STROKEWIDTH} dataKey="uv" stroke="#82ca9d" />
    </ReLineChart>
  );
};

export default LineChart;
