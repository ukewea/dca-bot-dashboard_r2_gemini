import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Layout from './components/Layout.tsx'
import Dashboard from './pages/Dashboard.tsx'
import Charts from './pages/Charts.tsx'

let Page;
switch (window.location.pathname) {
  case '/':
    Page = Dashboard;
    break;
  case '/charts':
    Page = Charts;
    break;
  default:
    Page = Dashboard;
    break;
}

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Layout>
      <Page />
    </Layout>
  </React.StrictMode>,
)