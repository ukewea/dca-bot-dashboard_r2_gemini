# Crypto DCA Bot - Website TODO

## P0: MVP (Static-only)

### 1. Project Setup
- [x] Initialize Vite + React + TS project
- [ ] Install dependencies:
  - `tailwindcss`
  - `recharts` or `echarts-for-react`
  - `eslint`, `prettier`
- [ ] Configure Tailwind CSS
- [ ] Set up ESLint and Prettier for code quality
- [ ] Create directory structure as per design doc (`src/components`, `src/pages`, `src/lib`, `src/types`)

### 2. Data Fetching & Parsing
- [ ] Create a library in `src/lib` to fetch and parse data from:
  - `positions_current.json`
  - `snapshots.ndjson`
- [ ] Implement robust parsing for NDJSON, handling potential empty/malformed lines.
- [ ] Define TypeScript types for all data structures in `src/types`.

### 3. UI - Dashboard
- [ ] Create a `Dashboard` page component in `src/pages`.
- [ ] Create a `KPIs` component to display:
  - Total invested
  - Market value
  - P/L
  - Base currency
- [ ] Create a `PositionsTable` component to display the list of positions with all the required columns.
- [ ] Display the "Last updated" timestamp.

### 4. UI - Charts
- [ ] Create a `Charts` page component in `src/pages`.
- [ ] Implement a chart to visualize "Invested vs. Market Value vs. P/L" over time using `snapshots.ndjson`.
- [ ] Add a time range selector (24h / 7d / 30d / all).
- [ ] Add a symbol filter (multi-select).

### 5. Styling & Layout
- [ ] Implement a basic layout with a navigation bar.
- [ ] Implement a light/dark theme.
- [ ] Ensure the layout is responsive.

### 6. Build & Deployment
- [ ] Configure Vite for production build.
- [ ] Create a GitHub Actions workflow for CI/CD to deploy to GitHub Pages.



## Testing

- [ ] **Unit Tests:**
  - Write unit tests for the data parsers and selectors.
- [ ] **Component Tests:**
  - Write component tests for the `PositionsTable` and `KPIs` components.
- [ ] **E2E Tests:**
  - Set up Cypress or Playwright for end-to-end testing.
