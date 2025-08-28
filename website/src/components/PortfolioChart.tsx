import type { Snapshot } from '../types/data';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';

interface PortfolioChartProps {
  data: Snapshot[];
}

function PortfolioChart({ data }: PortfolioChartProps) {
  const chartData = data.map((snapshot) => ({
    name: new Date(snapshot.ts).toLocaleDateString(),
    invested: parseFloat(snapshot.total_quote_invested),
    marketValue: parseFloat(snapshot.total_market_value),
    pl: parseFloat(snapshot.total_unrealized_pl),
  }));

  return (
    <ResponsiveContainer width="100%" height={400}>
      <LineChart
        data={chartData}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="invested" stroke="#8884d8" />
        <Line type="monotone" dataKey="marketValue" stroke="#82ca9d" />
        <Line type="monotone" dataKey="pl" stroke="#ffc658" />
      </LineChart>
    </ResponsiveContainer>
  );
}

export default PortfolioChart;
