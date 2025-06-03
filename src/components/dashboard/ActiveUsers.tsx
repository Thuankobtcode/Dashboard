import React, { useEffect, useRef } from 'react';
import { Users } from 'lucide-react';

const ActiveUsers = () => {
  const chartRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('chart-animate');
          }
        });
      },
      { threshold: 0.1 }
    );

    if (chartRef.current) {
      observer.observe(chartRef.current);
    }

    return () => {
      if (chartRef.current) {
        observer.unobserve(chartRef.current);
      }
    };
  }, []);

  const userData = [
    { time: '12am', active: 2400 },
    { time: '4am', active: 1398 },
    { time: '8am', active: 9800 },
    { time: '12pm', active: 3908 },
    { time: '4pm', active: 4800 },
    { time: '8pm', active: 3800 },
    { time: '11pm', active: 4300 },
  ];

  return (
    <div 
      className="bg-slate-800/50 backdrop-blur-sm rounded-xl border border-slate-700 p-6 shadow-lg transform hover:scale-[1.01] transition-all duration-300"
      style={{ 
        animation: 'fadeIn 0.6s ease-out forwards',
        animationDelay: '0.6s',
        opacity: 0,
        transform: 'translateY(10px)'
      }}
    >
      <div className="flex items-center justify-between mb-6">
        <div>
          <h2 className="text-sm uppercase text-slate-500 font-medium tracking-wider">Active Users</h2>
          <div className="mt-2 flex items-baseline">
            <p className="text-2xl font-semibold">2,847</p>
            <p className="ml-2 text-sm text-green-500">+4.25%</p>
          </div>
        </div>
        <div className="w-12 h-12 rounded-xl bg-blue-500/20 flex items-center justify-center">
          <Users className="text-blue-500" size={24} />
        </div>
      </div>

      <div ref={chartRef} className="relative h-[100px]">
        <div className="absolute inset-0 flex items-end justify-between">
          {userData.map((data, index) => (
            <div
              key={index}
              className="relative group"
              style={{ height: '100%', width: '12%' }}
            >
              <div
                className="absolute bottom-0 w-full bg-gradient-to-t from-blue-500/20 to-blue-500/5 rounded-t-sm transition-all duration-300 group-hover:from-blue-500/30 group-hover:to-blue-500/10"
                style={{
                  height: `${(data.active / 10000) * 100}%`,
                  animation: `slideInFromBottom 0.6s ease-out forwards ${index * 0.1}s`,
                  opacity: 0,
                }}
              />
              <div className="absolute bottom-0 w-full h-[2px] bg-blue-500/30 rounded-full" />
            </div>
          ))}
        </div>
      </div>

      <div className="mt-4 grid grid-cols-3 gap-4">
        <div className="p-3 rounded-lg bg-slate-700/30 backdrop-blur-sm">
          <p className="text-sm text-slate-400">Current</p>
          <p className="text-lg font-semibold mt-1">1,494</p>
        </div>
        <div className="p-3 rounded-lg bg-slate-700/30 backdrop-blur-sm">
          <p className="text-sm text-slate-400">Average</p>
          <p className="text-lg font-semibold mt-1">2,047</p>
        </div>
        <div className="p-3 rounded-lg bg-slate-700/30 backdrop-blur-sm">
          <p className="text-sm text-slate-400">Peak</p>
          <p className="text-lg font-semibold mt-1">3,985</p>
        </div>
      </div>
    </div>
  );
};

export default ActiveUsers;