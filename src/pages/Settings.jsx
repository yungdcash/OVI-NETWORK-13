import React, { useState } from 'react';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';
import { useAuth } from '../contexts/AuthContext';
import { useToastContext } from '../contexts/ToastContext';

const {
  FiUser, FiShield, FiBell, FiEye, FiLock, FiGlobe, FiMusic, FiDollarSign,
  FiMoon, FiSun, FiMonitor, FiCheck, FiX, FiEdit, FiTrash2, FiDownload,
  FiUpload, FiRefreshCw, FiSave, FiSettings, FiHelpCircle, FiLogOut,
  FiMail, FiPhone, FiMapPin, FiCalendar, FiCamera, FiKey, FiCreditCard
} = FiIcons;

function Settings() {
  const { user, profile, logout } = useAuth();
  const toast = useToastContext();
  const [activeTab, setActiveTab] = useState('profile');
  const [isLoading, setIsLoading] = useState(false);

  const [settings, setSettings] = useState({
    profile: {
      displayName: profile?.display_name || user?.name || '',
      bio: profile?.bio || '',
      location: profile?.location || '',
      website: profile?.website || '',
      avatar: profile?.avatar_url || user?.avatar || '',
    },
    privacy: {
      profileVisibility: 'public',
      showEmail: false,
      showLocation: true,
      allowMessages: true,
      showOnlineStatus: true,
    },
    notifications: {
      emailNotifications: true,
      pushNotifications: true,
      newFollowers: true,
      trackLikes: true,
      comments: true,
      mentions: true,
      newsletter: false,
    },
    appearance: {
      theme: 'dark',
      language: 'en',
      timezone: 'UTC',
      compactMode: false,
    },
    security: {
      twoFactorEnabled: false,
      loginAlerts: true,
      sessionTimeout: '30',
      securityLevel: profile?.security_level || 'standard',
    },
    monetization: {
      payoutMethod: 'bank',
      taxCountry: '',
      currency: 'USD',
      autoWithdraw: false,
      minWithdrawAmount: 50,
    }
  });

  const settingsTabs = [
    {
      id: 'profile',
      label: 'Profile',
      icon: FiUser,
      color: 'from-blue-500 to-cyan-500'
    },
    {
      id: 'security',
      label: 'Security',
      icon: FiShield,
      color: 'from-purple-500 to-pink-500'
    },
    {
      id: 'privacy',
      label: 'Privacy',
      icon: FiEye,
      color: 'from-green-500 to-teal-500'
    },
    {
      id: 'notifications',
      label: 'Notifications',
      icon: FiBell,
      color: 'from-orange-500 to-red-500'
    },
    {
      id: 'appearance',
      label: 'Appearance',
      icon: FiMonitor,
      color: 'from-indigo-500 to-purple-500'
    },
    {
      id: 'monetization',
      label: 'Monetization',
      icon: FiDollarSign,
      color: 'from-yellow-500 to-orange-500'
    }
  ];

  const handleSaveSettings = async () => {
    setIsLoading(true);
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      toast.success(
        'Your settings have been saved successfully! All changes are now active.',
        {
          title: '✅ Settings Saved',
          duration: 4000
        }
      );
    } catch (error) {
      toast.error(
        'Failed to save settings. Please try again.',
        {
          title: '❌ Save Failed',
          duration: 5000,
          action: {
            label: 'Retry',
            onClick: handleSaveSettings
          }
        }
      );
    } finally {
      setIsLoading(false);
    }
  };

  const handleResetSettings = () => {
    toast.warning(
      'This will reset all settings to their default values. Are you sure?',
      {
        title: '⚠️ Reset Settings',
        duration: 0,
        persistent: true,
        action: {
          label: 'Yes, Reset',
          onClick: () => {
            setSettings({
              ...settings,
              [activeTab]: getDefaultSettings(activeTab)
            });
            toast.success('Settings have been reset to defaults');
          }
        },
        secondaryAction: {
          label: 'Cancel',
          onClick: () => toast.removeAllToasts()
        }
      }
    );
  };

  const getDefaultSettings = (tab) => {
    const defaults = {
      profile: {
        displayName: user?.name || '',
        bio: '',
        location: '',
        website: '',
        avatar: user?.avatar || '',
      },
      privacy: {
        profileVisibility: 'public',
        showEmail: false,
        showLocation: true,
        allowMessages: true,
        showOnlineStatus: true,
      },
      notifications: {
        emailNotifications: true,
        pushNotifications: true,
        newFollowers: true,
        trackLikes: true,
        comments: true,
        mentions: true,
        newsletter: false,
      },
      appearance: {
        theme: 'dark',
        language: 'en',
        timezone: 'UTC',
        compactMode: false,
      },
      security: {
        twoFactorEnabled: false,
        loginAlerts: true,
        sessionTimeout: '30',
        securityLevel: 'standard',
      },
      monetization: {
        payoutMethod: 'bank',
        taxCountry: '',
        currency: 'USD',
        autoWithdraw: false,
        minWithdrawAmount: 50,
      }
    };
    return defaults[tab];
  };

  const updateSetting = (category, key, value) => {
    setSettings(prev => ({
      ...prev,
      [category]: {
        ...prev[category],
        [key]: value
      }
    }));
  };

  const renderProfileSettings = () => (
    <div className="space-y-6">
      {/* Avatar Section */}
      <div className="card-3d p-6">
        <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
          <SafeIcon icon={FiCamera} className="mr-2 text-blue-400" />
          Profile Picture
        </h3>
        <div className="flex items-center space-x-6">
          <div className="w-24 h-24 rounded-full overflow-hidden border-2 border-white/20">
            <img
              src={settings.profile.avatar || 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=150&h=150&fit=crop&crop=face'}
              alt="Profile"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="space-y-3">
            <motion.button
              className="btn-3d-primary flex items-center space-x-2"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <SafeIcon icon={FiUpload} />
              <span>Upload New</span>
            </motion.button>
            <motion.button
              className="btn-3d-secondary flex items-center space-x-2"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <SafeIcon icon={FiTrash2} />
              <span>Remove</span>
            </motion.button>
          </div>
        </div>
      </div>

      {/* Basic Info */}
      <div className="card-3d p-6">
        <h3 className="text-lg font-semibold text-white mb-4">Basic Information</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-white/80 text-sm mb-2">Display Name</label>
            <input
              type="text"
              value={settings.profile.displayName}
              onChange={(e) => updateSetting('profile', 'displayName', e.target.value)}
              className="input-3d w-full"
              placeholder="Your display name"
            />
          </div>
          <div>
            <label className="block text-white/80 text-sm mb-2">Location</label>
            <input
              type="text"
              value={settings.profile.location}
              onChange={(e) => updateSetting('profile', 'location', e.target.value)}
              className="input-3d w-full"
              placeholder="Your location"
            />
          </div>
        </div>
        <div className="mt-4">
          <label className="block text-white/80 text-sm mb-2">Bio</label>
          <textarea
            value={settings.profile.bio}
            onChange={(e) => updateSetting('profile', 'bio', e.target.value)}
            className="input-3d w-full h-24 resize-none"
            placeholder="Tell us about yourself..."
            maxLength={200}
          />
          <div className="text-white/40 text-xs mt-1">
            {settings.profile.bio.length}/200 characters
          </div>
        </div>
        <div className="mt-4">
          <label className="block text-white/80 text-sm mb-2">Website</label>
          <input
            type="url"
            value={settings.profile.website}
            onChange={(e) => updateSetting('profile', 'website', e.target.value)}
            className="input-3d w-full"
            placeholder="https://your-website.com"
          />
        </div>
      </div>
    </div>
  );

  const renderSecuritySettings = () => (
    <div className="space-y-6">
      {/* Security Level */}
      <div className="card-3d p-6">
        <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
          <SafeIcon icon={FiShield} className="mr-2 text-purple-400" />
          Security Level
        </h3>
        <div className="space-y-4">
          {[
            { id: 'standard', name: 'Standard', desc: 'Email & Password protection' },
            { id: 'biometric', name: 'Biometric', desc: 'Fingerprint + Face recognition' },
            { id: 'neural', name: 'Neural', desc: 'Advanced brainwave patterns' },
            { id: 'quantum', name: 'Quantum', desc: 'Quantum entanglement security' }
          ].map((level) => (
            <motion.label
              key={level.id}
              className={`flex items-center p-4 rounded-xl border cursor-pointer transition-all ${
                settings.security.securityLevel === level.id
                  ? 'border-purple-500/50 bg-purple-500/10'
                  : 'border-white/10 hover:border-white/20'
              }`}
              whileHover={{ scale: 1.02 }}
            >
              <input
                type="radio"
                name="securityLevel"
                value={level.id}
                checked={settings.security.securityLevel === level.id}
                onChange={(e) => updateSetting('security', 'securityLevel', e.target.value)}
                className="sr-only"
              />
              <div className={`w-4 h-4 rounded-full border-2 mr-3 ${
                settings.security.securityLevel === level.id
                  ? 'border-purple-400 bg-purple-400'
                  : 'border-white/40'
              }`} />
              <div>
                <div className="text-white font-medium">{level.name}</div>
                <div className="text-white/60 text-sm">{level.desc}</div>
              </div>
            </motion.label>
          ))}
        </div>
      </div>

      {/* Two-Factor Authentication */}
      <div className="card-3d p-6">
        <h3 className="text-lg font-semibold text-white mb-4">Two-Factor Authentication</h3>
        <div className="flex items-center justify-between">
          <div>
            <div className="text-white">Enable 2FA</div>
            <div className="text-white/60 text-sm">Add an extra layer of security</div>
          </div>
          <motion.button
            className={`relative w-12 h-6 rounded-full transition-colors ${
              settings.security.twoFactorEnabled ? 'bg-green-500' : 'bg-white/20'
            }`}
            onClick={() => updateSetting('security', 'twoFactorEnabled', !settings.security.twoFactorEnabled)}
            whileTap={{ scale: 0.95 }}
          >
            <motion.div
              className="absolute top-1 w-4 h-4 bg-white rounded-full"
              animate={{
                x: settings.security.twoFactorEnabled ? 24 : 2
              }}
              transition={{ type: "spring", stiffness: 500, damping: 30 }}
            />
          </motion.button>
        </div>
      </div>

      {/* Session Management */}
      <div className="card-3d p-6">
        <h3 className="text-lg font-semibold text-white mb-4">Session Management</h3>
        <div className="space-y-4">
          <div>
            <label className="block text-white/80 text-sm mb-2">Session Timeout (minutes)</label>
            <select
              value={settings.security.sessionTimeout}
              onChange={(e) => updateSetting('security', 'sessionTimeout', e.target.value)}
              className="input-3d w-full"
            >
              <option value="15">15 minutes</option>
              <option value="30">30 minutes</option>
              <option value="60">1 hour</option>
              <option value="120">2 hours</option>
              <option value="never">Never</option>
            </select>
          </div>
          <div className="flex items-center justify-between">
            <div>
              <div className="text-white">Login Alerts</div>
              <div className="text-white/60 text-sm">Get notified of new logins</div>
            </div>
            <motion.button
              className={`relative w-12 h-6 rounded-full transition-colors ${
                settings.security.loginAlerts ? 'bg-green-500' : 'bg-white/20'
              }`}
              onClick={() => updateSetting('security', 'loginAlerts', !settings.security.loginAlerts)}
              whileTap={{ scale: 0.95 }}
            >
              <motion.div
                className="absolute top-1 w-4 h-4 bg-white rounded-full"
                animate={{
                  x: settings.security.loginAlerts ? 24 : 2
                }}
                transition={{ type: "spring", stiffness: 500, damping: 30 }}
              />
            </motion.button>
          </div>
        </div>
      </div>
    </div>
  );

  const renderPrivacySettings = () => (
    <div className="space-y-6">
      <div className="card-3d p-6">
        <h3 className="text-lg font-semibold text-white mb-4">Privacy Controls</h3>
        <div className="space-y-4">
          {[
            { key: 'showEmail', label: 'Show Email', desc: 'Display your email on your profile' },
            { key: 'showLocation', label: 'Show Location', desc: 'Display your location publicly' },
            { key: 'allowMessages', label: 'Allow Messages', desc: 'Let others send you messages' },
            { key: 'showOnlineStatus', label: 'Show Online Status', desc: 'Show when you\'re online' }
          ].map((setting) => (
            <div key={setting.key} className="flex items-center justify-between">
              <div>
                <div className="text-white">{setting.label}</div>
                <div className="text-white/60 text-sm">{setting.desc}</div>
              </div>
              <motion.button
                className={`relative w-12 h-6 rounded-full transition-colors ${
                  settings.privacy[setting.key] ? 'bg-green-500' : 'bg-white/20'
                }`}
                onClick={() => updateSetting('privacy', setting.key, !settings.privacy[setting.key])}
                whileTap={{ scale: 0.95 }}
              >
                <motion.div
                  className="absolute top-1 w-4 h-4 bg-white rounded-full"
                  animate={{
                    x: settings.privacy[setting.key] ? 24 : 2
                  }}
                  transition={{ type: "spring", stiffness: 500, damping: 30 }}
                />
              </motion.button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const renderNotificationSettings = () => (
    <div className="space-y-6">
      <div className="card-3d p-6">
        <h3 className="text-lg font-semibold text-white mb-4">Notification Preferences</h3>
        <div className="space-y-4">
          {[
            { key: 'emailNotifications', label: 'Email Notifications', desc: 'Receive notifications via email' },
            { key: 'pushNotifications', label: 'Push Notifications', desc: 'Browser push notifications' },
            { key: 'newFollowers', label: 'New Followers', desc: 'When someone follows you' },
            { key: 'trackLikes', label: 'Track Likes', desc: 'When someone likes your tracks' },
            { key: 'comments', label: 'Comments', desc: 'When someone comments on your content' },
            { key: 'mentions', label: 'Mentions', desc: 'When someone mentions you' },
            { key: 'newsletter', label: 'Newsletter', desc: 'Ovi Network updates and news' }
          ].map((setting) => (
            <div key={setting.key} className="flex items-center justify-between">
              <div>
                <div className="text-white">{setting.label}</div>
                <div className="text-white/60 text-sm">{setting.desc}</div>
              </div>
              <motion.button
                className={`relative w-12 h-6 rounded-full transition-colors ${
                  settings.notifications[setting.key] ? 'bg-green-500' : 'bg-white/20'
                }`}
                onClick={() => updateSetting('notifications', setting.key, !settings.notifications[setting.key])}
                whileTap={{ scale: 0.95 }}
              >
                <motion.div
                  className="absolute top-1 w-4 h-4 bg-white rounded-full"
                  animate={{
                    x: settings.notifications[setting.key] ? 24 : 2
                  }}
                  transition={{ type: "spring", stiffness: 500, damping: 30 }}
                />
              </motion.button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const renderAppearanceSettings = () => (
    <div className="space-y-6">
      <div className="card-3d p-6">
        <h3 className="text-lg font-semibold text-white mb-4">Theme & Display</h3>
        <div className="space-y-4">
          <div>
            <label className="block text-white/80 text-sm mb-2">Theme</label>
            <div className="grid grid-cols-3 gap-3">
              {[
                { id: 'dark', label: 'Dark', icon: FiMoon },
                { id: 'light', label: 'Light', icon: FiSun },
                { id: 'auto', label: 'Auto', icon: FiMonitor }
              ].map((theme) => (
                <motion.button
                  key={theme.id}
                  className={`p-4 rounded-xl border text-center transition-all ${
                    settings.appearance.theme === theme.id
                      ? 'border-blue-500/50 bg-blue-500/10'
                      : 'border-white/10 hover:border-white/20'
                  }`}
                  onClick={() => updateSetting('appearance', 'theme', theme.id)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <SafeIcon icon={theme.icon} className="text-white text-xl mx-auto mb-2" />
                  <div className="text-white text-sm">{theme.label}</div>
                </motion.button>
              ))}
            </div>
          </div>
          
          <div>
            <label className="block text-white/80 text-sm mb-2">Language</label>
            <select
              value={settings.appearance.language}
              onChange={(e) => updateSetting('appearance', 'language', e.target.value)}
              className="input-3d w-full"
            >
              <option value="en">English</option>
              <option value="es">Español</option>
              <option value="fr">Français</option>
              <option value="de">Deutsch</option>
              <option value="ja">日本語</option>
            </select>
          </div>

          <div className="flex items-center justify-between">
            <div>
              <div className="text-white">Compact Mode</div>
              <div className="text-white/60 text-sm">Reduce spacing and padding</div>
            </div>
            <motion.button
              className={`relative w-12 h-6 rounded-full transition-colors ${
                settings.appearance.compactMode ? 'bg-green-500' : 'bg-white/20'
              }`}
              onClick={() => updateSetting('appearance', 'compactMode', !settings.appearance.compactMode)}
              whileTap={{ scale: 0.95 }}
            >
              <motion.div
                className="absolute top-1 w-4 h-4 bg-white rounded-full"
                animate={{
                  x: settings.appearance.compactMode ? 24 : 2
                }}
                transition={{ type: "spring", stiffness: 500, damping: 30 }}
              />
            </motion.button>
          </div>
        </div>
      </div>
    </div>
  );

  const renderMonetizationSettings = () => (
    <div className="space-y-6">
      <div className="card-3d p-6">
        <h3 className="text-lg font-semibold text-white mb-4">Payout Settings</h3>
        <div className="space-y-4">
          <div>
            <label className="block text-white/80 text-sm mb-2">Payout Method</label>
            <select
              value={settings.monetization.payoutMethod}
              onChange={(e) => updateSetting('monetization', 'payoutMethod', e.target.value)}
              className="input-3d w-full"
            >
              <option value="bank">Bank Transfer</option>
              <option value="paypal">PayPal</option>
              <option value="crypto">Cryptocurrency</option>
            </select>
          </div>
          
          <div>
            <label className="block text-white/80 text-sm mb-2">Currency</label>
            <select
              value={settings.monetization.currency}
              onChange={(e) => updateSetting('monetization', 'currency', e.target.value)}
              className="input-3d w-full"
            >
              <option value="USD">USD - US Dollar</option>
              <option value="EUR">EUR - Euro</option>
              <option value="GBP">GBP - British Pound</option>
              <option value="JPY">JPY - Japanese Yen</option>
            </select>
          </div>

          <div>
            <label className="block text-white/80 text-sm mb-2">Minimum Withdrawal Amount</label>
            <input
              type="number"
              value={settings.monetization.minWithdrawAmount}
              onChange={(e) => updateSetting('monetization', 'minWithdrawAmount', parseInt(e.target.value))}
              className="input-3d w-full"
              min="10"
              max="1000"
            />
          </div>

          <div className="flex items-center justify-between">
            <div>
              <div className="text-white">Auto Withdraw</div>
              <div className="text-white/60 text-sm">Automatically withdraw when minimum is reached</div>
            </div>
            <motion.button
              className={`relative w-12 h-6 rounded-full transition-colors ${
                settings.monetization.autoWithdraw ? 'bg-green-500' : 'bg-white/20'
              }`}
              onClick={() => updateSetting('monetization', 'autoWithdraw', !settings.monetization.autoWithdraw)}
              whileTap={{ scale: 0.95 }}
            >
              <motion.div
                className="absolute top-1 w-4 h-4 bg-white rounded-full"
                animate={{
                  x: settings.monetization.autoWithdraw ? 24 : 2
                }}
                transition={{ type: "spring", stiffness: 500, damping: 30 }}
              />
            </motion.button>
          </div>
        </div>
      </div>
    </div>
  );

  const renderTabContent = () => {
    switch (activeTab) {
      case 'profile': return renderProfileSettings();
      case 'security': return renderSecuritySettings();
      case 'privacy': return renderPrivacySettings();
      case 'notifications': return renderNotificationSettings();
      case 'appearance': return renderAppearanceSettings();
      case 'monetization': return renderMonetizationSettings();
      default: return renderProfileSettings();
    }
  };

  return (
    <motion.div
      className="p-6 space-y-6"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between space-y-4 md:space-y-0">
        <div>
          <h1 className="text-3xl font-bold text-white mb-2 flex items-center">
            <SafeIcon icon={FiSettings} className="mr-3 text-purple-400" />
            Settings
          </h1>
          <p className="text-white/60">Manage your account preferences and security</p>
        </div>
        
        <div className="flex items-center space-x-3">
          <motion.button
            className="btn-3d-secondary flex items-center space-x-2"
            onClick={handleResetSettings}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <SafeIcon icon={FiRefreshCw} />
            <span>Reset</span>
          </motion.button>
          
          <motion.button
            className="btn-3d-primary flex items-center space-x-2"
            onClick={handleSaveSettings}
            disabled={isLoading}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <SafeIcon icon={isLoading ? FiRefreshCw : FiSave} className={isLoading ? 'animate-spin' : ''} />
            <span>{isLoading ? 'Saving...' : 'Save Changes'}</span>
          </motion.button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        {/* Settings Navigation */}
        <div className="lg:col-span-1">
          <div className="card-3d p-4">
            <nav className="space-y-2">
              {settingsTabs.map((tab, index) => (
                <motion.button
                  key={tab.id}
                  className={`w-full flex items-center space-x-3 p-3 rounded-xl transition-all text-left ${
                    activeTab === tab.id
                      ? 'bg-gradient-to-r from-purple-500/20 to-blue-500/20 border border-purple-500/30 text-white'
                      : 'text-white/70 hover:text-white hover:bg-white/5'
                  }`}
                  onClick={() => setActiveTab(tab.id)}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05, duration: 0.3 }}
                  whileHover={{ scale: 1.02, x: 4 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${
                    activeTab === tab.id ? `bg-gradient-to-r ${tab.color}` : 'bg-white/10'
                  }`}>
                    <SafeIcon icon={tab.icon} className="text-white text-sm" />
                  </div>
                  <span className="font-medium">{tab.label}</span>
                </motion.button>
              ))}
            </nav>
          </div>
        </div>

        {/* Settings Content */}
        <div className="lg:col-span-3">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
          >
            {renderTabContent()}
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}

export default Settings;