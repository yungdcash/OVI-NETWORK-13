import React from 'react';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../../common/SafeIcon';

const { FiPlay, FiUsers, FiHeart, FiGift } = FiIcons;

function LiveStreams() {
  const liveStreams = [
    {
      id: 1,
      title: 'Beat Making Session - Lo-Fi Hip Hop',
      streamer: 'BeatMaster Pro',
      viewers: '12.5K',
      thumbnail: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=400&h=300&fit=crop',
      genre: 'Hip Hop',
      earnings: '$2,340',
      isLive: true,
    },
    {
      id: 2,
      title: 'Live DJ Set - Electronic Vibes',
      streamer: 'DJ Neon',
      viewers: '8.2K',
      thumbnail: 'https://images.unsplash.com/photo-1571974599782-87624638275c?w=400&h=300&fit=crop',
      genre: 'Electronic',
      earnings: '$1,890',
      isLive: true,
    },
    {
      id: 3,
      title: 'Guitar Recording Session',
      streamer: 'Acoustic Soul',
      viewers: '5.7K',
      thumbnail: 'https://images.unsplash.com/photo-1511379938547-c1f69419868d?w=400&h=300&fit=crop',
      genre: 'Acoustic',
      earnings: '$1,245',
      isLive: true,
    },
  ];

  return (
    <motion.div
      className="bg-black/30 backdrop-blur-xl rounded-xl p-6 border border-white/10"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="flex items-center justify-between mb-6">
        <div>
          <h2 className="text-2xl font-bold text-white">Live Streams</h2>
          <p className="text-gray-400">Watch creators make music in real-time</p>
        </div>
        <button className="bg-gradient-to-r from-red-500 to-pink-500 px-6 py-2 rounded-lg text-white font-medium hover:opacity-90 transition-opacity">
          Go Live
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {liveStreams.map((stream, index) => (
          <motion.div
            key={stream.id}
            className="relative group cursor-pointer"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
            whileHover={{ scale: 1.05 }}
          >
            {/* Thumbnail */}
            <div className="relative overflow-hidden rounded-lg">
              <img 
                src={stream.thumbnail} 
                alt={stream.title}
                className="w-full h-48 object-cover transition-transform group-hover:scale-110"
              />
              
              {/* Live Badge */}
              <div className="absolute top-3 left-3 bg-red-500 text-white px-2 py-1 rounded-full text-xs font-bold flex items-center animate-pulse">
                <div className="w-2 h-2 bg-white rounded-full mr-1"></div>
                LIVE
              </div>

              {/* Viewer Count */}
              <div className="absolute top-3 right-3 bg-black/50 backdrop-blur-sm text-white px-2 py-1 rounded-full text-xs flex items-center">
                <SafeIcon icon={FiUsers} className="mr-1" />
                {stream.viewers}
              </div>

              {/* Play Overlay */}
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <motion.button
                  className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center border border-white/30"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <SafeIcon icon={FiPlay} className="text-white text-2xl ml-1" />
                </motion.button>
              </div>

              {/* Earnings Overlay */}
              <div className="absolute bottom-3 right-3 bg-green-500/80 backdrop-blur-sm text-white px-2 py-1 rounded-full text-xs font-semibold">
                {stream.earnings} earned
              </div>
            </div>

            {/* Stream Info */}
            <div className="mt-4">
              <h3 className="text-white font-semibold mb-1 line-clamp-2">{stream.title}</h3>
              <p className="text-gray-400 text-sm mb-2">{stream.streamer}</p>
              
              <div className="flex items-center justify-between">
                <span className="text-xs bg-purple-600/20 text-purple-300 px-2 py-1 rounded-full">
                  {stream.genre}
                </span>
                
                <div className="flex items-center space-x-2">
                  <motion.button
                    className="p-1 text-gray-400 hover:text-red-400 transition-colors"
                    whileHover={{ scale: 1.2 }}
                    whileTap={{ scale: 0.8 }}
                  >
                    <SafeIcon icon={FiHeart} className="text-sm" />
                  </motion.button>
                  <motion.button
                    className="p-1 text-gray-400 hover:text-yellow-400 transition-colors"
                    whileHover={{ scale: 1.2 }}
                    whileTap={{ scale: 0.8 }}
                  >
                    <SafeIcon icon={FiGift} className="text-sm" />
                  </motion.button>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Stream Stats */}
      <motion.div
        className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.5 }}
      >
        {[
          { label: 'Live Streams', value: '1,247', color: 'text-red-400' },
          { label: 'Total Viewers', value: '89.3K', color: 'text-blue-400' },
          { label: 'Stream Revenue', value: '$45.2K', color: 'text-green-400' },
          { label: 'Active Creators', value: '2,891', color: 'text-purple-400' },
        ].map((stat, index) => (
          <div key={index} className="text-center">
            <div className={`text-2xl font-bold ${stat.color}`}>{stat.value}</div>
            <div className="text-gray-400 text-sm">{stat.label}</div>
          </div>
        ))}
      </motion.div>
    </motion.div>
  );
}

export default LiveStreams;