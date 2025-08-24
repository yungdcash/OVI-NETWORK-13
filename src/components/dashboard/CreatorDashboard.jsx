import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../../common/SafeIcon';
import { useAuth } from '../../contexts/AuthContext';

const { FiTrendingUp, FiDollarSign, FiMusic, FiUsers, FiEye, FiHeart, FiPlay, FiUpload, FiSettings, FiBarChart } = FiIcons;

function CreatorDashboard() {
  const { user, profile } = useAuth();
  const [loading, setLoading] = useState(false);
  const [timeRange, setTimeRange] = useState('30d');

  // Mock dashboard data - replace with real data from your service
  const dashboardData = {
    profile: profile || {
      display_name: user?.name || 'Creator',
      tracks_count: 0,
      followers_count: 0,
      following_count: 0,
      verified: false
    },
    stats: {
      total_earnings: 0,
      monthly_earnings: 0,
      earnings_by_source: {
        streaming: 0,
        nft: 0,
        live_stream: 0
      },
      activity_by_type: {
        play: 0,
        like: 0,
        share: 0
      }
    }
  };

  const dashboardStats = [
    {
      icon: FiDollarSign,
      label: 'Total Earnings',
      value: `$${dashboardData.stats.total_earnings?.toFixed(2) || '0.00'}`,
      change: '+12.5%',
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: FiMusic,
      label: 'Total Tracks',
      value: dashboardData.profile.tracks_count || 0,
      change: '+3 this month',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: FiUsers,
      label: 'Followers',
      value: dashboardData.profile.followers_count?.toLocaleString() || '0',
      change: '+8.2%',
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: FiTrendingUp,
      label: 'Monthly Revenue',
      value: `$${dashboardData.stats.monthly_earnings?.toFixed(2) || '0.00'}`,
      change: '+15.7%',
      color: 'from-orange-500 to-red-500'
    }
  ];

  if (!user) {
    return (
      <motion.div
        className="flex items-center justify-center min-h-[400px]"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        <div className="text-center">
          <h2 className="text-2xl font-bold text-white mb-4">Access Denied</h2>
          <p className="text-white/60">Please sign in to view your dashboard</p>
        </div>
      </motion.div>
    );
  }

  return (
    <motion.div
      className="space-y-6 sm:space-y-8"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between space-y-4 sm:space-y-0">
        <div>
          <h1 className="text-2xl sm:text-3xl font-bold text-white mb-2">Creator Dashboard</h1>
          <p className="text-white/60">Welcome back, {dashboardData.profile.display_name}!</p>
        </div>
        
        {/* Time Range Selector */}
        <div className="flex bg-white/5 rounded-xl border border-white/10 p-1">
          {[
            { key: '7d', label: '7D' },
            { key: '30d', label: '30D' },
            { key: '90d', label: '90D' },
            { key: '1y', label: '1Y' }
          ].map((range) => (
            <button
              key={range.key}
              className={`px-3 py-2 text-sm transition-all rounded-lg ${
                timeRange === range.key
                  ? 'bg-gradient-to-r from-purple-500 to-blue-500 text-white'
                  : 'text-white/60 hover:text-white'
              }`}
              onClick={() => setTimeRange(range.key)}
            >
              {range.label}
            </button>
          ))}
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
        {dashboardStats.map((stat, index) => (
          <motion.div
            key={index}
            className="card-3d p-4 sm:p-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
            whileHover={{ scale: 1.05, y: -5 }}
          >
            <div className={`w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r ${stat.color} rounded-xl flex items-center justify-center mb-3 sm:mb-4`}>
              <SafeIcon icon={stat.icon} className="text-white text-lg sm:text-xl" />
            </div>
            <div className="text-xl sm:text-2xl font-bold text-white mb-2">{stat.value}</div>
            <div className="text-white/60 text-sm mb-2">{stat.label}</div>
            <div className="text-green-400 text-sm font-semibold flex items-center">
              <SafeIcon icon={FiTrendingUp} className="mr-1" />
              {stat.change}
            </div>
          </motion.div>
        ))}
      </div>

      {/* Revenue Breakdown */}
      <motion.div
        className="card-3d p-4 sm:p-6"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.6 }}
      >
        <h2 className="text-lg sm:text-xl font-bold text-white mb-4 sm:mb-6">Revenue Sources</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {Object.entries(dashboardData.stats.earnings_by_source || {}).map(([source, amount], index) => (
            <motion.div
              key={source}
              className="bg-white/5 rounded-xl p-4"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.6 + index * 0.1, duration: 0.5 }}
            >
              <div className="text-white/60 text-sm mb-1 capitalize">
                {source.replace('_', ' ')}
              </div>
              <div className="text-lg sm:text-xl font-bold text-white">
                ${parseFloat(amount || 0).toFixed(2)}
              </div>
              <div className="w-full bg-white/10 rounded-full h-2 mt-2">
                <div 
                  className="bg-gradient-to-r from-green-500 to-emerald-500 h-2 rounded-full"
                  style={{ width: `${dashboardData.stats.total_earnings > 0 ? (amount / dashboardData.stats.total_earnings) * 100 : 0}%` }}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Activity Overview */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
        {/* Recent Activity */}
        <motion.div
          className="card-3d p-4 sm:p-6"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.7, duration: 0.6 }}
        >
          <h3 className="text-lg font-bold text-white mb-4">Activity Summary</h3>
          <div className="space-y-4">
            {Object.entries(dashboardData.stats.activity_by_type || {}).map(([type, count], index) => (
              <div key={type} className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-purple-500/20 rounded-lg flex items-center justify-center">
                    <SafeIcon 
                      icon={type === 'play' ? FiPlay : type === 'like' ? FiHeart : FiEye} 
                      className="text-purple-400 text-sm" 
                    />
                  </div>
                  <span className="text-white capitalize">{type}s</span>
                </div>
                <span className="text-white font-semibold">{count || 0}</span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Quick Actions */}
        <motion.div
          className="card-3d p-4 sm:p-6"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
        >
          <h3 className="text-lg font-bold text-white mb-4">Quick Actions</h3>
          <div className="space-y-3">
            <motion.button
              className="w-full btn-3d-primary flex items-center justify-center space-x-2"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => window.location.hash = '/studio'}
            >
              <SafeIcon icon={FiUpload} />
              <span>Upload New Track</span>
            </motion.button>
            <motion.button
              className="w-full btn-3d-secondary flex items-center justify-center space-x-2"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => window.location.hash = '/social'}
            >
              <SafeIcon icon={FiUsers} />
              <span>Manage Fans</span>
            </motion.button>
            <motion.button
              className="w-full btn-3d-secondary flex items-center justify-center space-x-2"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => window.location.hash = '/monetization'}
            >
              <SafeIcon icon={FiDollarSign} />
              <span>Withdraw Earnings</span>
            </motion.button>
            <motion.button
              className="w-full btn-3d-secondary flex items-center justify-center space-x-2"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => window.location.hash = '/analytics'}
            >
              <SafeIcon icon={FiBarChart} />
              <span>View Analytics</span>
            </motion.button>
          </div>
        </motion.div>
      </div>

      {/* Getting Started Section for New Users */}
      {dashboardData.profile.tracks_count === 0 && (
        <motion.div
          className="card-3d p-6 text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.6 }}
        >
          <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-blue-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
            <SafeIcon icon={FiMusic} className="text-white text-2xl" />
          </div>
          <h3 className="text-xl font-bold text-white mb-2">Welcome to Ovi Network!</h3>
          <p className="text-white/70 mb-6 max-w-md mx-auto">
            Get started by uploading your first track and connecting with the community of creators.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <motion.button
              className="btn-3d-primary flex items-center justify-center space-x-2"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => window.location.hash = '/studio'}
            >
              <SafeIcon icon={FiUpload} />
              <span>Upload Your First Track</span>
            </motion.button>
            <motion.button
              className="btn-3d-secondary flex items-center justify-center space-x-2"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => window.location.hash = '/discover'}
            >
              <SafeIcon icon={FiMusic} />
              <span>Explore Music</span>
            </motion.button>
          </div>
        </motion.div>
      )}
    </motion.div>
  );
}

export default CreatorDashboard;