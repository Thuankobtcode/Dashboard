import React from 'react';
import { LayoutDashboard, Users, Package, CreditCard, Lock, HelpCircle, Settings, ChevronRight } from 'lucide-react';

interface SidebarProps {
  isOpen: boolean;
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen }) => {
  const navItems = [
    { icon: <LayoutDashboard size={20} />, label: 'Dashboard', active: true },
    { icon: <Users size={20} />, label: 'Users', active: false },
    { icon: <Package size={20} />, label: 'Projects', active: false },
    { icon: <CreditCard size={20} />, label: 'Payments', active: false },
    { icon: <Lock size={20} />, label: 'Auth', active: false },
    { icon: <HelpCircle size={20} />, label: 'FAQ', active: false },
  ];

  const settingsItems = [
    { icon: <Settings size={20} />, label: 'Account preferences', active: false },
    { icon: <Settings size={20} />, label: 'Application settings', active: false },
  ];

  return (
    <aside 
      className={`
        fixed inset-y-0 left-0 z-50 lg:relative transform transition-transform duration-300 ease-in-out
        ${isOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
        w-64 bg-slate-800 shadow-lg lg:shadow-none
        border-r border-slate-700
      `}
    >
      <div className="p-4 flex items-center border-b border-slate-700">
        <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-blue-600 mr-3">
          <LayoutDashboard size={20} className="text-white" />
        </div>
        <h1 className="text-xl font-bold text-white">Dashboard</h1>
      </div>

      <div className="py-4">
        <ul>
          {navItems.map((item, index) => (
            <li key={index}>
              <a 
                href="#" 
                className={`
                  flex items-center py-3 px-4 text-sm
                  ${item.active 
                    ? 'text-white bg-gradient-to-r from-blue-600/20 to-transparent border-l-2 border-blue-600' 
                    : 'text-slate-400 hover:text-white hover:bg-slate-700/50'}
                  transition-all duration-200
                `}
              >
                <span className={`mr-3 ${item.active ? 'text-blue-500' : ''}`}>
                  {item.icon}
                </span>
                <span>{item.label}</span>
                {item.active && <ChevronRight size={16} className="ml-auto text-slate-500" />}
              </a>
            </li>
          ))}
        </ul>

        <div className="border-t border-slate-700 mt-4 pt-4">
          <p className="px-4 text-xs font-medium text-slate-500 uppercase tracking-wider mb-2">Settings</p>
          <ul>
            {settingsItems.map((item, index) => (
              <li key={index}>
                <a 
                  href="#" 
                  className={`
                    flex items-center py-3 px-4 text-sm
                    ${item.active 
                      ? 'text-white bg-gradient-to-r from-blue-600/20 to-transparent border-l-2 border-blue-600' 
                      : 'text-slate-400 hover:text-white hover:bg-slate-700/50'}
                    transition-all duration-200
                  `}
                >
                  <span className={`mr-3 ${item.active ? 'text-blue-500' : ''}`}>
                    {item.icon}
                  </span>
                  <span>{item.label}</span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;