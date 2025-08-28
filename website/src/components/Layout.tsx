import type { ReactNode } from 'react';

interface LayoutProps {
  children: ReactNode;
}

function Layout({ children }: LayoutProps) {
  return (
    <div>
      <nav className="bg-gray-800 p-4">
        <ul className="flex space-x-4">
          <li>
            <a href="/" className="text-white">Dashboard</a>
          </li>
          <li>
            <a href="/charts" className="text-white">Charts</a>
          </li>
        </ul>
      </nav>
      <main>{children}</main>
    </div>
  );
}

export default Layout;
