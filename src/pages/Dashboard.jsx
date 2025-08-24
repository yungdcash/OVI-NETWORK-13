import React from 'react';
import { motion } from 'framer-motion';
import CreatorDashboard from '../components/dashboard/CreatorDashboard';
import PersonalizedFeed from '../components/recommendations/PersonalizedFeed';
import { useAuth } from '../contexts/AuthContext';

function Dashboard({ setCurrentTrack, setIsPlaying }) {
  const { user, loading } = useAuth();

  if (loading) {
    return (
      <motion.div
        className="flex items-center justify-center min-h-screen"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-purple-500/30 border-t-purple-500 rounded-full animate-spin mx-auto mb-4"></div>
          <h2 className="text-xl font-semibold text-white mb-2">Loading Dashboard...</h2>
          <p className="text-white/60">Please wait while we fetch your data</p>
        </div>
      </motion.div>
    );
  }

  if (!user) {
    return (
      <motion.div
        className="flex items-center justify-center min-h-screen"
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
      {/* Page Header */}
      <div className="mb-4 sm:mb-6">
        <h1 className="text-2xl sm:text-3xl font-bold text-white mb-2">Dashboard</h1>
        <p className="text-white/60">Your creative command center</p>
      </div>

      {/* Creator Dashboard */}
      <CreatorDashboard />

      {/* Personalized Recommendations */}
      <PersonalizedFeed 
        setCurrentTrack={setCurrentTrack} 
        setIsPlaying={setIsPlaying} 
      />
    </motion.div>
  );
}

export default Dashboard;