import React, { useState, useCallback } from 'react';
import { motion } from 'framer-motion';
import { useIntersectionObserver } from '../../hooks/usePerformance';

function LazyImage({ 
  src, 
  alt, 
  className = '', 
  fallback = '/placeholder.jpg',
  ...props 
}) {
  const [imageRef, isIntersecting] = useIntersectionObserver();
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);

  const handleLoad = useCallback(() => {
    setIsLoaded(true);
  }, []);

  const handleError = useCallback(() => {
    setHasError(true);
    setIsLoaded(true);
  }, []);

  return (
    <div ref={imageRef} className={`relative overflow-hidden ${className}`} {...props}>
      {isIntersecting && (
        <>
          {/* Placeholder */}
          {!isLoaded && (
            <div className="absolute inset-0 bg-gradient-to-br from-gray-800 to-gray-900 animate-pulse">
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent animate-shimmer" />
            </div>
          )}
          
          {/* Actual image */}
          <motion.img
            src={hasError ? fallback : src}
            alt={alt}
            className={`w-full h-full object-cover transition-opacity duration-300 ${
              isLoaded ? 'opacity-100' : 'opacity-0'
            }`}
            onLoad={handleLoad}
            onError={handleError}
            initial={{ opacity: 0 }}
            animate={{ opacity: isLoaded ? 1 : 0 }}
            transition={{ duration: 0.3 }}
          />
        </>
      )}
    </div>
  );
}

export default React.memo(LazyImage);