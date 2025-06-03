import React, { useEffect, useRef } from 'react';
import { ArrowUp } from 'lucide-react';

const MonthlyEarnings = () => {
  const chartRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            if (chartRef.current) {
              const bars = chartRef.current.querySelectorAll('.chart-bar');
              bars.forEach((bar, index) => {
                setTimeout(() => {
                  (bar as HTMLElement).style.height = bar.getAttribute('data-height') || '0%';
                  (bar as HTMLElement).style.opacity = '1';
                }, 100 * index);
              });
            }
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

  const chartData = [
    { height: '25%' },
    { height: '45%' },
    { height: '35%' },
    { height: '70%' },
    { height: '55%' },
    { height: '65%' },
    { height: '85%' },
  ];

  return (
    <div 
      className="bg-slate-800/50 backdrop-blur-sm rounded-xl border border-slate-700 p-5 h-48 shadow-lg transform hover:scale-[1.01] transition-all duration-300"
      style={{ 
        animation: 'fadeIn 0.6s ease-out forwards',
        animationDelay: '0.3s',
        opacity: 0,
        transform: 'translateY(10px)'
      }}
    >
      <div className="flex items-start justify-between mb-4">
        <div>
          <h2 className="text-sm uppercase text-slate-500 font-medium tracking-wider">Monthly Earnings</h2>
          <h3 className="mt-1 text-2xl font-bold">$6,820</h3>
          <div className="flex items-center mt-1">
            <ArrowUp size={14} className="text-green-500 mr-1" />
            <span className="text-green-500 text-sm">+25.36% last month</span>
          </div>
        </div>
        <div className="w-8 h-8 bg-slate-700/50 rounded-full flex items-center justify-center">
          <span className="text-white font-medium">$</span>
        </div>
      </div>
      
      <div ref={chartRef} className="flex items-end justify-between h-16 mt-4 space-x-1">
        {chartData.map((bar, index) => (
          <div 
            key={index}
            className="chart-bar w-full bg-blue-500/20 rounded-t-sm transition-all duration-700 ease-out opacity-0 h-0"
            data-height={bar.height}
            style={{ 
              transitionDelay: `${index * 0.1}s`,
              boxShadow: '0 3px 10px rgba(59, 130, 246, 0.3)'
            }}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default MonthlyEarnings;