import React, { useEffect, useRef } from 'react';

const GeographicRevenue = () => {
  const mapRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('map-animate');
          }
        });
      },
      { threshold: 0.1 }
    );

    if (mapRef.current) {
      observer.observe(mapRef.current);
    }

    return () => {
      if (mapRef.current) {
        observer.unobserve(mapRef.current);
      }
    };
  }, []);

  return (
    <div 
      className="bg-slate-800/50 backdrop-blur-sm rounded-xl border border-slate-700 p-5 shadow-lg transform hover:scale-[1.01] transition-all duration-300"
      style={{ 
        animation: 'fadeIn 0.6s ease-out forwards',
        animationDelay: '0.4s',
        opacity: 0,
        transform: 'translateY(10px)'
      }}
    >
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-sm uppercase text-slate-500 font-medium tracking-wider">Revenue by Location</h2>
      </div>
      
      <div 
        ref={mapRef} 
        className="relative h-[300px] overflow-hidden opacity-0"
        style={{ 
          animation: 'fadeIn 0.8s ease-out forwards 0.6s',
        }}
      >
        {/* World map SVG would go here - simplified representation */}
        <div className="absolute inset-0 bg-slate-900/20 backdrop-blur-sm rounded-lg overflow-hidden flex items-center justify-center">
          <div className="w-[85%] h-[80%] bg-blue-500/10 rounded-lg relative overflow-hidden">
            <div className="absolute top-[20%] left-[15%] w-10 h-10 bg-blue-500/30 rounded-full animate-pulse"></div>
            <div className="absolute top-[30%] left-[45%] w-8 h-8 bg-blue-500/30 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }}></div>
            <div className="absolute top-[25%] left-[75%] w-12 h-12 bg-blue-500/30 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
            <div className="absolute top-[55%] left-[60%] w-6 h-6 bg-blue-500/30 rounded-full animate-pulse" style={{ animationDelay: '1.5s' }}></div>
            <div className="absolute top-[70%] left-[30%] w-9 h-9 bg-blue-500/30 rounded-full animate-pulse" style={{ animationDelay: '2s' }}></div>
            
            {/* Map continent outlines - simplified */}
            <div className="absolute top-[10%] left-[10%] w-[25%] h-[30%] bg-blue-500/20 rounded-lg transform rotate-12"></div>
            <div className="absolute top-[15%] left-[40%] w-[15%] h-[25%] bg-blue-500/20 rounded-lg"></div>
            <div className="absolute top-[20%] left-[60%] w-[25%] h-[20%] bg-blue-500/20 rounded-lg transform -rotate-6"></div>
            <div className="absolute top-[50%] left-[15%] w-[20%] h-[35%] bg-blue-500/20 rounded-lg transform rotate-12"></div>
            <div className="absolute top-[55%] left-[45%] w-[30%] h-[25%] bg-blue-500/20 rounded-lg"></div>
            
            {/* 3D effect overlays */}
            <div className="absolute inset-0 bg-gradient-to-tr from-slate-900/40 to-transparent"></div>
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.1),transparent_70%)]"></div>
            
            {/* Connecting lines */}
            <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
              <path d="M150,100 C200,80 250,150 300,120" stroke="#3B82F6" strokeWidth="1" strokeDasharray="5,5" fill="none" opacity="0.5">
                <animate attributeName="stroke-dashoffset" from="100" to="0" dur="3s" repeatCount="indefinite" />
              </path>
              <path d="M300,120 C350,100 400,150 450,130" stroke="#3B82F6" strokeWidth="1" strokeDasharray="5,5" fill="none" opacity="0.5">
                <animate attributeName="stroke-dashoffset" from="100" to="0" dur="3s" repeatCount="indefinite" />
              </path>
              <path d="M150,200 C200,180 250,250 350,200" stroke="#3B82F6" strokeWidth="1" strokeDasharray="5,5" fill="none" opacity="0.5">
                <animate attributeName="stroke-dashoffset" from="100" to="0" dur="3s" repeatCount="indefinite" />
              </path>
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GeographicRevenue;