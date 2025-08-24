import React from 'react';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../../common/SafeIcon';
import { useTracks } from '../../hooks/useSupabase';
import TrackPlayer from '../music/TrackPlayer';

const { FiTrendingUp } = FiIcons;

function TrendingTracks({ setCurrentTrack, setIsPlaying }) {
  const { tracks, loading } = useTracks(6);

  const handlePlayTrack = (track) => {
    setCurrentTrack(track);
    setIsPlaying(true);
  };

  if (loading) {
    return (
      <motion.div 
        className="card-3d p-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        <div className="flex items-center justify-center h-64">
          <div className="text-white/60">Loading trending tracks...</div>
        </div>
      </motion.div>
    );
  }

  return (
    <motion.div 
      className="card-3d p-6"
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 bg-gradient-to-r from-orange-500 to-red-500 rounded-xl flex items-center justify-center">
            <SafeIcon icon={FiTrendingUp} className="text-white" />
          </div>
          <div>
            <h2 className="text-2xl font-bold text-white">Trending Now</h2>
            <p className="text-white/60 text-sm">Most popular tracks today</p>
          </div>
        </div>
        <button className="btn-3d-secondary text-sm">View All</button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {tracks.map((track, index) => (
          <motion.div
            key={track.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
          >
            <TrackPlayer
              track={track}
              onPlay={handlePlayTrack}
              isPlaying={false}
            />
          </motion.div>
        ))}
      </div>

      {tracks.length === 0 && (
        <div className="text-center py-8">
          <div className="text-white/60 mb-4">No trending tracks found</div>
          <button className="btn-3d-primary">
            Upload Your First Track
          </button>
        </div>
      )}
    </motion.div>
  );
}

export default TrendingTracks;