import React from 'react';
import RevenueOverview from '../components/dashboard/RevenueOverview';
import StatCards from '../components/dashboard/StatCards';
import GeographicRevenue from '../components/dashboard/GeographicRevenue';
import YearlyBreakup from '../components/dashboard/YearlyBreakup';
import MonthlyEarnings from '../components/dashboard/MonthlyEarnings';
import TopRegions from '../components/dashboard/TopRegions';
import ActiveUsers from '../components/dashboard/ActiveUsers';
import ProjectTimeline from '../components/dashboard/ProjectTimeline';

const Dashboard = () => {
  return (
    <div className="p-6 space-y-6">
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-4xl font-bold text-white">Dashboard</h1>
        <div className="flex space-x-2">
          <select 
            className="bg-slate-800/50 border border-slate-700 rounded-lg px-4 py-2 text-white backdrop-blur-sm"
            defaultValue="Jan 2024"
          >
            <option>Jan 2024</option>
            <option>Feb 2024</option>
            <option>Mar 2024</option>
          </select>
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-colors duration-300">
            Export
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <RevenueOverview />
        </div>
        <div className="lg:col-span-1 space-y-6">
          <YearlyBreakup />
          <MonthlyEarnings />
        </div>
      </div>

      <StatCards />

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <GeographicRevenue />
        </div>
        <div className="lg:col-span-1">
          <TopRegions />
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <ActiveUsers />
        <ProjectTimeline />
      </div>
    </div>
  );
};

export default Dashboard;