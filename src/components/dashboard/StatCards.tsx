import React from 'react';
import { DollarSign, Briefcase, Users, TrendingUp } from 'lucide-react';

const stats = [
  {
    id: 1,
    title: 'Open invoices',
    value: '$35,548',
    icon: <DollarSign size={24} className="text-white" />,
    iconBg: 'bg-emerald-500',
    change: '-$1,450',
    changeType: 'negative',
    period: 'since last month'
  },
  {
    id: 2,
    title: 'Ongoing project',
    value: '15',
    icon: <Briefcase size={24} className="text-white" />,
    iconBg: 'bg-blue-500',
    change: '+23.6%',
    changeType: 'positive',
    period: 'since last month'
  },
  {
    id: 3,
    title: 'Employees',
    value: '25',
    icon: <Users size={24} className="text-white" />,
    iconBg: 'bg-indigo-500',
    change: '+2.5%',
    changeType: 'positive',
    period: 'since last month'
  },
  {
    id: 4,
    title: 'New profit',
    value: '27%',
    icon: <TrendingUp size={24} className="text-white" />,
    iconBg: 'bg-amber-500',
    change: '+4%',
    changeType: 'positive',
    period: 'since last month'
  }
];

const StatCards = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {stats.map((stat, index) => (
        <div 
          key={stat.id} 
          className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-5 hover:shadow-lg transform hover:translate-y-[-4px] transition-all duration-300 overflow-hidden relative"
          style={{ 
            animation: 'fadeIn 0.5s ease-out forwards',
            animationDelay: `${0.1 + index * 0.1}s`,
            opacity: 0,
            transform: 'translateY(10px)'
          }}
        >
          <div className="flex justify-between">
            <div>
              <p className="text-slate-400 text-sm">{stat.title}</p>
              <h3 className="text-2xl font-bold mt-1">{stat.value}</h3>
              <p className="mt-2 text-sm">
                <span className={stat.changeType === 'positive' ? 'text-green-500' : 'text-red-500'}>
                  {stat.change}
                </span>
                <span className="text-slate-500 ml-1">{stat.period}</span>
              </p>
            </div>
            <div>
              <div className={`${stat.iconBg} w-12 h-12 rounded-lg flex items-center justify-center shadow-lg transform hover:rotate-[15deg] transition-transform duration-300`}>
                {stat.icon}
              </div>
            </div>
          </div>
          
          {/* 3D decoration element */}
          <div className="absolute -bottom-10 -right-10 w-32 h-32 rounded-full bg-gradient-to-r from-slate-700/20 to-transparent blur-2xl"></div>
        </div>
      ))}
    </div>
  );
};

export default StatCards;