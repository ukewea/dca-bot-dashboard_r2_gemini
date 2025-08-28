import type { Position } from '../types/data';

interface PositionsTableProps {
  positions: Position[];
}

function PositionsTable({ positions }: PositionsTableProps) {
  return (
    <div className="overflow-x-auto mt-4">
      <table className="table-auto w-full">
        <thead>
          <tr>
            <th className="px-4 py-2">Symbol</th>
            <th className="px-4 py-2">Quantity</th>
            <th className="px-4 py-2">Average Cost</th>
            <th className="px-4 py-2">Total Cost</th>
          </tr>
        </thead>
        <tbody>
          {positions.map((position) => (
            <tr key={position.symbol}>
              <td className="border px-4 py-2">{position.symbol}</td>
              <td className="border px-4 py-2">{position.open_qty}</td>
              <td className="border px-4 py-2">{position.avg_cost}</td>
              <td className="border px-4 py-2">{position.total_cost}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default PositionsTable;