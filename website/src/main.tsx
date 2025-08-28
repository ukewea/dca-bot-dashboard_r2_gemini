import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Layout from './components/Layout.tsx'
import Dashboard from './pages/Dashboard.tsx'
import Charts from './pages/Charts.tsx'

const basePath = import.meta.env.BASE_URL;
const currentPath = window.location.pathname;
const relativePath = currentPath.startsWith(basePath) 
  ? currentPath.substring(basePath.length) 
  : currentPath;

let Page;
switch (relativePath) {
  case '':
  case '/':
    Page = Dashboard;
    break;
  case 'charts':
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