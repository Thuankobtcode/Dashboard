import React from 'react';
import { Calendar, CheckCircle, Clock } from 'lucide-react';

const projects = [
  {
    id: 1,
    name: 'Website Redesign',
    status: 'completed',
    date: 'Mar 8',
    progress: 100,
  },
  {
    id: 2,
    name: 'Mobile App Development',
    status: 'in-progress',
    date: 'Mar 12',
    progress: 75,
  },
  {
    id: 3,
    name: 'Database Migration',
    status: 'in-progress',
    date: 'Mar 15',
    progress: 45,
  },
  {
    id: 4,
    name: 'API Integration',
    status: 'in-progress',
    date: 'Mar 18',
    progress: 30,
  },
];

const ProjectTimeline = () => {
  return (
    <div 
      className="bg-slate-800/50 backdrop-blur-sm rounded-xl border border-slate-700 p-6 shadow-lg transform hover:scale-[1.01] transition-all duration-300"
      style={{ 
        animation: 'fadeIn 0.6s ease-out forwards',
        animationDelay: '0.7s',
        opacity: 0,
        transform: 'translateY(10px)'
      }}
    >
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-sm uppercase text-slate-500 font-medium tracking-wider">Project Timeline</h2>
        <div className="flex space-x-2">
          <button className="px-3 py-1 text-xs font-medium rounded-full bg-slate-700/50 text-white hover:bg-slate-600/50 transition-colors">
            View All
          </button>
        </div>
      </div>

      <div className="space-y-6">
        {projects.map((project) => (
          <div
            key={project.id}
            className="relative flex items-center"
            style={{
              animation: 'fadeIn 0.5s ease-out forwards',
              animationDelay: `${0.8 + project.id * 0.1}s`,
              opacity: 0,
            }}
          >
            <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-slate-700/30 flex items-center justify-center mr-4">
              {project.status === 'completed' ? (
                <CheckCircle className="text-green-500\" size={24} />
              ) : (
                <Clock className="text-blue-500" size={24} />
              )}
            </div>

            <div className="flex-grow">
              <div className="flex items-center justify-between mb-2">
                <h3 className="font-medium">{project.name}</h3>
                <div className="flex items-center">
                  <Calendar size={14} className="text-slate-400 mr-1" />
                  <span className="text-sm text-slate-400">{project.date}</span>
                </div>
              </div>

              <div className="relative h-2 bg-slate-700/30 rounded-full overflow-hidden">
                <div
                  className="absolute left-0 top-0 h-full rounded-full bg-gradient-to-r from-blue-500 to-blue-400 transition-all duration-1000"
                  style={{ width: `${project.progress}%` }}
                />
              </div>

              <div className="flex items-center justify-between mt-2">
                <span className="text-sm text-slate-400">Progress</span>
                <span className="text-sm font-medium">{project.progress}%</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectTimeline;