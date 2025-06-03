import React from 'react';
import { Menu, Bell, Settings, User } from 'lucide-react';

interface HeaderProps {
  onMenuClick: () => void;
}

const Header: React.FC<HeaderProps> = ({ onMenuClick }) => {
  return (
    <header className="bg-slate-800/50 backdrop-blur-sm border-b border-slate-700 py-4 px-6">
      <div className="flex justify-between items-center">
        <div className="flex items-center">
          <button 
            onClick={onMenuClick}
            className="text-slate-400 lg:hidden hover:text-white focus:outline-none"
          >
            <Menu size={24} />
          </button>
          
          <div className="hidden md:flex ml-4 lg:ml-0">
            <nav className="flex" aria-label="Breadcrumb">
              <ol className="flex items-center space-x-2">
                <li>
                  <a href="#" className="text-slate-400 hover:text-white transition-colors duration-200">Home</a>
                </li>
                <li className="text-slate-600">/</li>
                <li>
                  <a href="#" className="text-white">Dashboard</a>
                </li>
              </ol>
            </nav>
          </div>
        </div>
        
        <div className="flex items-center space-x-4">
          <button className="relative text-slate-400 hover:text-white transition-colors duration-200">
            <Bell size={20} />
            <span className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full text-xs flex items-center justify-center">3</span>
          </button>
          
          <button className="text-slate-400 hover:text-white transition-colors duration-200">
            <Settings size={20} />
          </button>
          
          <div className="relative group">
            <button className="flex items-center space-x-2">
              <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
                <User size={16} className="text-white" />
              </div>
              <span className="hidden md:block text-sm font-medium">Alex Johnson</span>
            </button>
            
            <div className="absolute right-0 top-full mt-2 w-48 bg-slate-800 border border-slate-700 rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
              <div className="p-3 border-b border-slate-700">
                <p className="text-sm font-medium">Alex Johnson</p>
                <p className="text-xs text-slate-400">alex@example.com</p>
              </div>
              <ul className="py-2">
                <li>
                  <a href="#" className="block px-4 py-2 text-sm hover:bg-slate-700 transition-colors duration-200">
                    Profile
                  </a>
                </li>
                <li>
                  <a href="#" className="block px-4 py-2 text-sm hover:bg-slate-700 transition-colors duration-200">
                    Settings
                  </a>
                </li>
                <li>
                  <a href="#" className="block px-4 py-2 text-sm text-red-400 hover:bg-slate-700 transition-colors duration-200">
                    Sign out
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;