import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';
import { useAuth } from '../contexts/AuthContext';
import { useToastContext } from '../contexts/ToastContext';

const {
  FiHeart, FiMessageCircle, FiShare2, FiMoreHorizontal, FiUserPlus, FiMusic, 
  FiVideo, FiMic, FiZap, FiBrain, FiEye, FiWifi, FiGlobe, FiTrendingUp,
  FiUsers, FiStar, FiTarget, FiLayers, FiRadio, FiHeadphones, FiPlay,
  FiPause, FiSkipForward, FiVolume2, FiSend, FiSmile, FiImage, FiMicrophone,
  FiCamera, FiMapPin, FiClock, FiShield, FiAward, FiCrown, FiFire,
  FiThumbsUp, FiThumbsDown, FiBookmark, FiFlag, FiRefreshCw, FiFilter,
  FiSearch, FiPlus, FiX, FiCheck, FiArrowUp, FiArrowDown, FiRepeat
} = FiIcons;

function Social() {
  const { user, profile } = useAuth();
  const toast = useToastContext();
  const [activeTab, setActiveTab] = useState('quantum-feed');
  const [isCreatingPost, setIsCreatingPost] = useState(false);
  const [newPostContent, setNewPostContent] = useState('');
  const [selectedMood, setSelectedMood] = useState('creative');
  const [posts, setPosts] = useState([]);
  const [realTimeListeners, setRealTimeListeners] = useState(12847);
  const [globalVibes, setGlobalVibes] = useState('euphoric');
  const [quantumConnections, setQuantumConnections] = useState(0);
  const [neuralSync, setNeuralSync] = useState(false);
  const [emotionalResonance, setEmotionalResonance] = useState(85);

  // Revolutionary Social Features
  const revolutionaryFeatures = [
    {
      id: 'quantum-feed',
      name: 'Quantum Feed',
      icon: FiZap,
      description: 'AI-powered timeline that adapts to your emotional state in real-time',
      badge: 'WORLD FIRST',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      id: 'neural-sync',
      name: 'Neural Sync',
      icon: FiBrain,
      description: 'Connect minds through music - share emotions and creativity directly',
      badge: 'BREAKTHROUGH',
      color: 'from-purple-500 to-pink-500'
    },
    {
      id: 'emotion-waves',
      name: 'Emotion Waves',
      icon: FiRadio,
      description: 'Ride global emotional currents and discover music that matches the world\'s mood',
      badge: 'REVOLUTIONARY',
      color: 'from-green-500 to-teal-500'
    },
    {
      id: 'quantum-collab',
      name: 'Quantum Collaboration',
      icon: FiUsers,
      description: 'Create music together across dimensions of time and space',
      badge: 'IMPOSSIBLE',
      color: 'from-orange-500 to-red-500'
    },
    {
      id: 'vibe-matching',
      name: 'Vibe Matching',
      icon: FiTarget,
      description: 'Find your musical soulmates through advanced emotional AI analysis',
      badge: 'MIND-READING',
      color: 'from-indigo-500 to-purple-500'
    },
    {
      id: 'reality-feed',
      name: 'Reality Feed',
      icon: FiEye,
      description: 'Experience posts in augmented reality with spatial audio and haptic feedback',
      badge: 'FUTURE',
      color: 'from-yellow-500 to-orange-500'
    }
  ];

  const moods = [
    { id: 'creative', name: 'Creative', color: 'text-purple-400', emoji: '🎨' },
    { id: 'energetic', name: 'Energetic', color: 'text-orange-400', emoji: '⚡' },
    { id: 'chill', name: 'Chill', color: 'text-blue-400', emoji: '😌' },
    { id: 'inspired', name: 'Inspired', color: 'text-yellow-400', emoji: '✨' },
    { id: 'focused', name: 'Focused', color: 'text-green-400', emoji: '🎯' },
    { id: 'euphoric', name: 'Euphoric', color: 'text-pink-400', emoji: '🚀' }
  ];

  const globalVibeStates = [
    'euphoric', 'creative', 'nostalgic', 'energetic', 'contemplative', 'revolutionary'
  ];

  // Simulate real-time data updates
  useEffect(() => {
    const interval = setInterval(() => {
      setRealTimeListeners(prev => prev + Math.floor(Math.random() * 50) - 25);
      setGlobalVibes(globalVibeStates[Math.floor(Math.random() * globalVibeStates.length)]);
      setQuantumConnections(prev => prev + Math.floor(Math.random() * 3));
      setEmotionalResonance(prev => Math.max(0, Math.min(100, prev + Math.floor(Math.random() * 20) - 10)));
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  // Revolutionary Posts Data
  const revolutionaryPosts = [
    {
      id: 1,
      user: {
        name: 'QuantumBeats',
        username: '@quantumbeats',
        avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=150&h=150&fit=crop&crop=face',
        verified: true,
        neuralLevel: 'Quantum',
        emotionalSignature: 'Creative Visionary'
      },
      content: 'Just discovered a new dimension in my latest track through Neural Sync! The AI detected emotions I didn\'t even know I was feeling. This is the future of music creation! 🎵✨🧠',
      type: 'neural-post',
      emotionalWave: 'euphoric',
      quantumResonance: 94,
      neuralConnections: 847,
      media: {
        type: 'quantum-audio',
        title: 'Dimensional Synthesis',
        duration: '4:32',
        waveform: Array.from({length: 50}, () => Math.random() * 100),
        thumbnail: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=500&h=300&fit=crop',
        emotionalSpectrum: ['euphoric', 'creative', 'transcendent']
      },
      stats: {
        resonance: 2847,
        neuralShares: 156,
        quantumLikes: 89,
        dimensionalViews: 12400
      },
      timestamp: '2h ago',
      location: 'Quantum Studio Dimension-7'
    },
    {
      id: 2,
      user: {
        name: 'NeuralHarmony',
        username: '@neuralharmony',
        avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face',
        verified: true,
        neuralLevel: 'Transcendent',
        emotionalSignature: 'Empathic Creator'
      },
      content: 'The Emotion Waves feature just connected me with 50,000 people feeling the same creative energy right now! We\'re all vibing on the same frequency across the globe. This is what true connection feels like! 🌍💫',
      type: 'emotion-wave',
      emotionalWave: 'creative',
      quantumResonance: 87,
      neuralConnections: 1243,
      media: {
        type: 'emotion-visualization',
        title: 'Global Creative Resonance',
        emotionalMap: true,
        connectedSouls: 50247,
        thumbnail: 'https://images.unsplash.com/photo-1571974599782-87624638275c?w=500&h=300&fit=crop'
      },
      stats: {
        resonance: 1432,
        neuralShares: 87,
        quantumLikes: 45,
        dimensionalViews: 8900
      },
      timestamp: '4h ago',
      location: 'Global Consciousness Grid'
    },
    {
      id: 3,
      user: {
        name: 'DimensionalDJ',
        username: '@dimensionaldj',
        avatar: 'https://images.unsplash.com/photo-1527980965255-d3b416303d12?w=150&h=150&fit=crop&crop=face',
        verified: true,
        neuralLevel: 'Interdimensional',
        emotionalSignature: 'Reality Bender'
      },
      content: 'Just performed a live set in Reality Feed mode! Fans could feel the bass through haptic feedback and see my music as 3D holograms floating around them. The future of live music is HERE! 🎧🔮',
      type: 'reality-experience',
      emotionalWave: 'energetic',
      quantumResonance: 96,
      neuralConnections: 2156,
      media: {
        type: 'holographic-performance',
        title: 'Interdimensional Bass Drop',
        duration: '2:15',
        realityLayers: 7,
        hapticIntensity: 'Maximum',
        thumbnail: 'https://images.unsplash.com/photo-1511379938547-c1f69419868d?w=500&h=300&fit=crop'
      },
      stats: {
        resonance: 5642,
        neuralShares: 234,
        quantumLikes: 156,
        dimensionalViews: 18700
      },
      timestamp: '6h ago',
      location: 'Holographic Performance Space'
    }
  ];

  const handleCreatePost = async () => {
    if (!newPostContent.trim()) {
      toast.warning('Please add some content to your post!', {
        title: '⚠️ Empty Post',
        duration: 3000
      });
      return;
    }

    const loadingToastId = toast.loading(
      'Analyzing your emotional signature and quantum-encoding your post...',
      {
        title: '🧠 Neural Processing',
        persistent: true
      }
    );

    try {
      // Simulate AI processing
      await new Promise(resolve => setTimeout(resolve, 2000));

      const newPost = {
        id: Date.now(),
        user: {
          name: user?.name || 'You',
          username: `@${user?.name?.toLowerCase().replace(' ', '') || 'you'}`,
          avatar: user?.avatar || 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=150&h=150&fit=crop&crop=face',
          verified: profile?.verified || false,
          neuralLevel: profile?.security_level === 'quantum' ? 'Quantum' : 'Standard',
          emotionalSignature: 'Rising Creator'
        },
        content: newPostContent,
        type: 'neural-post',
        emotionalWave: selectedMood,
        quantumResonance: Math.floor(Math.random() * 100),
        neuralConnections: Math.floor(Math.random() * 100),
        stats: {
          resonance: 0,
          neuralShares: 0,
          quantumLikes: 0,
          dimensionalViews: 0
        },
        timestamp: 'now',
        location: 'Your Neural Space'
      };

      setPosts(prev => [newPost, ...prev]);
      setNewPostContent('');
      setIsCreatingPost(false);

      toast.removeToast(loadingToastId);
      toast.success(
        `Your post has been quantum-encoded and sent across ${Math.floor(Math.random() * 50000) + 10000} neural pathways! 🚀`,
        {
          title: '✨ Post Published',
          duration: 5000
        }
      );
    } catch (error) {
      toast.removeToast(loadingToastId);
      toast.error('Failed to publish your neural transmission. Please try again.', {
        title: '❌ Publishing Error',
        duration: 5000
      });
    }
  };

  const handleNeuralSync = () => {
    if (neuralSync) {
      setNeuralSync(false);
      toast.info('Neural Sync disconnected. Welcome back to standard reality! 👋', {
        title: '🧠 Neural Sync OFF',
        duration: 4000
      });
    } else {
      setNeuralSync(true);
      toast.success('Neural Sync activated! You can now feel the collective consciousness of music creators worldwide! 🌍✨', {
        title: '🧠 Neural Sync ON',
        duration: 6000
      });
    }
  };

  const renderRevolutionaryPost = (post, index) => (
    <motion.div
      key={post.id}
      className="card-3d p-6 mb-6 relative overflow-hidden"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      whileHover={{ scale: 1.02, y: -2 }}
    >
      {/* Quantum Aura Effect */}
      <motion.div
        className="absolute inset-0 opacity-20 pointer-events-none"
        style={{
          background: `radial-gradient(circle at 50% 50%, rgba(124,58,237,0.3) 0%, transparent 70%)`
        }}
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.2, 0.4, 0.2]
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      {/* Post Header */}
      <div className="flex items-center justify-between mb-4 relative z-10">
        <div className="flex items-center space-x-3">
          <div className="relative">
            <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-purple-500/50">
              <img src={post.user.avatar} alt={post.user.name} className="w-full h-full object-cover" />
            </div>
            {/* Neural Level Indicator */}
            <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full flex items-center justify-center border-2 border-gray-900">
              <SafeIcon icon={FiBrain} className="text-white text-xs" />
            </div>
          </div>
          <div>
            <div className="flex items-center space-x-2">
              <h3 className="text-white font-semibold">{post.user.name}</h3>
              {post.user.verified && (
                <div className="w-5 h-5 bg-blue-500 rounded-full flex items-center justify-center">
                  <SafeIcon icon={FiCheck} className="text-white text-xs" />
                </div>
              )}
              <span className="text-xs bg-gradient-to-r from-purple-500 to-blue-500 text-white px-2 py-1 rounded-full font-bold">
                {post.user.neuralLevel}
              </span>
            </div>
            <div className="flex items-center space-x-2 text-xs text-white/60">
              <span>{post.user.username}</span>
              <span>•</span>
              <span>{post.timestamp}</span>
              <span>•</span>
              <span className="flex items-center">
                <SafeIcon icon={FiMapPin} className="mr-1" />
                {post.location}
              </span>
            </div>
            <div className="text-xs text-purple-400 font-medium">
              {post.user.emotionalSignature}
            </div>
          </div>
        </div>
        
        {/* Quantum Stats */}
        <div className="flex flex-col items-end space-y-1">
          <div className="flex items-center space-x-2 text-xs">
            <SafeIcon icon={FiZap} className="text-yellow-400" />
            <span className="text-white/80">Resonance: {post.quantumResonance}%</span>
          </div>
          <div className="flex items-center space-x-2 text-xs">
            <SafeIcon icon={FiBrain} className="text-purple-400" />
            <span className="text-white/80">{post.neuralConnections} minds</span>
          </div>
        </div>
      </div>

      {/* Emotional Wave Indicator */}
      <div className="mb-4">
        <div className="flex items-center space-x-2 mb-2">
          <SafeIcon icon={FiRadio} className="text-cyan-400" />
          <span className="text-sm text-white/80">Emotional Wave:</span>
          <span className={`text-sm font-semibold capitalize ${
            post.emotionalWave === 'euphoric' ? 'text-pink-400' :
            post.emotionalWave === 'creative' ? 'text-purple-400' :
            post.emotionalWave === 'energetic' ? 'text-orange-400' : 'text-blue-400'
          }`}>
            {post.emotionalWave}
          </span>
        </div>
        <div className="w-full h-2 bg-white/10 rounded-full overflow-hidden">
          <motion.div
            className={`h-full bg-gradient-to-r ${
              post.emotionalWave === 'euphoric' ? 'from-pink-500 to-purple-500' :
              post.emotionalWave === 'creative' ? 'from-purple-500 to-blue-500' :
              post.emotionalWave === 'energetic' ? 'from-orange-500 to-red-500' : 'from-blue-500 to-cyan-500'
            } rounded-full`}
            initial={{ width: 0 }}
            animate={{ width: `${post.quantumResonance}%` }}
            transition={{ duration: 1, delay: 0.5 }}
          />
        </div>
      </div>

      {/* Post Content */}
      <p className="text-white mb-4 leading-relaxed">{post.content}</p>

      {/* Revolutionary Media */}
      {post.media && (
        <motion.div
          className="mb-4 rounded-xl overflow-hidden bg-gradient-to-br from-purple-500/20 to-blue-500/20 border border-purple-500/30"
          whileHover={{ scale: 1.02 }}
        >
          <div className="relative">
            <img src={post.media.thumbnail} alt={post.media.title} className="w-full h-48 object-cover" />
            
            {/* Media Type Overlay */}
            <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
              <motion.div
                className="flex flex-col items-center space-y-2"
                whileHover={{ scale: 1.1 }}
              >
                <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center border border-white/30">
                  <SafeIcon icon={
                    post.media.type === 'quantum-audio' ? FiMusic :
                    post.media.type === 'emotion-visualization' ? FiRadio :
                    post.media.type === 'holographic-performance' ? FiEye : FiPlay
                  } className="text-white text-2xl" />
                </div>
                <span className="text-white text-sm font-semibold">
                  {post.media.type === 'quantum-audio' ? 'Quantum Audio' :
                   post.media.type === 'emotion-visualization' ? 'Emotion Map' :
                   post.media.type === 'holographic-performance' ? 'Holographic' : 'Experience'}
                </span>
              </motion.div>
            </div>

            {/* Special Media Indicators */}
            <div className="absolute top-3 left-3 flex space-x-2">
              {post.media.type === 'quantum-audio' && (
                <span className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white px-2 py-1 rounded-full text-xs font-bold">
                  QUANTUM ENCODED
                </span>
              )}
              {post.media.type === 'emotion-visualization' && (
                <span className="bg-gradient-to-r from-green-500 to-teal-500 text-white px-2 py-1 rounded-full text-xs font-bold">
                  LIVE EMOTIONS
                </span>
              )}
              {post.media.type === 'holographic-performance' && (
                <span className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-2 py-1 rounded-full text-xs font-bold">
                  REALITY LAYERS: {post.media.realityLayers}
                </span>
              )}
            </div>

            {/* Duration/Stats Overlay */}
            <div className="absolute bottom-3 right-3 bg-black/60 backdrop-blur-sm text-white px-2 py-1 rounded-full text-xs">
              {post.media.duration || `${post.media.connectedSouls?.toLocaleString()} souls connected`}
            </div>
          </div>

          {/* Media Info */}
          <div className="p-4">
            <h4 className="text-white font-semibold mb-2">{post.media.title}</h4>
            {post.media.emotionalSpectrum && (
              <div className="flex flex-wrap gap-2 mb-3">
                {post.media.emotionalSpectrum.map((emotion, idx) => (
                  <span key={idx} className="text-xs bg-white/10 text-white/80 px-2 py-1 rounded-full">
                    {emotion}
                  </span>
                ))}
              </div>
            )}
            
            {/* Waveform Visualization for Quantum Audio */}
            {post.media.waveform && (
              <div className="flex items-center space-x-1 h-8 mb-3">
                {post.media.waveform.map((height, idx) => (
                  <motion.div
                    key={idx}
                    className="w-1 bg-gradient-to-t from-purple-500 to-blue-500 rounded-full"
                    style={{ height: `${height}%` }}
                    initial={{ height: 0 }}
                    animate={{ height: `${height}%` }}
                    transition={{ delay: idx * 0.05, duration: 0.5 }}
                  />
                ))}
              </div>
            )}
          </div>
        </motion.div>
      )}

      {/* Revolutionary Post Actions */}
      <div className="flex items-center justify-between pt-4 border-t border-white/10">
        <div className="flex items-center space-x-6">
          <motion.button
            className="flex items-center space-x-2 text-white/60 hover:text-pink-400 transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <SafeIcon icon={FiHeart} />
            <span className="text-sm">{post.stats.resonance.toLocaleString()}</span>
            <span className="text-xs text-white/40">resonance</span>
          </motion.button>

          <motion.button
            className="flex items-center space-x-2 text-white/60 hover:text-blue-400 transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <SafeIcon icon={FiBrain} />
            <span className="text-sm">{post.stats.neuralShares}</span>
            <span className="text-xs text-white/40">neural shares</span>
          </motion.button>

          <motion.button
            className="flex items-center space-x-2 text-white/60 hover:text-purple-400 transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <SafeIcon icon={FiZap} />
            <span className="text-sm">{post.stats.quantumLikes}</span>
            <span className="text-xs text-white/40">quantum likes</span>
          </motion.button>

          <motion.button
            className="flex items-center space-x-2 text-white/60 hover:text-cyan-400 transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <SafeIcon icon={FiEye} />
            <span className="text-sm">{post.stats.dimensionalViews.toLocaleString()}</span>
            <span className="text-xs text-white/40">views</span>
          </motion.button>
        </div>

        <div className="flex items-center space-x-2">
          <motion.button
            className="p-2 text-white/60 hover:text-white hover:bg-white/10 rounded-lg transition-all"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <SafeIcon icon={FiBookmark} />
          </motion.button>
          
          <motion.button
            className="p-2 text-white/60 hover:text-white hover:bg-white/10 rounded-lg transition-all"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <SafeIcon icon={FiMoreHorizontal} />
          </motion.button>
        </div>
      </div>
    </motion.div>
  );

  useEffect(() => {
    setPosts(revolutionaryPosts);
  }, []);

  return (
    <motion.div
      className="p-3 sm:p-6"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      {/* Revolutionary Header */}
      <div className="flex flex-col lg:flex-row lg:items-center justify-between mb-6 sm:mb-8 space-y-4 lg:space-y-0">
        <div>
          <motion.h1
            className="text-2xl sm:text-3xl font-bold text-white mb-2 flex items-center"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
          >
            <SafeIcon icon={FiBrain} className="mr-3 text-purple-400" />
            Neural Social Hub
            <span className="ml-3 text-xs bg-gradient-to-r from-purple-500 to-pink-500 text-white px-2 py-1 rounded-full animate-pulse">
              WORLD FIRST
            </span>
          </motion.h1>
          <p className="text-white/60 text-sm sm:text-base">
            The first neural-connected social platform for music creators
          </p>
        </div>

        {/* Real-time Stats */}
        <motion.div
          className="flex flex-col sm:flex-row items-start sm:items-center space-y-2 sm:space-y-0 sm:space-x-4 text-sm"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3 }}
        >
          <div className="flex items-center space-x-2">
            <SafeIcon icon={FiWifi} className="text-green-400" />
            <span className="text-white/80">{realTimeListeners.toLocaleString()} minds connected</span>
          </div>
          <div className="flex items-center space-x-2">
            <SafeIcon icon={FiGlobe} className="text-blue-400" />
            <span className="text-white/80">Global vibe: {globalVibes}</span>
          </div>
          <div className="flex items-center space-x-2">
            <SafeIcon icon={FiZap} className="text-yellow-400" />
            <span className="text-white/80">{emotionalResonance}% resonance</span>
          </div>
        </motion.div>
      </div>

      {/* Revolutionary Features Navigation */}
      <motion.div
        className="card-3d p-4 sm:p-6 mb-6 sm:mb-8"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
      >
        <h2 className="text-lg sm:text-xl font-bold text-white mb-4 flex items-center">
          <SafeIcon icon={FiLayers} className="mr-2 text-cyan-400" />
          Revolutionary Features
        </h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 mb-6">
          {revolutionaryFeatures.map((feature, index) => (
            <motion.button
              key={feature.id}
              className={`p-3 sm:p-4 rounded-xl border transition-all text-left relative overflow-hidden ${
                activeTab === feature.id
                  ? 'border-purple-500/50 bg-gradient-to-r from-purple-500/20 to-blue-500/20'
                  : 'border-white/10 hover:border-white/20 bg-white/5 hover:bg-white/10'
              }`}
              onClick={() => setActiveTab(feature.id)}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 + index * 0.1 }}
              whileHover={{ scale: 1.02, y: -2 }}
              whileTap={{ scale: 0.98 }}
            >
              {/* Badge */}
              <div className="absolute top-2 right-2">
                <span className="text-xs bg-gradient-to-r from-orange-500 to-red-500 text-white px-2 py-1 rounded-full font-bold animate-pulse">
                  {feature.badge}
                </span>
              </div>

              <div className={`w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r ${feature.color} rounded-xl flex items-center justify-center mb-3`}>
                <SafeIcon icon={feature.icon} className="text-white text-lg sm:text-xl" />
              </div>
              
              <h3 className="text-white font-semibold text-sm sm:text-base mb-1">{feature.name}</h3>
              <p className="text-white/60 text-xs sm:text-sm leading-relaxed">{feature.description}</p>
            </motion.button>
          ))}
        </div>

        {/* Neural Sync Toggle */}
        <motion.div
          className="flex flex-col sm:flex-row sm:items-center sm:justify-between space-y-3 sm:space-y-0 p-4 bg-gradient-to-r from-purple-500/20 to-blue-500/20 rounded-xl border border-purple-500/30"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.8 }}
        >
          <div>
            <h3 className="text-white font-semibold mb-1 flex items-center">
              <SafeIcon icon={FiBrain} className="mr-2 text-purple-400" />
              Neural Sync
              {neuralSync && (
                <span className="ml-2 text-xs bg-green-500 text-white px-2 py-1 rounded-full animate-pulse">
                  CONNECTED
                </span>
              )}
            </h3>
            <p className="text-white/70 text-sm">
              {neuralSync 
                ? `Connected to ${quantumConnections.toLocaleString()} minds across the neural network`
                : 'Connect your consciousness to the global music neural network'
              }
            </p>
          </div>
          
          <motion.button
            className={`px-6 py-3 rounded-xl font-semibold transition-all ${
              neuralSync 
                ? 'bg-gradient-to-r from-green-500 to-teal-500 text-white'
                : 'bg-gradient-to-r from-purple-500 to-blue-500 text-white hover:opacity-90'
            }`}
            onClick={handleNeuralSync}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {neuralSync ? 'Disconnect Neural Sync' : 'Activate Neural Sync'}
          </motion.button>
        </motion.div>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 sm:gap-8">
        {/* Main Feed */}
        <div className="lg:col-span-3">
          {/* Post Creation */}
          <motion.div
            className="card-3d p-4 sm:p-6 mb-6 sm:mb-8"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
          >
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full overflow-hidden border-2 border-purple-500/50">
                <img
                  src={user?.avatar || 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=150&h=150&fit=crop&crop=face'}
                  alt="Your avatar"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex-1">
                <h3 className="text-white font-semibold">Share your neural thoughts...</h3>
                <p className="text-white/60 text-sm">Express your creative consciousness</p>
              </div>
            </div>

            {/* Mood Selector */}
            <div className="mb-4">
              <p className="text-white/80 text-sm mb-2">Current emotional state:</p>
              <div className="flex flex-wrap gap-2">
                {moods.map((mood) => (
                  <motion.button
                    key={mood.id}
                    className={`px-3 py-1 rounded-full text-sm transition-all ${
                      selectedMood === mood.id
                        ? 'bg-gradient-to-r from-purple-500 to-blue-500 text-white'
                        : 'bg-white/10 text-white/70 hover:bg-white/20'
                    }`}
                    onClick={() => setSelectedMood(mood.id)}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {mood.emoji} {mood.name}
                  </motion.button>
                ))}
              </div>
            </div>

            {/* Post Input */}
            <div className="space-y-4">
              <textarea
                value={newPostContent}
                onChange={(e) => setNewPostContent(e.target.value)}
                placeholder="Share your creative thoughts, neural insights, or quantum inspirations..."
                className="w-full h-24 sm:h-32 bg-white/5 border border-white/20 rounded-xl p-4 text-white placeholder-white/50 focus:outline-none focus:border-purple-500/50 resize-none"
                maxLength={500}
              />
              
              <div className="flex flex-col sm:flex-row sm:items-center justify-between space-y-3 sm:space-y-0">
                <div className="flex items-center space-x-3">
                  <motion.button
                    className="p-2 bg-white/10 hover:bg-white/20 rounded-lg transition-all"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <SafeIcon icon={FiImage} className="text-white/70" />
                  </motion.button>
                  <motion.button
                    className="p-2 bg-white/10 hover:bg-white/20 rounded-lg transition-all"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <SafeIcon icon={FiMicrophone} className="text-white/70" />
                  </motion.button>
                  <motion.button
                    className="p-2 bg-white/10 hover:bg-white/20 rounded-lg transition-all"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <SafeIcon icon={FiMusic} className="text-white/70" />
                  </motion.button>
                </div>

                <div className="flex items-center space-x-3">
                  <span className="text-white/60 text-sm">
                    {newPostContent.length}/500
                  </span>
                  <motion.button
                    className="bg-gradient-to-r from-purple-500 to-blue-500 px-6 py-2 rounded-xl text-white font-semibold hover:opacity-90 transition-opacity"
                    onClick={handleCreatePost}
                    disabled={!newPostContent.trim()}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Neural Broadcast
                  </motion.button>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Revolutionary Posts Feed */}
          <div>
            <AnimatePresence>
              {posts.map((post, index) => renderRevolutionaryPost(post, index))}
            </AnimatePresence>
          </div>
        </div>

        {/* Revolutionary Sidebar */}
        <div className="space-y-6">
          {/* Global Consciousness Meter */}
          <motion.div
            className="card-3d p-4 sm:p-6"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.7 }}
          >
            <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
              <SafeIcon icon={FiGlobe} className="mr-2 text-cyan-400" />
              Global Consciousness
            </h3>
            
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-white/80 text-sm">Collective Mood</span>
                <span className="text-cyan-400 font-semibold capitalize">{globalVibes}</span>
              </div>
              
              <div className="w-full h-2 bg-white/10 rounded-full overflow-hidden">
                <motion.div
                  className="h-full bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full"
                  animate={{ width: `${emotionalResonance}%` }}
                  transition={{ duration: 1 }}
                />
              </div>
              
              <div className="grid grid-cols-2 gap-3 text-center">
                <div className="bg-white/5 rounded-lg p-3">
                  <div className="text-cyan-400 font-bold text-lg">{realTimeListeners.toLocaleString()}</div>
                  <div className="text-white/60 text-xs">Active Minds</div>
                </div>
                <div className="bg-white/5 rounded-lg p-3">
                  <div className="text-purple-400 font-bold text-lg">{quantumConnections.toLocaleString()}</div>
                  <div className="text-white/60 text-xs">Neural Links</div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Quantum Trending */}
          <motion.div
            className="card-3d p-4 sm:p-6"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.8 }}
          >
            <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
              <SafeIcon icon={FiTrendingUp} className="mr-2 text-orange-400" />
              Quantum Trending
            </h3>
            
            <div className="space-y-3">
              {[
                { tag: '#QuantumBeats', minds: '50.2K', resonance: 94 },
                { tag: '#NeuralSync', minds: '38.7K', resonance: 87 },
                { tag: '#EmotionWaves', minds: '42.1K', resonance: 91 },
                { tag: '#DimensionalMusic', minds: '29.5K', resonance: 83 },
                { tag: '#ConsciousnessStream', minds: '33.8K', resonance: 89 }
              ].map((trend, index) => (
                <motion.div
                  key={trend.tag}
                  className="flex items-center justify-between p-3 bg-white/5 hover:bg-white/10 rounded-lg cursor-pointer transition-all"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.9 + index * 0.1 }}
                  whileHover={{ scale: 1.02 }}
                >
                  <div>
                    <div className="text-purple-400 font-semibold text-sm">{trend.tag}</div>
                    <div className="text-white/60 text-xs">{trend.minds} minds connected</div>
                  </div>
                  <div className="text-right">
                    <div className="text-white/80 text-sm font-semibold">{trend.resonance}%</div>
                    <div className="text-white/40 text-xs">resonance</div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Neural Connections */}
          <motion.div
            className="card-3d p-4 sm:p-6"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.9 }}
          >
            <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
              <SafeIcon icon={FiBrain} className="mr-2 text-purple-400" />
              Neural Connections
            </h3>
            
            <div className="space-y-4">
              {[
                { name: 'QuantumComposer', level: 'Transcendent', resonance: 96, avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=150&h=150&fit=crop&crop=face' },
                { name: 'CosmicBeats', level: 'Interdimensional', resonance: 89, avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face' },
                { name: 'NeuralHarmony', level: 'Quantum', resonance: 92, avatar: 'https://images.unsplash.com/photo-1527980965255-d3b416303d12?w=150&h=150&fit=crop&crop=face' }
              ].map((connection, index) => (
                <motion.div
                  key={connection.name}
                  className="flex items-center space-x-3 p-3 bg-white/5 hover:bg-white/10 rounded-lg cursor-pointer transition-all"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1 + index * 0.1 }}
                  whileHover={{ scale: 1.02 }}
                >
                  <div className="relative">
                    <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-purple-500/50">
                      <img src={connection.avatar} alt={connection.name} className="w-full h-full object-cover" />
                    </div>
                    <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-500 rounded-full border-2 border-gray-900" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="text-white font-semibold text-sm truncate">{connection.name}</div>
                    <div className="text-purple-400 text-xs">{connection.level}</div>
                  </div>
                  <div className="text-right">
                    <div className="text-white/80 text-sm">{connection.resonance}%</div>
                    <div className="text-white/40 text-xs">sync</div>
                  </div>
                </motion.div>
              ))}
            </div>
            
            <motion.button
              className="w-full mt-4 bg-gradient-to-r from-purple-500 to-blue-500 text-white py-2 px-4 rounded-lg font-semibold hover:opacity-90 transition-opacity"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Find Neural Matches
            </motion.button>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}

export default Social;