import React, { useState } from 'react';
import { Download, Calendar, Filter, TrendingUp, Users, DollarSign } from 'lucide-react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line } from 'recharts';

const Reports: React.FC = () => {
  const [selectedPeriod, setSelectedPeriod] = useState('30d');
  const [selectedReport, setSelectedReport] = useState('overview');

  // Mock data for different report types
  const overviewData = [
    { name: 'Week 1', users: 450, revenue: 12000, orders: 89 },
    { name: 'Week 2', users: 520, revenue: 15000, orders: 102 },
    { name: 'Week 3', users: 480, revenue: 13500, orders: 95 },
    { name: 'Week 4', users: 610, revenue: 18000, orders: 120 },
  ];

  const userGrowthData = [
    { month: 'Jan', newUsers: 120, totalUsers: 1200 },
    { month: 'Feb', newUsers: 180, totalUsers: 1380 },
    { month: 'Mar', newUsers: 150, totalUsers: 1530 },
    { month: 'Apr', newUsers: 220, totalUsers: 1750 },
    { month: 'May', newUsers: 200, totalUsers: 1950 },
    { month: 'Jun', newUsers: 240, totalUsers: 2190 },
  ];

  const revenueData = [
    { month: 'Jan', revenue: 45000, target: 50000 },
    { month: 'Feb', revenue: 52000, target: 55000 },
    { month: 'Mar', revenue: 48000, target: 52000 },
    { month: 'Apr', revenue: 61000, target: 58000 },
    { month: 'May', revenue: 68000, target: 65000 },
    { month: 'Jun', revenue: 75000, target: 70000 },
  ];

  const handleExport = (format: string) => {
    alert(`Exporting report as ${format}...`);
  };

  const reportTypes = [
    { id: 'overview', name: 'Overview', icon: TrendingUp },
    { id: 'users', name: 'User Analytics', icon: Users },
    { id: 'revenue', name: 'Revenue Report', icon: DollarSign },
  ];

  const renderChart = () => {
    switch (selectedReport) {
      case 'users':
        return (
          <ResponsiveContainer width="100%" height={400}>
            <LineChart data={userGrowthData}>
              <CartesianGrid strokeDasharray="3 3" className="opacity-30" />
              <XAxis dataKey="month" className="text-gray-600 dark:text-gray-400" />
              <YAxis className="text-gray-600 dark:text-gray-400" />
              <Tooltip 
                contentStyle={{
                  backgroundColor: 'rgba(255, 255, 255, 0.95)',
                  border: '1px solid #e5e7eb',
                  borderRadius: '8px'
                }}
              />
              <Line type="monotone" dataKey="newUsers" stroke="#3b82f6" strokeWidth={3} name="New Users" />
              <Line type="monotone" dataKey="totalUsers" stroke="#06b6d4" strokeWidth={3} name="Total Users" />
            </LineChart>
          </ResponsiveContainer>
        );
      case 'revenue':
        return (
          <ResponsiveContainer width="100%" height={400}>
            <BarChart data={revenueData}>
              <CartesianGrid strokeDasharray="3 3" className="opacity-30" />
              <XAxis dataKey="month" className="text-gray-600 dark:text-gray-400" />
              <YAxis className="text-gray-600 dark:text-gray-400" />
              <Tooltip 
                contentStyle={{
                  backgroundColor: 'rgba(255, 255, 255, 0.95)',
                  border: '1px solid #e5e7eb',
                  borderRadius: '8px'
                }}
              />
              <Bar dataKey="revenue" fill="#3b82f6" radius={[4, 4, 0, 0]} name="Actual Revenue" />
              <Bar dataKey="target" fill="#e5e7eb" radius={[4, 4, 0, 0]} name="Target Revenue" />
            </BarChart>
          </ResponsiveContainer>
        );
      default:
        return (
          <ResponsiveContainer width="100%" height={400}>
            <BarChart data={overviewData}>
              <CartesianGrid strokeDasharray="3 3" className="opacity-30" />
              <XAxis dataKey="name" className="text-gray-600 dark:text-gray-400" />
              <YAxis className="text-gray-600 dark:text-gray-400" />
              <Tooltip 
                contentStyle={{
                  backgroundColor: 'rgba(255, 255, 255, 0.95)',
                  border: '1px solid #e5e7eb',
                  borderRadius: '8px'
                }}
              />
              <Bar dataKey="users" fill="#3b82f6" radius={[4, 4, 0, 0]} name="Users" />
              <Bar dataKey="orders" fill="#06b6d4" radius={[4, 4, 0, 0]} name="Orders" />
            </BarChart>
          </ResponsiveContainer>
        );
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-start">
        <div>
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Reports</h1>
          <p className="text-gray-600 dark:text-gray-400">Analytics and insights for your business</p>
        </div>
        
        <div className="flex space-x-3">
          <button
            onClick={() => handleExport('PDF')}
            className="btn-secondary flex items-center space-x-2"
          >
            <Download className="w-4 h-4" />
            <span>Export PDF</span>
          </button>
          <button
            onClick={() => handleExport('CSV')}
            className="btn-primary flex items-center space-x-2"
          >
            <Download className="w-4 h-4" />
            <span>Export CSV</span>
          </button>
        </div>
      </div>

      {/* Filters */}
      <div className="card p-4">
        <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
          <div className="flex flex-wrap gap-4">
            {reportTypes.map((type) => {
              const Icon = type.icon;
              return (
                <button
                  key={type.id}
                  onClick={() => setSelectedReport(type.id)}
                  className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-colors duration-200 ${
                    selectedReport === type.id
                      ? 'bg-blue-100 text-blue-600 dark:bg-blue-900/20 dark:text-blue-400'
                      : 'text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700'
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  <span className="text-sm font-medium">{type.name}</span>
                </button>
              );
            })}
          </div>
          
          <div className="flex items-center space-x-3">
            <Calendar className="w-5 h-5 text-gray-400" />
            <select
              value={selectedPeriod}
              onChange={(e) => setSelectedPeriod(e.target.value)}
              className="px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="7d">Last 7 days</option>
              <option value="30d">Last 30 days</option>
              <option value="90d">Last 90 days</option>
              <option value="1y">Last year</option>
            </select>
          </div>
        </div>
      </div>

      {/* Key Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="card p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600 dark:text-gray-400">Total Revenue</p>
              <p className="text-2xl font-bold text-gray-900 dark:text-white">$58,500</p>
              <p className="text-sm text-green-600 dark:text-green-400 mt-1">+12.5% vs last period</p>
            </div>
            <div className="p-3 rounded-lg bg-green-50 dark:bg-green-900/20">
              <DollarSign className="w-6 h-6 text-green-600 dark:text-green-400" />
            </div>
          </div>
        </div>

        <div className="card p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600 dark:text-gray-400">Active Users</p>
              <p className="text-2xl font-bold text-gray-900 dark:text-white">2,190</p>
              <p className="text-sm text-blue-600 dark:text-blue-400 mt-1">+8.2% vs last period</p>
            </div>
            <div className="p-3 rounded-lg bg-blue-50 dark:bg-blue-900/20">
              <Users className="w-6 h-6 text-blue-600 dark:text-blue-400" />
            </div>
          </div>
        </div>

        <div className="card p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600 dark:text-gray-400">Growth Rate</p>
              <p className="text-2xl font-bold text-gray-900 dark:text-white">15.8%</p>
              <p className="text-sm text-purple-600 dark:text-purple-400 mt-1">+2.1% vs last period</p>
            </div>
            <div className="p-3 rounded-lg bg-purple-50 dark:bg-purple-900/20">
              <TrendingUp className="w-6 h-6 text-purple-600 dark:text-purple-400" />
            </div>
          </div>
        </div>
      </div>

      {/* Main Chart */}
      <div className="card p-6">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
            {reportTypes.find(type => type.id === selectedReport)?.name} - {selectedPeriod}
          </h3>
          <Filter className="w-5 h-5 text-gray-400" />
        </div>
        {renderChart()}
      </div>

      {/* Additional Insights */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="card p-6">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Top Performing Regions</h3>
          <div className="space-y-4">
            {[
              { region: 'North America', percentage: 45, color: 'bg-blue-500' },
              { region: 'Europe', percentage: 30, color: 'bg-green-500' },
              { region: 'Asia Pacific', percentage: 15, color: 'bg-yellow-500' },
              { region: 'Others', percentage: 10, color: 'bg-gray-400' }
            ].map((item, index) => (
              <div key={index} className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className={`w-3 h-3 rounded-full ${item.color}`} />
                  <span className="text-sm text-gray-600 dark:text-gray-400">{item.region}</span>
                </div>
                <span className="text-sm font-medium text-gray-900 dark:text-white">{item.percentage}%</span>
              </div>
            ))}
          </div>
        </div>

        <div className="card p-6">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Recent Milestones</h3>
          <div className="space-y-4">
            {[
              { milestone: 'Reached 2,000 active users', date: '2 days ago', type: 'success' },
              { milestone: 'Monthly revenue target achieved', date: '1 week ago', type: 'success' },
              { milestone: 'New feature launch', date: '2 weeks ago', type: 'info' },
              { milestone: 'Partnership announcement', date: '3 weeks ago', type: 'info' }
            ].map((item, index) => (
              <div key={index} className="flex items-start space-x-3">
                <div className={`w-2 h-2 rounded-full mt-2 ${
                  item.type === 'success' ? 'bg-green-500' : 'bg-blue-500'
                }`} />
                <div>
                  <p className="text-sm font-medium text-gray-900 dark:text-white">{item.milestone}</p>
                  <p className="text-xs text-gray-500 dark:text-gray-400">{item.date}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reports; 