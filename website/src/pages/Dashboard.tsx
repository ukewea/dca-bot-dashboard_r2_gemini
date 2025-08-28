import { useEffect, useState } from 'react';
import { getPositionsCurrent, getSnapshots } from '../lib/data';
import type { PositionsCurrent, Snapshot } from '../types/data';
import Kpis from '../components/Kpis';
import PositionsTable from '../components/PositionsTable';

function Dashboard() {
  const [positions, setPositions] = useState<PositionsCurrent | null>(null);
  const [snapshots, setSnapshots] = useState<Snapshot[] | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    getPositionsCurrent()
      .then(setPositions)
      .catch((err) => setError(err.message));
    getSnapshots()
      .then(setSnapshots)
      .catch((err) => setError(err.message));
  }, []);

  const latestSnapshot = snapshots?.[snapshots.length - 1];

  const kpiData = positions && latestSnapshot ? {
    ...positions,
    total_market_value: latestSnapshot.total_market_value,
    total_unrealized_pl: latestSnapshot.total_unrealized_pl,
  } : positions;

  return (
    <div className="p-4">
      <h1 className="text-3xl font-bold underline">Crypto DCA Bot</h1>
      {error && <p className="text-red-500">{error}</p>}
      {kpiData && <Kpis data={kpiData} />}
      {positions && <PositionsTable positions={positions.positions} />}
    </div>
  );
}

export default Dashboard;
