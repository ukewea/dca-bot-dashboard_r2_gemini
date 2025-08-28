import PositionsTable from '../components/PositionsTable';
import { useEffect, useState } from 'react';
import { getPositionsCurrent } from '../lib/data';
import type { PositionsCurrent } from '../types/data';

function Dashboard() {
  const [data, setData] = useState<PositionsCurrent | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    getPositionsCurrent()
      .then(setData)
      .catch((err) => setError(err.message));
  }, []);

  return (
    <div className="p-4">
      <h1 className="text-3xl font-bold underline">Crypto DCA Bot</h1>
      {error && <p className="text-red-500">{error}</p>}
      {data && (
        <div>
          <p>Total Invested: {data.total_quote_invested} {data.base_currency}</p>
          <p>Last Updated: {new Date(data.updated_at).toLocaleString()}</p>
          <PositionsTable positions={data.positions} />
        </div>
      )}
    </div>
  );
}

export default Dashboard;