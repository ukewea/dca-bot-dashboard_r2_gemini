export interface Position {
  symbol: string;
  open_qty: string;
  total_cost: string;
  avg_cost: string;
}

export interface PositionsCurrent {
  updated_at: string;
  base_currency: string;
  total_quote_invested: string;
  positions: Position[];
}

export interface SnapshotPosition extends Position {
  price: string;
  market_value: string;
  unrealized_pl: string;
}

export interface Snapshot {
  ts: string;
  base_currency: string;
  total_quote_invested: string;
  total_market_value: string;
  total_unrealized_pl: string;
  positions: SnapshotPosition[];
}
