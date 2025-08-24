import React from 'react';
import {motion} from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';
import TrendingTracks from '../components/home/TrendingTracks';
import CreatorSpotlight from '../components/home/CreatorSpotlight';
import LiveStreams from '../components/home/LiveStreams';
import QuickStats from '../components/home/QuickStats';

const {FiTrendingUp,FiUsers,FiMic,FiVideo,FiDollarSign,FiMusic,FiZap,FiBrain,FiShield}=FiIcons;

function Home({setCurrentTrack,setIsPlaying}) {
  return (
    <div className="home-container">
      <motion.div 
        className="space-y-8 pb-8" 
        initial={{opacity: 0,y: 20}} 
        animate={{opacity: 1,y: 0}} 
        transition={{duration: 0.6}}
      >
        {/* Hero Section */}
        <motion.div 
          className="relative overflow-hidden card-3d animate-float-3d home-section" 
          initial={{scale: 0.95,opacity: 0}} 
          animate={{scale: 1,opacity: 1}} 
          transition={{duration: 0.8}}
        >
          <div className="hero-content relative z-10">
            <motion.div 
              className="flex flex-col md:flex-row items-start md:items-center space-y-4 md:space-y-0 md:space-x-4 mb-6" 
              initial={{y: 30,opacity: 0}} 
              animate={{y: 0,opacity: 1}} 
              transition={{delay: 0.2,duration: 0.8}}
            >
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-blue-500 rounded-2xl flex items-center justify-center animate-glow-3d flex-shrink-0">
                <SafeIcon icon={FiMusic} className="text-white text-2xl" />
              </div>
              <div className="flex-1">
                <h1 className="text-3xl md:text-4xl lg:text-6xl font-bold text-gradient-3d leading-tight">
                  Welcome to Ovi Network
                </h1>
                <p className="text-lg text-white/60 mt-2">Professional Music Platform</p>
              </div>
            </motion.div>
            
            <motion.p 
              className="text-lg md:text-xl text-white/80 mb-8 max-w-4xl leading-relaxed" 
              initial={{y: 30,opacity: 0}} 
              animate={{y: 0,opacity: 1}} 
              transition={{delay: 0.4,duration: 0.8}}
            >
              The world's most advanced music platform combining professional streaming, social networking, 
              creator tools, and revolutionary monetization systems - all powered by next-generation technology.
            </motion.p>
            
            <motion.div 
              className="button-group" 
              initial={{y: 30,opacity: 0}} 
              animate={{y: 0,opacity: 1}} 
              transition={{delay: 0.6,duration: 0.8}}
            >
              <button className="btn-3d-primary flex items-center space-x-2">
                <SafeIcon icon={FiZap} />
                <span>Start Creating</span>
              </button>
              <button className="btn-3d-secondary flex items-center space-x-2">
                <SafeIcon icon={FiMusic} />
                <span>Explore Music</span>
              </button>
            </motion.div>
          </div>

          {/* Floating Elements */}
          <motion.div 
            className="absolute top-10 right-10 w-24 h-24 bg-purple-500/10 rounded-full blur-2xl hidden lg:block" 
            animate={{
              y: [-10,10,-10],
              rotate: [0,180,360],
              scale: [1,1.1,1]
            }} 
            transition={{duration: 8,repeat: Infinity}}
          />
          <motion.div 
            className="absolute bottom-10 right-20 w-20 h-20 bg-blue-500/10 rounded-full blur-2xl hidden lg:block" 
            animate={{
              y: [10,-10,10],
              rotate: [360,180,0],
              scale: [1.1,1,1.1]
            }} 
            transition={{duration: 10,repeat: Infinity}}
          />
        </motion.div>

        {/* Quick Stats */}
        <div className="home-section">
          <QuickStats />
        </div>

        {/* Platform Features Grid */}
        <motion.div 
          className="home-section" 
          initial={{opacity: 0,y: 40}} 
          animate={{opacity: 1,y: 0}} 
          transition={{delay: 0.8,duration: 0.6}}
        >
          <div className="feature-grid">
            {[
              {
                icon: FiMusic,
                title: 'Creator Economy',
                description: 'Revolutionary monetization platform for artists and producers with AI-powered insights',
                color: 'from-green-500 to-emerald-500',
                stats: '$2.5M+ earned',
                badge: 'HOT'
              },
              {
                icon: FiUsers,
                title: 'Social Ecosystem',
                description: 'Next-generation social media designed specifically for music creators and fans',
                color: 'from-purple-500 to-pink-500',
                stats: '500K+ creators',
                badge: 'TRENDING'
              },
              {
                icon: FiMic,
                title: 'Professional Studio',
                description: 'Industry-grade production tools accessible directly in your browser',
                color: 'from-blue-500 to-cyan-500',
                stats: '1M+ tracks created',
                badge: 'PRO'
              },
              {
                icon: FiVideo,
                title: 'Live Streaming',
                description: 'Monetized high-quality video streaming for music performances and tutorials',
                color: 'from-red-500 to-orange-500',
                stats: '50K+ live streams',
                badge: 'LIVE'
              },
              {
                icon: FiBrain,
                title: 'AI Assistant',
                description: 'Advanced AI-powered music creation, mixing, and mastering assistance',
                color: 'from-indigo-500 to-purple-500',
                stats: '99.9% accuracy',
                badge: 'AI'
              },
              {
                icon: FiShield,
                title: 'Quantum Security',
                description: 'Military-grade security with biometric and quantum encryption options',
                color: 'from-teal-500 to-green-500',
                stats: 'Unbreakable',
                badge: 'SECURE'
              }
            ].map((feature,index)=> (
              <motion.div 
                key={index} 
                className="card-3d p-6 hover-lift cursor-pointer group relative overflow-hidden" 
                whileHover={{scale: 1.02,y: -5}} 
                initial={{opacity: 0,y: 30}} 
                animate={{opacity: 1,y: 0}} 
                transition={{delay: 0.9 + index * 0.1,duration: 0.5}}
              >
                {/* Badge */}
                <div className="absolute top-4 right-4">
                  <span className="text-xs bg-gradient-to-r from-purple-500 to-blue-500 text-white px-2 py-1 rounded-full font-bold animate-pulse-3d">
                    {feature.badge}
                  </span>
                </div>
                
                <div className={`w-14 h-14 bg-gradient-to-r ${feature.color} rounded-2xl flex items-center justify-center mb-6 group-hover:animate-pulse-3d`}>
                  <SafeIcon icon={feature.icon} className="text-white text-2xl" />
                </div>
                
                <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                <p className="text-white/70 mb-4 leading-relaxed">{feature.description}</p>
                
                <div className="flex items-center justify-between">
                  <div className="text-sm font-semibold text-gradient-3d">{feature.stats}</div>
                  <motion.div 
                    className="w-8 h-8 bg-white/10 rounded-lg flex items-center justify-center group-hover:bg-white/20 transition-colors" 
                    whileHover={{rotate: 45}}
                  >
                    <SafeIcon icon={FiZap} className="text-white/60 text-sm" />
                  </motion.div>
                </div>
                
                {/* Hover Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500/5 to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl" />
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Content Sections */}
        <div className="content-grid home-section">
          <TrendingTracks setCurrentTrack={setCurrentTrack} setIsPlaying={setIsPlaying} />
          <CreatorSpotlight />
        </div>

        <div className="home-section">
          <LiveStreams />
        </div>
      </motion.div>
    </div>
  );
}

export default Home;