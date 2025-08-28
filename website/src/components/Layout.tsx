import { ReactNode, useEffect, useState } from 'react';

interface LayoutProps {
  children: ReactNode;
}

function Layout({ children }: LayoutProps) {
  const [theme, setTheme] = useState(localStorage.getItem('theme') ?? 'light');

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  return (
    <div className="bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 min-h-screen">
      <nav className="bg-gray-800 p-4 flex justify-between items-center">
        <ul className="flex space-x-4">
          <li>
            <a href="/" className="text-white">Dashboard</a>
          </li>
          <li>
            <a href="/charts" className="text-white">Charts</a>
          </li>
        </ul>
        <button onClick={toggleTheme} className="text-white">
          {theme === 'light' ? 'Dark' : 'Light'} Mode
        </button>
      </nav>
      <main>{children}</main>
    </div>
  );
}

export default Layout;