import React from 'react';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../../common/SafeIcon';

const { FiUserPlus, FiMusic, FiTrendingUp, FiDollarSign, FiStar } = FiIcons;

function CreatorSpotlight() {
  const featuredCreators = [
    {
      id: 1,
      name: 'NeuroWave',
      genre: 'Electronic',
      followers: '2.5M',
      monthlyEarnings: '$45K',
      avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=150&h=150&fit=crop&crop=face',
      verified: true,
      trending: true,
      rating: 4.9
    },
    {
      id: 2,
      name: 'CyberSonic',
      genre: 'Synthwave',
      followers: '1.8M',
      monthlyEarnings: '$32K',
      avatar: 'https://images.unsplash.com/photo-1527980965255-d3b416303d12?w=150&h=150&fit=crop&crop=face',
      verified: true,
      trending: false,
      rating: 4.7
    },
    {
      id: 3,
      name: 'ElectroVibe',
      genre: 'Techno',
      followers: '3.2M',
      monthlyEarnings: '$58K',
      avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face',
      verified: true,
      trending: true,
      rating: 4.8
    },
  ];

  return (
    <motion.div 
      className="card-3d p-6"
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl flex items-center justify-center">
            <SafeIcon icon={FiStar} className="text-white" />
          </div>
          <div>
            <h2 className="text-2xl font-bold text-white">Creator Spotlight</h2>
            <p className="text-white/60 text-sm">Top performing artists</p>
          </div>
        </div>
        <button className="btn-3d-secondary text-sm">Discover More</button>
      </div>

      <div className="space-y-4">
        {featuredCreators.map((creator, index) => (
          <motion.div
            key={creator.id}
            className="flex items-center space-x-4 p-4 rounded-xl bg-white/5 border border-white/10 hover:border-white/20 transition-all cursor-pointer group"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
            whileHover={{ scale: 1.02 }}
          >
            {/* Avatar */}
            <div className="relative">
              <div className="w-16 h-16 avatar-3d online">
                <img 
                  src={creator.avatar} 
                  alt={creator.name} 
                  className="w-full h-full object-cover rounded-full" 
                />
              </div>
              {creator.verified && (
                <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center border-2 border-gray-900">
                  <span className="text-white text-xs">✓</span>
                </div>
              )}
              {creator.trending && (
                <motion.div 
                  className="absolute -top-1 -right-1 w-6 h-6 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center"
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <SafeIcon icon={FiTrendingUp} className="text-white text-xs" />
                </motion.div>
              )}
            </div>

            {/* Creator Info */}
            <div className="flex-1 min-w-0">
              <div className="flex items-center space-x-2 mb-1">
                <h3 className="text-white font-semibold">{creator.name}</h3>
                {creator.trending && (
                  <span className="text-xs bg-gradient-to-r from-orange-500 to-red-500 text-white px-2 py-0.5 rounded-full font-bold">
                    Trending
                  </span>
                )}
              </div>
              <p className="text-white/60 text-sm mb-2">{creator.genre}</p>
              
              {/* Stats */}
              <div className="flex items-center space-x-4 text-xs">
                <span className="text-white/50 flex items-center">
                  <SafeIcon icon={FiMusic} className="mr-1" />
                  {creator.followers}
                </span>
                <span className="text-green-400 flex items-center font-semibold">
                  <SafeIcon icon={FiDollarSign} className="mr-1" />
                  {creator.monthlyEarnings}
                </span>
                <div className="flex items-center">
                  <SafeIcon icon={FiStar} className="text-yellow-400 mr-1" />
                  <span className="text-yellow-400 font-semibold">{creator.rating}</span>
                </div>
              </div>
            </div>

            {/* Actions */}
            <div className="flex flex-col space-y-2">
              <motion.button 
                className="btn-3d-primary flex items-center space-x-2 text-sm"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <SafeIcon icon={FiUserPlus} />
                <span>Follow</span>
              </motion.button>
              <motion.button 
                className="btn-3d-secondary flex items-center space-x-2 text-sm"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <SafeIcon icon={FiMusic} />
                <span>Listen</span>
              </motion.button>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Call to Action */}
      <motion.div 
        className="mt-6 p-4 bg-gradient-to-r from-purple-500/20 to-blue-500/20 rounded-xl border border-purple-500/30"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.5 }}
      >
        <h3 className="text-white font-semibold mb-2 flex items-center">
          <SafeIcon icon={FiStar} className="mr-2 text-yellow-400" />
          Become a Featured Creator
        </h3>
        <p className="text-white/70 text-sm mb-3">
          Join our exclusive creator program and unlock premium monetization features
        </p>
        <button className="btn-3d-primary w-full">
          Apply Now
        </button>
      </motion.div>
    </motion.div>
  );
}

export default CreatorSpotlight;