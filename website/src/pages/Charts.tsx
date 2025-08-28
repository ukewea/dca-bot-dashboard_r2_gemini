import { useEffect, useState } from 'react';
import { getSnapshots } from '../lib/data';
import type { Snapshot } from '../types/data';
import PortfolioChart from '../components/PortfolioChart';

function Charts() {
  const [data, setData] = useState<Snapshot[] | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [timeRange, setTimeRange] = useState('all');
  const [selectedSymbols, setSelectedSymbols] = useState<string[]>([]);

  useEffect(() => {
    getSnapshots()
      .then(setData)
      .catch((err) => setError(err.message));
  }, []);

  const allSymbols = data
    ? Array.from(new Set(data.flatMap((snapshot) => snapshot.positions.map((p) => p.symbol))))
    : [];

  const handleSymbolChange = (symbol: string) => {
    setSelectedSymbols((prev) =>
      prev.includes(symbol) ? prev.filter((s) => s !== symbol) : [...prev, symbol]
    );
  };

  const filteredData = data
    ?.filter((snapshot) => {
      if (timeRange === 'all') {
        return true;
      }
      const snapshotDate = new Date(snapshot.ts);
      const now = new Date();
      const diffInDays = (now.getTime() - snapshotDate.getTime()) / (1000 * 3600 * 24);
      if (timeRange === '7d') {
        return diffInDays <= 7;
      }
      if (timeRange === '30d') {
        return diffInDays <= 30;
      }
      return true;
    })
    .map((snapshot) => ({
      ...snapshot,
      positions: snapshot.positions.filter(
        (p) => selectedSymbols.length === 0 || selectedSymbols.includes(p.symbol)
      ),
    }));

  return (
    <div className="p-4">
      <h1 className="text-3xl font-bold underline">Charts</h1>
      <div className="flex space-x-4 my-4">
        <button onClick={() => setTimeRange('all')} className={`px-4 py-2 rounded-lg ${timeRange === 'all' ? 'bg-gray-800 text-white' : 'bg-gray-200'}`}>All</button>
        <button onClick={() => setTimeRange('7d')} className={`px-4 py-2 rounded-lg ${timeRange === '7d' ? 'bg-gray-800 text-white' : 'bg-gray-200'}`}>7D</button>
        <button onClick={() => setTimeRange('30d')} className={`px-4 py-2 rounded-lg ${timeRange === '30d' ? 'bg-gray-800 text-white' : 'bg-gray-200'}`}>30D</button>
      </div>
      <div className="flex flex-wrap space-x-4 my-4">
        {allSymbols.map((symbol) => (
          <label key={symbol} className="flex items-center space-x-2">
            <input
              type="checkbox"
              checked={selectedSymbols.includes(symbol)}
              onChange={() => handleSymbolChange(symbol)}
            />
            <span>{symbol}</span>
          </label>
        ))}
      </div>
      {error && <p className="text-red-500">{error}</p>}
      {filteredData && <PortfolioChart data={filteredData} />}
    </div>
  );
}

export default Charts;
