import React, { useEffect, useRef } from 'react';
import { CircleUserRound, ArrowUp } from 'lucide-react';

const YearlyBreakup = () => {
  const progressRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              if (progressRef.current) {
                progressRef.current.style.strokeDashoffset = "160"; // 75% filled (of 628)
              }
            }, 300);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (progressRef.current) {
      observer.observe(progressRef.current);
    }

    return () => {
      if (progressRef.current) {
        observer.unobserve(progressRef.current);
      }
    };
  }, []);

  return (
    <div 
      className="bg-slate-800/50 backdrop-blur-sm rounded-xl border border-slate-700 p-5 h-48 shadow-lg transform hover:scale-[1.01] transition-all duration-300"
      style={{ 
        animation: 'fadeIn 0.6s ease-out forwards',
        animationDelay: '0.2s',
        opacity: 0,
        transform: 'translateY(10px)'
      }}
    >
      <div className="flex justify-between items-start">
        <div>
          <h2 className="text-sm uppercase text-slate-500 font-medium tracking-wider">Yearly Breakup</h2>
          <h3 className="mt-1 text-2xl font-bold">$36,358</h3>
          <div className="flex items-center mt-1">
            <ArrowUp size={14} className="text-green-500 mr-1" />
            <span className="text-green-500 text-sm">+2.5% last year</span>
          </div>
        </div>
        <div className="relative w-24 h-24">
          <svg className="w-full h-full" viewBox="0 0 100 100">
            <circle 
              cx="50" 
              cy="50" 
              r="40" 
              stroke="#1E293B" 
              strokeWidth="8" 
              fill="none" 
            />
            <circle 
              ref={progressRef}
              cx="50" 
              cy="50" 
              r="40" 
              stroke="url(#blueGradient)" 
              strokeWidth="8" 
              fill="none" 
              strokeLinecap="round"
              strokeDasharray="251.2"
              strokeDashoffset="251.2"
              transform="rotate(-90 50 50)"
              style={{ transition: 'stroke-dashoffset 1.5s ease-in-out' }}
            />
            <defs>
              <linearGradient id="blueGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#3B82F6" />
                <stop offset="100%" stopColor="#60A5FA" />
              </linearGradient>
            </defs>
          </svg>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center">
              <div className="w-3 h-3 rounded-full bg-blue-500 mx-auto mb-1"></div>
              <span className="text-xs text-slate-400">75%</span>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-4 space-y-2">
        <div className="flex items-center">
          <div className="w-3 h-3 rounded-sm bg-blue-500 mr-2"></div>
          <span className="text-sm text-slate-300">Earnings</span>
        </div>
        <div className="flex items-center">
          <div className="w-3 h-3 rounded-sm bg-emerald-500 mr-2"></div>
          <span className="text-sm text-slate-300">Profit</span>
        </div>
      </div>
    </div>
  );
};

export default YearlyBreakup;