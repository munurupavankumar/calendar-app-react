import { Link } from 'react-router-dom';

const MainLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <aside className="w-64 bg-gray-800 text-white flex-shrink-0">
        <div className="p-4">
          <h2 className="text-xl font-bold mb-4">Calendar App</h2>
          <nav>
            <ul className="space-y-2">
              <li>
                <Link to="/dashboard" className="block hover:text-gray-300">
                  Dashboard
                </Link>
              </li>
              <li>
                <Link to="/calendar" className="block hover:text-gray-300">
                  Calendar
                </Link>
              </li>
              <li>
                <Link to="/analytics" className="block hover:text-gray-300">
                  Analytics
                </Link>
              </li>
              <li>
                <Link to="/admin" className="block hover:text-gray-300">
                  Admin
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 bg-gray-100 p-6 overflow-y-auto">
        {children}
      </main>
    </div>
  );
};

export default MainLayout;
