import type { PositionsCurrent, Snapshot } from '../types/data';

const DATA_BASE_PATH = import.meta.env.BASE_URL + 'data';

export async function getPositionsCurrent(): Promise<PositionsCurrent> {
  const response = await fetch(`${DATA_BASE_PATH}/positions_current.json`);
  if (!response.ok) {
    throw new Error('Failed to fetch positions_current.json');
  }
  return response.json();
}

export async function getSnapshots(): Promise<Snapshot[]> {
  const response = await fetch(`${DATA_BASE_PATH}/snapshots.ndjson`);
  if (!response.ok) {
    throw new Error('Failed to fetch snapshots.ndjson');
  }
  const text = await response.text();
  return text
    .split('\n')
    .filter((line) => line.trim() !== '')
    .map((line) => JSON.parse(line));
}
