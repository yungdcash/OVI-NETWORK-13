import React, { useState, useMemo } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../../common/SafeIcon';
import { useAuth } from '../../contexts/AuthContext';
import { useToastContext } from '../../contexts/ToastContext';
import { useOptimizedAnimation } from '../../hooks/usePerformance';

const { FiHome, FiCompass, FiMic, FiUsers, FiDollarSign, FiBarChart3, FiUser, FiMusic, FiMenu, FiX, FiGrid, FiLogOut, FiSettings, FiShield, FiBrain } = FiIcons;

function Navigation() {
  const { user, logout, securityLevel } = useAuth();
  const toast = useToastContext();
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const shouldAnimate = useOptimizedAnimation();

  // Ultra-fast memoized menu items
  const menuItems = useMemo(() => [
    { path: '/', icon: FiHome, label: 'Home', color: 'from-blue-400 to-cyan-400', description: 'Your music hub' },
    { path: '/dashboard', icon: FiGrid, label: 'Dashboard', color: 'from-indigo-400 to-purple-400', description: 'Creator insights' },
    { path: '/discover', icon: FiCompass, label: 'Discover', color: 'from-purple-400 to-pink-400', description: 'Find new music' },
    { path: '/studio', icon: FiMic, label: 'Studio', color: 'from-emerald-400 to-green-400', description: 'Create & produce' },
    { path: '/social', icon: FiBrain, label: 'Neural Social', color: 'from-amber-400 to-orange-400', description: 'Revolutionary social platform', badge: 'WORLD FIRST' },
    { path: '/monetization', icon: FiDollarSign, label: 'Monetization', color: 'from-green-400 to-emerald-400', description: 'Earn from music' },
    { path: '/analytics', icon: FiBarChart3, label: 'Analytics', color: 'from-violet-400 to-purple-400', description: 'Track performance' },
    { path: '/profile', icon: FiUser, label: 'Profile', color: 'from-cyan-400 to-blue-400', description: 'Your account' }
  ], []);

  // Ultra-fast memoized security badge
  const securityBadge = useMemo(() => {
    switch (securityLevel) {
      case 'biometric': return { text: 'BIOMETRIC', color: 'from-purple-500 to-pink-500' };
      case 'neural': return { text: 'NEURAL', color: 'from-orange-500 to-red-500' };
      case 'quantum': return { text: 'QUANTUM', color: 'from-green-500 to-teal-500' };
      default: return { text: 'STANDARD', color: 'from-blue-500 to-cyan-500' };
    }
  }, [securityLevel]);

  // Ultra-fast animation variants
  const navVariants = useMemo(() => ({
    hidden: { x: -100, opacity: 0 },
    visible: { x: 0, opacity: 1 }
  }), []);

  const itemVariants = useMemo(() => ({
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0 }
  }), []);

  // Ultra-fast logout handler
  const handleLogout = async () => {
    toast.warning(
      'You are about to logout of your account. Do you want to proceed?',
      {
        title: '🚪 Confirm Logout',
        duration: 0,
        persistent: true,
        action: {
          label: 'Yes, Logout',
          onClick: async () => {
            toast.removeAllToasts();
            const logoutToastId = toast.loading(
              'Signing you out securely...',
              { title: '🔐 Logging Out', persistent: true }
            );
            
            try {
              await logout();
              setMobileMenuOpen(false);
              toast.removeToast(logoutToastId);
              toast.success('Successfully logged out! 👋', { title: '✅ Logout Complete', duration: 2000 });
            } catch (error) {
              toast.removeToast(logoutToastId);
              toast.error('Logout failed. Please try again.', { title: '❌ Error', duration: 3000 });
            }
          }
        },
        secondaryAction: {
          label: 'Keep Me In',
          onClick: () => {
            toast.removeAllToasts();
            toast.info('You\'re still logged in! 🎵', { title: '🎯 Staying Logged In', duration: 2000 });
          }
        }
      }
    );
  };

  return (
    <>
      {/* Desktop Navigation - Ultra-Fast */}
      <motion.nav
        className="hidden lg:flex fixed left-0 top-0 h-full w-80 nav-3d z-40"
        variants={navVariants}
        initial={shouldAnimate ? "hidden" : "visible"}
        animate="visible"
        transition={{ duration: shouldAnimate ? 0.2 : 0, type: "spring", stiffness: 200 }}
      >
        <div className="flex flex-col w-full">
          {/* Brand Header - Ultra-Fast */}
          <div className="p-4 xl:p-6 border-b border-white/10">
            <motion.div
              className="flex items-center space-x-3 mb-4 xl:mb-6"
              whileHover={shouldAnimate ? { scale: 1.01 } : undefined}
              transition={{ duration: 0.067 }}
            >
              <motion.div
                className="relative w-12 h-12 xl:w-14 xl:h-14 rounded-2xl flex items-center justify-center overflow-hidden border-gradient-3d"
                animate={shouldAnimate ? { rotate: 360 } : undefined}
                transition={{ rotate: { duration: 6.67, repeat: Infinity, ease: "linear" } }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500 to-blue-500" />
                <SafeIcon icon={FiMusic} className="text-white text-xl xl:text-2xl relative z-10" />
              </motion.div>
              <div>
                <h1 className="text-xl xl:text-2xl font-bold text-gradient-3d">Ovi Network</h1>
                <p className="text-xs text-white/60 font-medium">Professional Platform</p>
              </div>
            </motion.div>

            {/* User Profile Section - Ultra-Fast */}
            {user && (
              <motion.div
                className="card-3d p-3 xl:p-4"
                initial={shouldAnimate ? { opacity: 0, y: 20 } : undefined}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: shouldAnimate ? 0.1 : 0, duration: 0.067 }}
              >
                <div className="flex items-center space-x-3">
                  <div className="relative">
                    <img
                      src={user.avatar || 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=150&h=150&fit=crop&crop=face'}
                      alt={user.name}
                      className="w-10 h-10 xl:w-12 xl:h-12 avatar-3d online"
                      loading="lazy"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-white font-semibold truncate text-sm">{user.name}</p>
                    <div className="flex items-center space-x-2 mt-1">
                      <span className={`text-xs px-2 py-1 rounded-full bg-gradient-to-r ${securityBadge.color} text-white font-bold animate-pulse-ultra`}>
                        {securityBadge.text}
                      </span>
                      <SafeIcon icon={FiShield} className="text-purple-400 text-xs" />
                    </div>
                  </div>
                </div>
              </motion.div>
            )}
          </div>

          {/* Navigation Menu - Ultra-Fast */}
          <div className="flex-1 p-4 xl:p-6 overflow-y-auto">
            <div className="space-y-2">
              {menuItems.map((item, index) => {
                const isActive = location.pathname === item.path;
                return (
                  <Link key={item.path} to={item.path}>
                    <motion.div
                      className={`nav-item-3d group cursor-pointer relative ${isActive ? 'active' : ''}`}
                      variants={itemVariants}
                      initial={shouldAnimate ? "hidden" : "visible"}
                      animate="visible"
                      transition={{ delay: shouldAnimate ? index * 0.033 : 0, duration: 0.067 }}
                      whileHover={shouldAnimate ? { scale: 1.01, x: 2 } : undefined}
                      whileTap={shouldAnimate ? { scale: 0.99 } : undefined}
                    >
                      {/* Badge for revolutionary features */}
                      {item.badge && (
                        <div className="absolute -top-2 -right-2 z-10">
                          <span className="text-xs bg-gradient-to-r from-orange-500 to-red-500 text-white px-2 py-1 rounded-full font-bold animate-pulse-ultra">
                            {item.badge}
                          </span>
                        </div>
                      )}

                      <div className="flex items-center space-x-3 xl:space-x-4">
                        <motion.div
                          className={`w-10 h-10 xl:w-11 xl:h-11 rounded-xl flex items-center justify-center ${
                            isActive
                              ? `bg-gradient-to-r ${item.color}`
                              : 'bg-white/10 group-hover:bg-white/20'
                          }`}
                          whileHover={shouldAnimate ? { rotate: 3 } : undefined}
                          transition={{ duration: 0.067 }}
                        >
                          <SafeIcon
                            icon={item.icon}
                            className={`text-lg ${
                              isActive ? 'text-white' : 'text-white/70 group-hover:text-white'
                            }`}
                          />
                        </motion.div>
                        <div className="flex-1 min-w-0">
                          <p className={`font-semibold text-sm ${
                            isActive ? 'text-white' : 'text-white/80 group-hover:text-white'
                          }`}>
                            {item.label}
                          </p>
                          <p className="text-xs text-white/50 group-hover:text-white/70 transition-colors duration-ultra">
                            {item.description}
                          </p>
                        </div>
                        {isActive && (
                          <motion.div
                            initial={{ opacity: 0, scale: 0 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.067, duration: 0.067 }}
                            className="w-2 h-2 bg-gradient-to-r from-purple-400 to-blue-400 rounded-full animate-pulse-ultra"
                          />
                        )}
                      </div>
                    </motion.div>
                  </Link>
                );
              })}
            </div>
          </div>

          {/* Bottom Actions - Ultra-Fast */}
          <div className="p-4 xl:p-6 border-t border-white/10 space-y-3">
            <Link to="/settings">
              <motion.button
                className="btn-3d-secondary w-full flex items-center justify-center space-x-3"
                whileHover={shouldAnimate ? { scale: 1.01 } : undefined}
                whileTap={shouldAnimate ? { scale: 0.99 } : undefined}
                transition={{ duration: 0.067 }}
              >
                <SafeIcon icon={FiSettings} className="text-white/70" />
                <span className="text-white/80">Settings</span>
              </motion.button>
            </Link>
            <motion.button
              onClick={handleLogout}
              className="w-full flex items-center justify-center space-x-3 p-3 rounded-xl bg-gradient-to-r from-red-500/20 to-pink-500/20 border border-red-500/30 text-red-400 hover:from-red-500/30 hover:to-pink-500/30 transition-all duration-ultra"
              whileHover={shouldAnimate ? { scale: 1.01 } : undefined}
              whileTap={shouldAnimate ? { scale: 0.99 } : undefined}
            >
              <SafeIcon icon={FiLogOut} />
              <span>Logout</span>
            </motion.button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Navigation - Ultra-Fast */}
      <div className="lg:hidden">
        {/* Professional Mobile Header - Ultra-Fast */}
        <motion.div
          className="fixed top-0 left-0 right-0 h-16 bg-gradient-to-r from-gray-900/95 via-purple-900/90 to-blue-900/95 backdrop-blur-xl border-b border-white/10 z-50"
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.2 }}
        >
          <div className="flex items-center justify-between px-4 h-full">
            {/* Left: Brand */}
            <Link to="/" className="flex items-center space-x-3">
              <motion.div
                className="w-10 h-10 bg-gradient-to-r from-purple-500 to-blue-500 rounded-xl flex items-center justify-center"
                animate={shouldAnimate ? { rotate: 360 } : undefined}
                transition={{ duration: 6.67, repeat: Infinity, ease: "linear" }}
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
                    whileHover={shouldAnimate ? { scale: 1.05 } : undefined}
                    whileTap={shouldAnimate ? { scale: 0.98 } : undefined}
                    transition={{ duration: 0.067 }}
                    loading="lazy"
                  />
                </Link>
              )}

              {/* Professional Menu Button */}
              <motion.button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="relative w-10 h-10 bg-white/10 hover:bg-white/20 rounded-xl flex items-center justify-center border border-white/10 transition-all duration-ultra"
                whileHover={shouldAnimate ? { scale: 1.03, backgroundColor: 'rgba(255,255,255,0.15)' } : undefined}
                whileTap={shouldAnimate ? { scale: 0.97 } : undefined}
              >
                <motion.div
                  animate={{ rotate: mobileMenuOpen ? 45 : 0 }}
                  transition={{ duration: 0.067 }}
                >
                  <SafeIcon icon={mobileMenuOpen ? FiX : FiMenu} className="text-white text-lg" />
                </motion.div>
              </motion.button>
            </div>
          </div>
        </motion.div>

        {/* Professional Mobile Menu Dropdown - RIGHT SIDE */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <>
              {/* Backdrop */}
              <motion.div
                className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 lg:hidden"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.067 }}
                onClick={() => setMobileMenuOpen(false)}
              />

              {/* Dropdown Menu - RIGHT SIDE SLIDE IN */}
              <motion.div
                className="fixed top-16 right-0 bottom-0 w-80 max-w-[85vw] bg-gradient-to-br from-gray-900/98 via-purple-900/95 to-blue-900/98 backdrop-blur-xl border-l border-white/20 shadow-2xl z-50 overflow-y-auto"
                initial={{ opacity: 0, x: '100%' }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: '100%' }}
                transition={{ type: "spring", stiffness: 400, damping: 40, duration: 0.133 }}
              >
                {/* User Info Header */}
                {user && (
                  <motion.div
                    className="p-4 border-b border-white/10 bg-gradient-to-r from-purple-500/10 to-blue-500/10"
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.033, duration: 0.067 }}
                  >
                    <div className="flex items-center space-x-3">
                      <img
                        src={user.avatar || 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=150&h=150&fit=crop&crop=face'}
                        alt={user.name}
                        className="w-12 h-12 rounded-full object-cover border-2 border-white/20"
                        loading="lazy"
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
                <div className="p-2">
                  {menuItems.map((item, index) => {
                    const isActive = location.pathname === item.path;
                    return (
                      <Link key={item.path} to={item.path} onClick={() => setMobileMenuOpen(false)}>
                        <motion.div
                          className={`flex items-center space-x-3 p-3 m-1 rounded-xl transition-all duration-ultra relative ${
                            isActive
                              ? 'bg-gradient-to-r from-purple-500/20 to-blue-500/20 border border-purple-500/30'
                              : 'hover:bg-white/10'
                          }`}
                          initial={{ opacity: 0, x: 50 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.033 + index * 0.01, duration: 0.067 }}
                          whileHover={shouldAnimate ? { scale: 1.01, x: -2 } : undefined}
                          whileTap={shouldAnimate ? { scale: 0.99 } : undefined}
                        >
                          {/* Mobile Badge */}
                          {item.badge && (
                            <div className="absolute -top-1 -right-1">
                              <span className="text-xs bg-gradient-to-r from-orange-500 to-red-500 text-white px-2 py-1 rounded-full font-bold animate-pulse-ultra">
                                {item.badge}
                              </span>
                            </div>
                          )}

                          <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${
                            isActive ? `bg-gradient-to-r ${item.color}` : 'bg-white/10'
                          }`}>
                            <SafeIcon icon={item.icon} className="text-white text-lg" />
                          </div>
                          <div className="flex-1">
                            <p className="text-white font-semibold">{item.label}</p>
                            <p className="text-white/60 text-xs">{item.description}</p>
                          </div>
                          {isActive && (
                            <motion.div
                              className="w-2 h-2 bg-gradient-to-r from-purple-400 to-blue-400 rounded-full"
                              initial={{ scale: 0 }}
                              animate={{ scale: 1 }}
                              transition={{ delay: 0.067, duration: 0.067 }}
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
                        className="w-full flex items-center space-x-3 p-3 rounded-xl bg-white/5 hover:bg-white/10 transition-all duration-ultra text-white/80"
                        whileHover={shouldAnimate ? { scale: 1.01 } : undefined}
                        whileTap={shouldAnimate ? { scale: 0.99 } : undefined}
                      >
                        <SafeIcon icon={FiSettings} className="text-lg" />
                        <span className="font-medium">Settings</span>
                      </motion.button>
                    </Link>
                    <motion.button
                      className="w-full flex items-center space-x-3 p-3 rounded-xl bg-gradient-to-r from-red-500/20 to-pink-500/20 border border-red-500/30 text-red-400 hover:bg-red-500/30 transition-all duration-ultra"
                      onClick={handleLogout}
                      whileHover={shouldAnimate ? { scale: 1.01 } : undefined}
                      whileTap={shouldAnimate ? { scale: 0.99 } : undefined}
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

export default React.memo(Navigation);