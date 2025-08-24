import React, { useState, useEffect, useMemo, useCallback } from 'react';
import { motion } from 'framer-motion';

function VirtualList({ 
  items, 
  itemHeight = 100, 
  containerHeight = 400,
  renderItem,
  className = '',
  overscan = 5 
}) {
  const [scrollTop, setScrollTop] = useState(0);

  const handleScroll = useCallback((e) => {
    setScrollTop(e.target.scrollTop);
  }, []);

  const { visibleItems, totalHeight, offsetY } = useMemo(() => {
    const startIndex = Math.max(0, Math.floor(scrollTop / itemHeight) - overscan);
    const endIndex = Math.min(
      items.length,
      Math.ceil((scrollTop + containerHeight) / itemHeight) + overscan
    );

    const visibleItems = items.slice(startIndex, endIndex).map((item, index) => ({
      ...item,
      index: startIndex + index
    }));

    return {
      visibleItems,
      totalHeight: items.length * itemHeight,
      offsetY: startIndex * itemHeight
    };
  }, [items, itemHeight, containerHeight, scrollTop, overscan]);

  return (
    <div 
      className={`overflow-auto ${className}`}
      style={{ height: containerHeight }}
      onScroll={handleScroll}
    >
      <div style={{ height: totalHeight, position: 'relative' }}>
        <div style={{ transform: `translateY(${offsetY}px)` }}>
          {visibleItems.map((item, index) => (
            <motion.div
              key={item.id || item.index}
              style={{ height: itemHeight }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.2 }}
            >
              {renderItem(item, item.index)}
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default React.memo(VirtualList);