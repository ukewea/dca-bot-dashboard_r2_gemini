import type { PositionsCurrent } from '../types/data';

interface KpisProps {
  data: PositionsCurrent & { total_market_value: string, total_unrealized_pl: string };
}

function Kpis({ data }: KpisProps) {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-4">
      <div className="bg-gray-100 p-4 rounded-lg">
        <h2 className="text-sm font-medium text-gray-500">Total Invested</h2>
        <p className="text-3xl font-bold">{data.total_quote_invested} {data.base_currency}</p>
      </div>
      <div className="bg-gray-100 p-4 rounded-lg">
        <h2 className="text-sm font-medium text-gray-500">Market Value</h2>
        <p className="text-3xl font-bold">{data.total_market_value} {data.base_currency}</p>
      </div>
      <div className="bg-gray-100 p-4 rounded-lg">
        <h2 className="text-sm font-medium text-gray-500">Unrealized P/L</h2>
        <p className="text-3xl font-bold">{data.total_unrealized_pl} {data.base_currency}</p>
      </div>
      <div className="bg-gray-100 p-4 rounded-lg">
        <h2 className="text-sm font-medium text-gray-500">Base Currency</h2>
        <p className="text-3xl font-bold">{data.base_currency}</p>
      </div>
    </div>
  );
}

export default Kpis;
