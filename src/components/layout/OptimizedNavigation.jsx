import React, { useState, useMemo } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../../common/SafeIcon';
import { useAuth } from '../../contexts/AuthContext';
import { useOptimizedAnimation } from '../../hooks/usePerformance';

const { FiHome, FiCompass, FiMic, FiUsers, FiDollarSign, FiBarChart3, FiUser, FiMusic, FiMenu, FiX, FiGrid, FiLogOut, FiSettings } = FiIcons;

function OptimizedNavigation() {
  const { user, logout, securityLevel } = useAuth();
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const shouldAnimate = useOptimizedAnimation();

  const menuItems = useMemo(() => [
    { path: '/', icon: FiHome, label: 'Home', color: 'from-blue-400 to-cyan-400' },
    { path: '/dashboard', icon: FiGrid, label: 'Dashboard', color: 'from-indigo-400 to-purple-400' },
    { path: '/discover', icon: FiCompass, label: 'Discover', color: 'from-purple-400 to-pink-400' },
    { path: '/studio', icon: FiMic, label: 'Studio', color: 'from-emerald-400 to-green-400' },
    { path: '/social', icon: FiUsers, label: 'Social', color: 'from-amber-400 to-orange-400' },
    { path: '/monetization', icon: FiDollarSign, label: 'Monetization', color: 'from-green-400 to-emerald-400' },
    { path: '/analytics', icon: FiBarChart3, label: 'Analytics', color: 'from-violet-400 to-purple-400' },
    { path: '/profile', icon: FiUser, label: 'Profile', color: 'from-cyan-400 to-blue-400' }
  ], []);

  const securityBadge = useMemo(() => {
    switch (securityLevel) {
      case 'biometric': return { text: 'BIOMETRIC', color: 'from-purple-500 to-pink-500' };
      case 'neural': return { text: 'NEURAL', color: 'from-orange-500 to-red-500' };
      case 'quantum': return { text: 'QUANTUM', color: 'from-green-500 to-teal-500' };
      default: return { text: 'STANDARD', color: 'from-blue-500 to-cyan-500' };
    }
  }, [securityLevel]);

  const navVariants = useMemo(() => ({
    hidden: { x: -100, opacity: 0 },
    visible: { x: 0, opacity: 1 }
  }), []);

  const itemVariants = useMemo(() => ({
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0 }
  }), []);

  const handleLogout = async () => {
    try {
      await logout();
      setMobileMenuOpen(false);
    } catch (error) {
      console.error('Logout error:', error);
    }
  };

  const handleMenuItemClick = () => {
    setMobileMenuOpen(false);
  };

  return (
    <>
      {/* Desktop Navigation */}
      <motion.nav
        className="hidden lg:flex fixed left-0 top-0 h-full w-80 nav-3d z-40"
        variants={navVariants}
        initial={shouldAnimate ? "hidden" : "visible"}
        animate="visible"
        transition={{ duration: shouldAnimate ? 0.5 : 0 }}
      >
        <div className="flex flex-col w-full">
          {/* Brand Header */}
          <div className="p-6 border-b border-white/10">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-blue-500 rounded-2xl flex items-center justify-center">
                <SafeIcon icon={FiMusic} className="text-white text-xl" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-gradient-3d">Ovi Network</h1>
                <p className="text-xs text-white/60">Professional Platform</p>
              </div>
            </div>

            {/* User Profile */}
            {user && (
              <div className="card-3d p-4">
                <div className="flex items-center space-x-3">
                  <img
                    src={user.avatar || 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=150&h=150&fit=crop&crop=face'}
                    alt={user.name}
                    className="w-10 h-10 rounded-full object-cover"
                    loading="lazy"
                  />
                  <div className="flex-1 min-w-0">
                    <p className="text-white font-semibold truncate text-sm">{user.name}</p>
                    <span className={`text-xs px-2 py-1 rounded-full bg-gradient-to-r ${securityBadge.color} text-white font-bold`}>
                      {securityBadge.text}
                    </span>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Navigation Menu */}
          <div className="flex-1 p-6 overflow-y-auto">
            <div className="space-y-2">
              {menuItems.map((item, index) => {
                const isActive = location.pathname === item.path;
                return (
                  <Link key={item.path} to={item.path}>
                    <motion.div
                      className={`nav-item-3d group cursor-pointer ${isActive ? 'active' : ''}`}
                      variants={itemVariants}
                      initial={shouldAnimate ? "hidden" : "visible"}
                      animate="visible"
                      transition={{ 
                        delay: shouldAnimate ? index * 0.05 : 0, 
                        duration: shouldAnimate ? 0.3 : 0 
                      }}
                      whileHover={shouldAnimate ? { scale: 1.02, x: 4 } : undefined}
                    >
                      <div className="flex items-center space-x-3">
                        <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${
                          isActive ? `bg-gradient-to-r ${item.color}` : 'bg-white/10'
                        }`}>
                          <SafeIcon icon={item.icon} className="text-white" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className={`font-semibold text-sm ${
                            isActive ? 'text-white' : 'text-white/80'
                          }`}>
                            {item.label}
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  </Link>
                );
              })}
            </div>
          </div>

          {/* Bottom Actions */}
          <div className="p-6 border-t border-white/10 space-y-3">
            <Link to="/settings">
              <motion.button
                className="btn-3d-secondary w-full flex items-center justify-center space-x-3"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <SafeIcon icon={FiSettings} className="text-white/70" />
                <span className="text-white/80">Settings</span>
              </motion.button>
            </Link>
            
            <motion.button
              onClick={handleLogout}
              className="w-full flex items-center justify-center space-x-3 p-3 rounded-xl bg-gradient-to-r from-red-500/20 to-pink-500/20 border border-red-500/30 text-red-400 hover:from-red-500/30 hover:to-pink-500/30 transition-all"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <SafeIcon icon={FiLogOut} className="text-lg" />
              <span className="font-medium">Logout</span>
            </motion.button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Navigation */}
      <div className="lg:hidden">
        {/* Professional Mobile Header */}
        <motion.div 
          className="fixed top-0 left-0 right-0 h-16 bg-gradient-to-r from-gray-900/95 via-purple-900/90 to-blue-900/95 backdrop-blur-xl border-b border-white/10 z-50"
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center justify-between px-4 h-full">
            {/* Left: Brand */}
            <Link to="/" className="flex items-center space-x-3">
              <motion.div 
                className="w-10 h-10 bg-gradient-to-r from-purple-500 to-blue-500 rounded-xl flex items-center justify-center"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <SafeIcon icon={FiMusic} className="text-white text-lg" />
              </motion.div>
              <div>
                <h1 className="text-lg font-bold text-gradient-3d">Ovi Network</h1>
                <p className="text-xs text-white/60 leading-none">Professional</p>
              </div>
            </Link>

            {/* Right: User Profile & Menu */}
            <div className="flex items-center space-x-3">
              {/* User Avatar (Mobile) */}
              {user && (
                <Link to="/profile" className="flex items-center">
                  <motion.img
                    src={user.avatar || 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=150&h=150&fit=crop&crop=face'}
                    alt={user.name}
                    className="w-8 h-8 rounded-full object-cover border-2 border-white/20"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  />
                </Link>
              )}

              {/* Professional Menu Button */}
              <motion.button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="relative w-10 h-10 bg-white/10 hover:bg-white/20 rounded-xl flex items-center justify-center border border-white/10 transition-all"
                whileHover={{ scale: 1.05, backgroundColor: 'rgba(255,255,255,0.15)' }}
                whileTap={{ scale: 0.95 }}
              >
                <motion.div
                  animate={{ rotate: mobileMenuOpen ? 45 : 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <SafeIcon 
                    icon={mobileMenuOpen ? FiX : FiMenu} 
                    className="text-white text-lg" 
                  />
                </motion.div>
              </motion.button>
            </div>
          </div>
        </motion.div>

        {/* Professional Mobile Menu Dropdown */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <>
              {/* Backdrop */}
              <motion.div
                className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 lg:hidden"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setMobileMenuOpen(false)}
              />

              {/* Dropdown Menu */}
              <motion.div
                className="fixed top-16 right-4 w-80 max-w-[calc(100vw-2rem)] bg-gradient-to-br from-gray-900/98 via-purple-900/95 to-blue-900/98 backdrop-blur-xl rounded-2xl border border-white/20 shadow-2xl z-50 overflow-hidden"
                initial={{ opacity: 0, scale: 0.95, y: -20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: -20 }}
                transition={{ 
                  type: "spring", 
                  stiffness: 300, 
                  damping: 30,
                  duration: 0.3 
                }}
              >
                {/* User Info Header */}
                {user && (
                  <motion.div 
                    className="p-4 border-b border-white/10 bg-gradient-to-r from-purple-500/10 to-blue-500/10"
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                  >
                    <div className="flex items-center space-x-3">
                      <img
                        src={user.avatar || 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=150&h=150&fit=crop&crop=face'}
                        alt={user.name}
                        className="w-12 h-12 rounded-full object-cover border-2 border-white/20"
                      />
                      <div className="flex-1 min-w-0">
                        <p className="text-white font-semibold truncate">{user.name}</p>
                        <span className={`text-xs px-2 py-1 rounded-full bg-gradient-to-r ${securityBadge.color} text-white font-bold`}>
                          {securityBadge.text}
                        </span>
                      </div>
                    </div>
                  </motion.div>
                )}

                {/* Navigation Items */}
                <div className="p-2 max-h-96 overflow-y-auto">
                  {menuItems.map((item, index) => {
                    const isActive = location.pathname === item.path;
                    return (
                      <Link
                        key={item.path}
                        to={item.path}
                        onClick={handleMenuItemClick}
                      >
                        <motion.div
                          className={`flex items-center space-x-3 p-3 m-1 rounded-xl transition-all ${
                            isActive 
                              ? 'bg-gradient-to-r from-purple-500/20 to-blue-500/20 border border-purple-500/30' 
                              : 'hover:bg-white/10'
                          }`}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.1 + index * 0.03 }}
                          whileHover={{ scale: 1.02, x: 4 }}
                          whileTap={{ scale: 0.98 }}
                        >
                          <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${
                            isActive ? `bg-gradient-to-r ${item.color}` : 'bg-white/10'
                          }`}>
                            <SafeIcon icon={item.icon} className="text-white text-lg" />
                          </div>
                          <div className="flex-1">
                            <p className="text-white font-semibold">{item.label}</p>
                          </div>
                          {isActive && (
                            <motion.div
                              className="w-2 h-2 bg-gradient-to-r from-purple-400 to-blue-400 rounded-full"
                              initial={{ scale: 0 }}
                              animate={{ scale: 1 }}
                              transition={{ delay: 0.2 }}
                            />
                          )}
                        </motion.div>
                      </Link>
                    );
                  })}
                </div>

                {/* Bottom Actions */}
                <div className="p-3 border-t border-white/10 bg-gradient-to-r from-gray-900/50 to-purple-900/30">
                  <div className="space-y-2">
                    <Link to="/settings" onClick={() => setMobileMenuOpen(false)}>
                      <motion.button
                        className="w-full flex items-center space-x-3 p-3 rounded-xl bg-white/5 hover:bg-white/10 transition-all text-white/80"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        <SafeIcon icon={FiSettings} className="text-lg" />
                        <span className="font-medium">Settings</span>
                      </motion.button>
                    </Link>
                    
                    <motion.button
                      className="w-full flex items-center space-x-3 p-3 rounded-xl bg-gradient-to-r from-red-500/20 to-pink-500/20 border border-red-500/30 text-red-400 hover:bg-red-500/30 transition-all"
                      onClick={handleLogout}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <SafeIcon icon={FiLogOut} className="text-lg" />
                      <span className="font-medium">Logout</span>
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </div>
    </>
  );
}

export default React.memo(OptimizedNavigation);