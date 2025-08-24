import React, { Suspense, lazy } from 'react';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';
import { useOptimizedAnimation } from '../hooks/usePerformance';

const { FiMusic, FiZap, FiUsers, FiMic, FiVideo, FiDollarSign, FiBrain, FiShield } = FiIcons;

// Lazy load heavy components
const OptimizedTrendingTracks = lazy(() => import('../components/home/OptimizedTrendingTracks'));
const CreatorSpotlight = lazy(() => import('../components/home/CreatorSpotlight'));
const QuickStats = lazy(() => import('../components/home/QuickStats'));

// Loading component
const ComponentLoader = () => (
  <div className="card-3d p-6 animate-pulse">
    <div className="h-4 bg-white/10 rounded mb-4"></div>
    <div className="h-32 bg-white/5 rounded"></div>
  </div>
);

function OptimizedHome({ setCurrentTrack, setIsPlaying }) {
  const shouldAnimate = useOptimizedAnimation();

  const features = React.useMemo(() => [
    {
      icon: FiMusic,
      title: 'Creator Economy',
      description: 'Revolutionary monetization platform for artists and producers',
      color: 'from-green-500 to-emerald-500',
      stats: '$2.5M+ earned',
      badge: 'HOT'
    },
    {
      icon: FiUsers,
      title: 'Social Ecosystem',
      description: 'Next-generation social media for music creators',
      color: 'from-purple-500 to-pink-500',
      stats: '500K+ creators',
      badge: 'TRENDING'
    },
    {
      icon: FiMic,
      title: 'Professional Studio',
      description: 'Industry-grade production tools in your browser',
      color: 'from-blue-500 to-cyan-500',
      stats: '1M+ tracks created',
      badge: 'PRO'
    },
    {
      icon: FiVideo,
      title: 'Live Streaming',
      description: 'Monetized high-quality video streaming',
      color: 'from-red-500 to-orange-500',
      stats: '50K+ live streams',
      badge: 'LIVE'
    },
    {
      icon: FiBrain,
      title: 'AI Assistant',
      description: 'Advanced AI-powered music creation assistance',
      color: 'from-indigo-500 to-purple-500',
      stats: '99.9% accuracy',
      badge: 'AI'
    },
    {
      icon: FiShield,
      title: 'Quantum Security',
      description: 'Military-grade security with quantum encryption',
      color: 'from-teal-500 to-green-500',
      stats: 'Unbreakable',
      badge: 'SECURE'
    }
  ], []);

  return (
    <div className="home-container">
      <motion.div 
        className="space-y-8 pb-8"
        initial={shouldAnimate ? { opacity: 0 } : false}
        animate={{ opacity: 1 }}
        transition={{ duration: shouldAnimate ? 0.6 : 0 }}
      >
        {/* Hero Section */}
        <motion.div 
          className="card-3d home-section"
          initial={shouldAnimate ? { scale: 0.95, opacity: 0 } : false}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: shouldAnimate ? 0.5 : 0 }}
        >
          <div className="hero-content relative z-10">
            <div className="flex flex-col md:flex-row items-start md:items-center space-y-4 md:space-y-0 md:space-x-4 mb-6">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-blue-500 rounded-2xl flex items-center justify-center flex-shrink-0">
                <SafeIcon icon={FiMusic} className="text-white text-2xl" />
              </div>
              <div className="flex-1">
                <h1 className="text-3xl md:text-4xl lg:text-6xl font-bold text-gradient-3d leading-tight">
                  Welcome to Ovi Network
                </h1>
                <p className="text-lg text-white/60 mt-2">Professional Music Platform</p>
              </div>
            </div>

            <p className="text-lg md:text-xl text-white/80 mb-8 max-w-4xl leading-relaxed">
              The world's most advanced music platform combining professional streaming, social networking, 
              creator tools, and revolutionary monetization systems.
            </p>

            <div className="button-group">
              <button className="btn-3d-primary flex items-center space-x-2">
                <SafeIcon icon={FiZap} />
                <span>Start Creating</span>
              </button>
              <button className="btn-3d-secondary flex items-center space-x-2">
                <SafeIcon icon={FiMusic} />
                <span>Explore Music</span>
              </button>
            </div>
          </div>
        </motion.div>

        {/* Quick Stats */}
        <Suspense fallback={<ComponentLoader />}>
          <QuickStats />
        </Suspense>

        {/* Platform Features Grid */}
        <motion.div 
          className="home-section"
          initial={shouldAnimate ? { opacity: 0, y: 40 } : false}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: shouldAnimate ? 0.3 : 0, duration: shouldAnimate ? 0.6 : 0 }}
        >
          <div className="feature-grid">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                className="card-3d p-6 hover-lift cursor-pointer group relative overflow-hidden"
                initial={shouldAnimate ? { opacity: 0, y: 30 } : false}
                animate={{ opacity: 1, y: 0 }}
                transition={{ 
                  delay: shouldAnimate ? 0.4 + index * 0.1 : 0, 
                  duration: shouldAnimate ? 0.5 : 0 
                }}
                whileHover={shouldAnimate ? { scale: 1.02, y: -5 } : undefined}
              >
                {/* Badge */}
                <div className="absolute top-4 right-4">
                  <span className="text-xs bg-gradient-to-r from-purple-500 to-blue-500 text-white px-2 py-1 rounded-full font-bold">
                    {feature.badge}
                  </span>
                </div>

                <div className={`w-14 h-14 bg-gradient-to-r ${feature.color} rounded-2xl flex items-center justify-center mb-6`}>
                  <SafeIcon icon={feature.icon} className="text-white text-2xl" />
                </div>

                <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                <p className="text-white/70 mb-4 leading-relaxed">{feature.description}</p>
                
                <div className="flex items-center justify-between">
                  <div className="text-sm font-semibold text-gradient-3d">{feature.stats}</div>
                  <div className="w-8 h-8 bg-white/10 rounded-lg flex items-center justify-center">
                    <SafeIcon icon={FiZap} className="text-white/60 text-sm" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Content Sections */}
        <div className="content-grid home-section">
          <Suspense fallback={<ComponentLoader />}>
            <OptimizedTrendingTracks 
              setCurrentTrack={setCurrentTrack} 
              setIsPlaying={setIsPlaying} 
            />
          </Suspense>
          
          <Suspense fallback={<ComponentLoader />}>
            <CreatorSpotlight />
          </Suspense>
        </div>
      </motion.div>
    </div>
  );
}

export default React.memo(OptimizedHome);