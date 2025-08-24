import React, { useState, useEffect, useMemo } from 'react';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../../common/SafeIcon';
import OptimizedCard from '../common/OptimizedCard';
import VirtualList from '../common/VirtualList';
import { useTracks } from '../../hooks/useSupabase';
import { useOptimizedAnimation } from '../../hooks/usePerformance';

const { FiTrendingUp } = FiIcons;

function OptimizedTrendingTracks({ setCurrentTrack, setIsPlaying }) {
  const [displayMode, setDisplayMode] = useState('grid'); // 'grid' or 'virtual'
  const { tracks, loading } = useTracks(12);
  const shouldAnimate = useOptimizedAnimation();

  const handlePlayTrack = React.useCallback((track) => {
    setCurrentTrack(track);
    setIsPlaying(true);
  }, [setCurrentTrack, setIsPlaying]);

  const renderTrackItem = React.useCallback((track, index) => (
    <OptimizedCard
      item={track}
      onClick={handlePlayTrack}
      showAnimation={shouldAnimate && index < 6} // Only animate first 6 items
      priority={index < 3} // Prioritize first 3 items
    />
  ), [handlePlayTrack, shouldAnimate]);

  // Ultra-fast memoized tracks
  const memoizedTracks = useMemo(() => tracks, [tracks]);

  // Ultra-fast loading skeleton
  const LoadingSkeleton = React.useMemo(() => (
    <motion.div 
      className="card-3d p-6" 
      initial={shouldAnimate ? { opacity: 0 } : undefined}
      animate={{ opacity: 1 }}
      transition={{ duration: shouldAnimate ? 0.1 : 0 }}
    >
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {Array.from({ length: 8 }).map((_, index) => (
          <div key={index} className="bg-white/5 rounded-xl h-64 animate-pulse-ultra" />
        ))}
      </div>
    </motion.div>
  ), [shouldAnimate]);

  if (loading) {
    return LoadingSkeleton;
  }

  return (
    <motion.div 
      className="card-3d p-6" 
      initial={shouldAnimate ? { opacity: 0 } : undefined}
      animate={{ opacity: 1 }}
      transition={{ duration: shouldAnimate ? 0.1 : 0 }}
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
        
        <div className="flex items-center space-x-2">
          <button
            className={`px-3 py-1 rounded-lg text-sm transition-colors duration-ultra ${
              displayMode === 'grid' 
                ? 'bg-purple-500 text-white' 
                : 'bg-white/10 text-white/60 hover:bg-white/20'
            }`}
            onClick={() => setDisplayMode('grid')}
          >
            Grid
          </button>
          <button
            className={`px-3 py-1 rounded-lg text-sm transition-colors duration-ultra ${
              displayMode === 'virtual' 
                ? 'bg-purple-500 text-white' 
                : 'bg-white/10 text-white/60 hover:bg-white/20'
            }`}
            onClick={() => setDisplayMode('virtual')}
          >
            List
          </button>
        </div>
      </div>

      {displayMode === 'grid' ? (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {memoizedTracks.map((track, index) => (
            <OptimizedCard
              key={track.id}
              item={track}
              onClick={handlePlayTrack}
              showAnimation={shouldAnimate && index < 6}
              priority={index < 3}
            />
          ))}
        </div>
      ) : (
        <VirtualList
          items={memoizedTracks}
          itemHeight={80}
          containerHeight={400}
          renderItem={(track) => (
            <div className="flex items-center space-x-4 p-4 hover:bg-white/5 rounded-lg cursor-pointer transition-colors duration-ultra">
              <img
                src={track.cover_url}
                alt={track.title}
                className="w-12 h-12 rounded-lg object-cover"
                loading="lazy"
              />
              <div className="flex-1 min-w-0">
                <h3 className="text-white font-medium truncate">{track.title}</h3>
                <p className="text-white/60 text-sm truncate">{track.profiles_ovi2025?.display_name}</p>
              </div>
              <div className="text-white/40 text-sm">
                {track.plays_count?.toLocaleString()} plays
              </div>
            </div>
          )}
        />
      )}

      {memoizedTracks.length === 0 && (
        <div className="text-center py-8">
          <div className="text-white/60 mb-4">No trending tracks found</div>
        </div>
      )}
    </motion.div>
  );
}

export default React.memo(OptimizedTrendingTracks);