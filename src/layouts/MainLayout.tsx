import React, { ReactNode } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Calendar, LayoutDashboard, BarChart, Settings, Menu, X } from 'lucide-react';
import { useState } from 'react';

interface MainLayoutProps {
  children: ReactNode;
}

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  const [isSidebarOpen, setSidebarOpen] = useState(true);
  const location = useLocation();

  const navItems = [
    { path: '/dashboard', label: 'Dashboard', icon: LayoutDashboard },
    { path: '/calendar', label: 'Calendar', icon: Calendar },
    { path: '/analytics', label: 'Analytics', icon: BarChart },
    { path: '/admin', label: 'Admin', icon: Settings },
  ];

  const isActive = (path: string): boolean => location.pathname === path;

  return (
    <div className="flex h-screen bg-gray-50">
      {/* Mobile sidebar toggle */}
      <button
        className="lg:hidden fixed top-4 left-4 z-50 p-2 rounded-lg bg-white shadow-md"
        onClick={() => setSidebarOpen(!isSidebarOpen)}
      >
        {isSidebarOpen ? <X size={20} /> : <Menu size={20} />}
      </button>

      {/* Sidebar */}
      <aside className={`
        fixed lg:static
        w-64 h-full
        transform transition-transform duration-200 ease-in-out
        ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'}
        lg:translate-x-0
        bg-white shadow-lg
      `}>
        <div className="p-6">
          <div className="flex items-center gap-3 mb-8">
            <Calendar className="text-blue-600" size={24} />
            <h2 className="text-xl font-bold text-gray-800">Calendar Pro</h2>
          </div>
          
          <nav>
            <ul className="space-y-2">
              {navItems.map(({ path, label, icon: Icon }) => (
                <li key={path}>
                  <Link
                    to={path}
                    className={`
                      flex items-center gap-3 px-4 py-3 rounded-lg
                      transition-all duration-200
                      ${isActive(path) 
                        ? 'bg-blue-50 text-blue-600' 
                        : 'text-gray-600 hover:bg-gray-50'}
                    `}
                  >
                    <Icon size={20} />
                    <span className="font-medium">{label}</span>
                    {isActive(path) && (
                      <div className="ml-auto w-1.5 h-1.5 rounded-full bg-blue-600" />
                    )}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        {/* User profile section */}
        <div className="absolute bottom-0 w-full p-4 border-t border-gray-100">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-gradient-to-r from-blue-400 to-blue-600 flex items-center justify-center text-white font-medium">
              JD
            </div>
            <div className="flex-1">
              <h4 className="text-sm font-medium text-gray-800">John Doe</h4>
              <p className="text-xs text-gray-500">john@example.com</p>
            </div>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-6 overflow-y-auto">
        <div className="max-w-7xl mx-auto">
          {children}
        </div>
      </main>
    </div>
  );
};

export default MainLayout;