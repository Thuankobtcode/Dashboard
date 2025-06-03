import React, { useEffect, useRef } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
  { name: 'Jan', value: 2400 },
  { name: 'Feb', value: 1398 },
  { name: 'Mar', value: 9800 },
  { name: 'Apr', value: 3908 },
  { name: 'May', value: 4800 },
  { name: 'Jun', value: 3800 },
  { name: 'Jul', value: 4300 },
  { name: 'Aug', value: 5300 },
  { name: 'Sep', value: 4890 },
  { name: 'Oct', value: 6800 },
  { name: 'Nov', value: 5900 },
  { name: 'Dec', value: 7200 },
];

const RevenueOverview = () => {
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

  return (
    <div 
      ref={chartRef}
      className="bg-slate-800/50 backdrop-blur-sm rounded-xl border border-slate-700 shadow-lg transform hover:scale-[1.01] transition-all duration-300 p-5 h-[400px] opacity-0 translate-y-4"
      style={{ 
        animation: 'fadeIn 0.6s ease-out forwards',
        animationDelay: '0.1s' 
      }}
    >
      <div className="flex justify-between items-center mb-6">
        <div>
          <h2 className="text-sm font-medium uppercase text-slate-500 tracking-wider">Revenue Report</h2>
          <div className="mt-1 space-y-1">
            <div className="flex items-center space-x-2">
              <h3 className="text-3xl font-bold">$26,131.00</h3>
              <span className="text-green-500 text-sm font-medium">+12% last year</span>
            </div>
            <p className="text-slate-400 text-sm">Total earnings</p>
          </div>
        </div>
      </div>
      
      <div className="mt-4 space-y-4">
        <div className="flex items-center space-x-2">
          <div className="w-3 h-3 rounded-sm bg-blue-500"></div>
          <span className="text-sm text-slate-300">Earnings this month</span>
          <span className="text-xl font-bold ml-auto">$25,153.00</span>
        </div>
        
        <div className="flex items-center space-x-2">
          <div className="w-3 h-3 rounded-sm bg-emerald-500"></div>
          <span className="text-sm text-slate-300">Expense this month</span>
          <span className="text-xl font-bold ml-auto">$978.00</span>
        </div>
      </div>
      
      <div className="h-52 mt-6 opacity-0 translate-y-4" style={{ animation: 'fadeIn 0.6s ease-out forwards 0.3s' }}>
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data} margin={{ top: 5, right: 20, left: 10, bottom: 5 }}>
            <defs>
              <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#3B82F6" stopOpacity={0.8} />
                <stop offset="95%" stopColor="#3B82F6" stopOpacity={0} />
              </linearGradient>
            </defs>
            <XAxis 
              dataKey="name" 
              axisLine={false}
              tickLine={false}
              tick={{ fill: '#94A3B8', fontSize: 12 }}
            />
            <YAxis 
              hide={true}
            />
            <CartesianGrid 
              strokeDasharray="3 3" 
              vertical={false} 
              stroke="#334155" 
            />
            <Tooltip 
              contentStyle={{ 
                backgroundColor: '#1E293B', 
                border: '1px solid #334155',
                borderRadius: '0.5rem',
                boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)'
              }}
              itemStyle={{ color: '#F8FAFC' }}
              labelStyle={{ color: '#94A3B8' }}
            />
            <Line 
              type="monotone" 
              dataKey="value" 
              stroke="#3B82F6" 
              strokeWidth={3}
              dot={{ r: 0 }}
              activeDot={{ r: 6, strokeWidth: 2, stroke: '#0F172A' }}
              fillOpacity={1}
              fill="url(#colorValue)"
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default RevenueOverview;