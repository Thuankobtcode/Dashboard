import React from 'react';

const regionData = [
  { id: 1, region: 'Japan', revenue: '$4,748,454' },
  { id: 2, region: 'United Kingdom', revenue: '$405,748' },
  { id: 3, region: 'Germany', revenue: '$320,587' },
  { id: 4, region: 'United States', revenue: '$287,954' },
  { id: 5, region: 'Australia', revenue: '$129,148' },
];

const TopRegions = () => {
  return (
    <div 
      className="bg-slate-800/50 backdrop-blur-sm rounded-xl border border-slate-700 p-5 shadow-lg transform hover:scale-[1.01] transition-all duration-300 h-full"
      style={{ 
        animation: 'fadeIn 0.6s ease-out forwards',
        animationDelay: '0.5s',
        opacity: 0,
        transform: 'translateY(10px)'
      }}
    >
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-sm uppercase text-slate-500 font-medium tracking-wider">Revenue by Top Regions</h2>
        <div className="flex space-x-2">
          <button className="px-3 py-1 text-xs font-medium rounded-full bg-slate-700 text-white hover:bg-slate-600 transition-colors">Today</button>
          <button className="px-3 py-1 text-xs font-medium rounded-full text-slate-300 hover:bg-slate-700 transition-colors">Week</button>
          <button className="px-3 py-1 text-xs font-medium rounded-full text-slate-300 hover:bg-slate-700 transition-colors">Month</button>
        </div>
      </div>
      
      <div className="mt-4">
        <div className="flex items-center justify-between border-b border-slate-700 pb-2 mb-2">
          <span className="text-sm font-medium text-slate-400">Top Region</span>
          <span className="text-sm font-medium text-slate-400">Revenue</span>
        </div>
        
        <div className="space-y-4">
          {regionData.map((region, index) => (
            <div 
              key={region.id} 
              className="flex items-center justify-between group hover:bg-slate-700/30 p-2 rounded-lg transition-all duration-200"
              style={{ 
                animation: 'fadeIn 0.4s ease-out forwards',
                animationDelay: `${0.6 + index * 0.1}s`,
                opacity: 0,
                transform: 'translateY(5px)'
              }}
            >
              <div className="flex items-center">
                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center shadow-md mr-3 group-hover:scale-110 transition-transform duration-200">
                  <span className="text-xs font-bold text-white">{index + 1}</span>
                </div>
                <span className="font-medium">{region.region}</span>
              </div>
              <span className="font-bold">{region.revenue}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TopRegions;