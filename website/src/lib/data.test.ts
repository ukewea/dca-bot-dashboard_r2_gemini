import { describe, it, expect } from 'vitest';
import { getPositionsCurrent, getSnapshots } from './data';

global.fetch = vi.fn();

function createFetchResponse(data) {
  return { json: () => new Promise((resolve) => resolve(data)), text: () => new Promise((resolve) => resolve(data)) };
}

describe('getPositionsCurrent', () => {
  it('fetches and parses positions_current.json', async () => {
    const mockData = { updated_at: '2025-08-27T12:00:00Z', base_currency: 'USD', total_quote_invested: '1000', positions: [] };
    fetch.mockResolvedValue(createFetchResponse(mockData));

    const data = await getPositionsCurrent();

    expect(fetch).toHaveBeenCalledWith('/data/positions_current.json');
    expect(data).toEqual(mockData);
  });
});

describe('getSnapshots', () => {
  it('fetches and parses snapshots.ndjson', async () => {
    const mockData = `{"ts":"2025-08-27T12:00:00Z","positions":[]}\n{"ts":"2025-08-27T13:00:00Z","positions":[]}`;
    fetch.mockResolvedValue(createFetchResponse(mockData));

    const data = await getSnapshots();

    expect(fetch).toHaveBeenCalledWith('/data/snapshots.ndjson');
    expect(data).toEqual([
      { ts: '2025-08-27T12:00:00Z', positions: [] },
      { ts: '2025-08-27T13:00:00Z', positions: [] },
    ]);
  });
});
