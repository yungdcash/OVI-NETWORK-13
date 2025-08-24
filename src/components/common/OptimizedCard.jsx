import React, { memo, useMemo } from 'react';
import { motion } from 'framer-motion';
import LazyImage from './LazyImage';
import { useOptimizedAnimation } from '../../hooks/usePerformance';

const OptimizedCard = memo(function OptimizedCard({ 
  item, 
  onClick, 
  className = '',
  showAnimation = true,
  priority = false 
}) {
  const shouldAnimate = useOptimizedAnimation(showAnimation);

  const cardVariants = useMemo(() => ({
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    hover: shouldAnimate ? { scale: 1.02, y: -2 } : {},
    tap: shouldAnimate ? { scale: 0.98 } : {}
  }), [shouldAnimate]);

  const handleClick = React.useCallback(() => {
    onClick?.(item);
  }, [onClick, item]);

  return (
    <motion.div
      className={`card-3d p-4 cursor-pointer group ${className}`}
      variants={cardVariants}
      initial={shouldAnimate ? "initial" : false}
      animate="animate"
      whileHover={shouldAnimate ? "hover" : undefined}
      whileTap={shouldAnimate ? "tap" : undefined}
      onClick={handleClick}
      transition={{ duration: shouldAnimate ? 0.2 : 0 }}
    >
      {/* Image */}
      <div className="relative overflow-hidden rounded-xl mb-4">
        <LazyImage
          src={item.cover_url || item.thumbnail}
          alt={item.title}
          className="w-full aspect-square"
          loading={priority ? 'eager' : 'lazy'}
        />
        
        {/* Overlay - only render when needed */}
        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
              <span className="text-white text-xl">▶</span>
            </div>
          </div>
        </div>

        {/* Badges */}
        {item.is_trending && (
          <div className="absolute top-2 right-2">
            <span className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-2 py-1 rounded-full text-xs font-bold">
              TRENDING
            </span>
          </div>
        )}
      </div>

      {/* Content */}
      <div>
        <h3 className="text-white font-semibold text-sm mb-1 truncate">
          {item.title}
        </h3>
        <p className="text-white/60 text-xs mb-2 truncate">
          {item.artist || item.profiles_ovi2025?.display_name}
        </p>
        
        {/* Stats */}
        <div className="flex items-center justify-between text-xs text-white/40">
          <span>{item.plays_count?.toLocaleString() || '0'} plays</span>
          <span>{item.duration ? `${Math.floor(item.duration / 60)}:${(item.duration % 60).toString().padStart(2, '0')}` : '0:00'}</span>
        </div>
      </div>
    </motion.div>
  );
});

export default OptimizedCard;