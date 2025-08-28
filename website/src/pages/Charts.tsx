import { useEffect, useState } from 'react';
import { getSnapshots } from '../lib/data';
import type { Snapshot } from '../types/data';
import PortfolioChart from '../components/PortfolioChart';

function Charts() {
  const [data, setData] = useState<Snapshot[] | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    getSnapshots()
      .then(setData)
      .catch((err) => setError(err.message));
  }, []);

  return (
    <div className="p-4">
      <h1 className="text-3xl font-bold underline">Charts</h1>
      {error && <p className="text-red-500">{error}</p>}
      {data && <PortfolioChart data={data} />}
    </div>
  );
}

export default Charts;
