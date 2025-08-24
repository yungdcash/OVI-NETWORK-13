import { useState, useEffect, useCallback, useMemo } from 'react';

// Ultra-Fast Performance monitoring hook
export function usePerformance() {
  const [performanceMetrics, setPerformanceMetrics] = useState({
    renderTime: 0,
    componentCount: 0,
    memoryUsage: 0
  });

  const measureRenderTime = useCallback((componentName, startTime) => {
    const endTime = performance.now();
    const renderTime = endTime - startTime;
    
    if (renderTime > 5) { // Ultra-fast threshold - 3x faster
      console.warn(`Slow render detected in ${componentName}: ${renderTime.toFixed(2)}ms`);
    }
    
    return renderTime;
  }, []);

  return { performanceMetrics, measureRenderTime };
}

// Ultra-Fast Debounce hook
export function useDebounce(value, delay) {
  const [debouncedValue, setDebouncedValue] = useState(value);
  const ultraFastDelay = delay / 3; // 3x faster debounce

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, ultraFastDelay);

    return () => {
      clearTimeout(handler);
    };
  }, [value, ultraFastDelay]);

  return debouncedValue;
}

// Ultra-Fast Intersection Observer hook
export function useIntersectionObserver(options = {}) {
  const [isIntersecting, setIsIntersecting] = useState(false);
  const [targetRef, setTargetRef] = useState(null);

  const ultraFastOptions = {
    threshold: 0.1,
    rootMargin: '20px', // Reduced for faster detection
    ...options
  };

  useEffect(() => {
    if (!targetRef) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsIntersecting(entry.isIntersecting);
      },
      ultraFastOptions
    );

    observer.observe(targetRef);

    return () => {
      observer.disconnect();
    };
  }, [targetRef, ultraFastOptions]);

  return [setTargetRef, isIntersecting];
}

// Ultra-Fast Virtual scrolling hook
export function useVirtualScrolling(items, itemHeight, containerHeight) {
  const [scrollTop, setScrollTop] = useState(0);

  const visibleItems = useMemo(() => {
    const startIndex = Math.floor(scrollTop / itemHeight);
    const endIndex = Math.min(
      startIndex + Math.ceil(containerHeight / itemHeight) + 2, // Reduced overscan
      items.length
    );

    return items.slice(startIndex, endIndex).map((item, index) => ({
      ...item,
      index: startIndex + index
    }));
  }, [items, itemHeight, containerHeight, scrollTop]);

  const handleScroll = useCallback((e) => {
    setScrollTop(e.target.scrollTop);
  }, []);

  return { visibleItems, setScrollTop, handleScroll };
}

// Ultra-Fast Optimized animation hook
export function useOptimizedAnimation(shouldAnimate = true) {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
  const [isLowEndDevice, setIsLowEndDevice] = useState(false);

  useEffect(() => {
    // Check for reduced motion preference
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(mediaQuery.matches);

    const handler = (e) => setPrefersReducedMotion(e.matches);
    mediaQuery.addEventListener('change', handler);

    // Ultra-fast device capability detection
    const checkDeviceCapability = () => {
      const canvas = document.createElement('canvas');
      const gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl');
      
      // Check for low-end device indicators
      const isLowEnd = (
        !gl ||
        navigator.hardwareConcurrency < 4 ||
        navigator.deviceMemory < 4 ||
        /Android.*Chrome\/[1-6][0-9]/.test(navigator.userAgent) // Older Android Chrome
      );
      
      setIsLowEndDevice(isLowEnd);
    };

    checkDeviceCapability();

    return () => mediaQuery.removeEventListener('change', handler);
  }, []);

  // Return true only if animations should run (3x more selective)
  return shouldAnimate && !prefersReducedMotion && !isLowEndDevice;
}

// Ultra-Fast RAF hook for smooth animations
export function useRAF(callback, deps = []) {
  const rafId = React.useRef();
  const callbackRef = React.useRef(callback);

  // Update callback ref when callback changes
  React.useEffect(() => {
    callbackRef.current = callback;
  }, [callback]);

  React.useEffect(() => {
    const tick = () => {
      callbackRef.current();
      rafId.current = requestAnimationFrame(tick);
    };

    rafId.current = requestAnimationFrame(tick);

    return () => {
      if (rafId.current) {
        cancelAnimationFrame(rafId.current);
      }
    };
  }, deps);

  return () => {
    if (rafId.current) {
      cancelAnimationFrame(rafId.current);
    }
  };
}

// Ultra-Fast Throttle hook
export function useThrottle(value, limit) {
  const [throttledValue, setThrottledValue] = useState(value);
  const lastRan = React.useRef(Date.now());
  const ultraFastLimit = limit / 3; // 3x faster throttle

  useEffect(() => {
    const handler = setTimeout(() => {
      if (Date.now() - lastRan.current >= ultraFastLimit) {
        setThrottledValue(value);
        lastRan.current = Date.now();
      }
    }, ultraFastLimit - (Date.now() - lastRan.current));

    return () => {
      clearTimeout(handler);
    };
  }, [value, ultraFastLimit]);

  return throttledValue;
}

// Ultra-Fast Memory management hook
export function useMemoryOptimization() {
  const cleanup = useCallback(() => {
    // Force garbage collection on supported browsers
    if (window.gc) {
      window.gc();
    }
    
    // Clear any cached data that's no longer needed
    if ('caches' in window) {
      caches.keys().then(names => {
        names.forEach(name => {
          if (name.includes('old-') || name.includes('temp-')) {
            caches.delete(name);
          }
        });
      });
    }
  }, []);

  useEffect(() => {
    // Cleanup every 30 seconds for optimal performance
    const interval = setInterval(cleanup, 30000);
    return () => clearInterval(interval);
  }, [cleanup]);

  return cleanup;
}

// Ultra-Fast Resize observer hook
export function useResizeObserver(callback) {
  const [ref, setRef] = useState(null);

  useEffect(() => {
    if (!ref) return;

    const resizeObserver = new ResizeObserver((entries) => {
      // Use RAF for smooth updates
      requestAnimationFrame(() => {
        callback(entries[0]);
      });
    });

    resizeObserver.observe(ref);

    return () => {
      resizeObserver.disconnect();
    };
  }, [ref, callback]);

  return setRef;
}

// Ultra-Fast Scroll performance hook
export function useScrollPerformance(threshold = 10) {
  const [isScrolling, setIsScrolling] = useState(false);
  const scrollTimeout = React.useRef();

  const handleScroll = useCallback(() => {
    setIsScrolling(true);

    clearTimeout(scrollTimeout.current);
    scrollTimeout.current = setTimeout(() => {
      setIsScrolling(false);
    }, threshold); // Ultra-fast scroll detection
  }, [threshold]);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearTimeout(scrollTimeout.current);
    };
  }, [handleScroll]);

  return isScrolling;
}