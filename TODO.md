# Crypto DCA Bot - Website TODO

## P0: MVP (Static-only)

### 1. Project Setup
- [x] Initialize Vite + React + TS project
- [x] Install dependencies:
  - `tailwindcss`
  - `recharts` or `echarts-for-react`
  - `eslint`, `prettier`
- [x] Configure Tailwind CSS
- [x] Set up ESLint and Prettier for code quality
- [x] Create directory structure as per design doc (`src/components`, `src/pages`, `src/lib`, `src/types`)

### 2. Data Fetching & Parsing
- [x] Create a library in `src/lib` to fetch and parse data from:
  - `positions_current.json`
  - `snapshots.ndjson`
- [x] Implement robust parsing for NDJSON, handling potential empty/malformed lines.
- [x] Define TypeScript types for all data structures in `src/types`.

### 3. UI - Dashboard
- [x] Create a `Dashboard` page component in `src/pages`.
- [x] Create a `KPIs` component to display:
  - Total invested
  - Market value
  - P/L
  - Base currency
- [x] Create a `PositionsTable` component to display the list of positions with all the required columns.
- [x] Display the "Last updated" timestamp.

### 4. UI - Charts
- [x] Create a `Charts` page component in `src/pages`.
- [x] Implement a chart to visualize "Invested vs. Market Value vs. P/L" over time using `snapshots.ndjson`.
- [x] Add a time range selector (24h / 7d / 30d / all).
- [x] Add a symbol filter (multi-select).

### 5. Styling & Layout
- [x] Implement a basic layout with a navigation bar.
- [x] Implement a light/dark theme.
- [x] Ensure the layout is responsive.

### 6. Build & Deployment
- [x] Configure Vite for production build.
- [x] Create a GitHub Actions workflow for CI/CD to deploy to GitHub Pages.



## Testing

- [ ] **Unit Tests:**
  - Write unit tests for the data parsers and selectors.
- [ ] **Component Tests:**
  - Write component tests for the `PositionsTable` and `KPIs` components.
- [ ] **E2E Tests:**
  - Set up Cypress or Playwright for end-to-end testing.