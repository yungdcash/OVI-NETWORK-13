import React from 'react';
import {motion} from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../../common/SafeIcon';

const {FiUsers,FiMusic,FiDollarSign,FiTrendingUp} = FiIcons;

function QuickStats() {
  const stats = [
    {
      icon: FiUsers,
      label: 'Active Creators',
      value: '2.5M+',
      change: '+12%',
      color: 'from-blue-500 to-cyan-500',
    },
    {
      icon: FiMusic,
      label: 'Tracks Created',
      value: '45M+',
      change: '+8%',
      color: 'from-purple-500 to-pink-500',
    },
    {
      icon: FiDollarSign,
      label: 'Creator Earnings',
      value: '$125M+',
      change: '+25%',
      color: 'from-green-500 to-emerald-500',
    },
    {
      icon: FiTrendingUp,
      label: 'Monthly Growth',
      value: '18%',
      change: '+3%',
      color: 'from-orange-500 to-red-500',
    },
  ];

  return (
    <motion.div 
      className="stats-grid"
      initial={{opacity: 0,y: 30}} 
      animate={{opacity: 1,y: 0}} 
      transition={{duration: 0.6}}
    >
      {stats.map((stat,index)=> (
        <motion.div 
          key={index} 
          className="card-3d p-4 md:p-6 hover-lift text-center"
          initial={{opacity: 0,y: 30}} 
          animate={{opacity: 1,y: 0}} 
          transition={{delay: index * 0.1,duration: 0.5}}
          whileHover={{scale: 1.05,y: -5}}
        >
          <div className={`w-12 h-12 md:w-14 md:h-14 bg-gradient-to-r ${stat.color} rounded-2xl flex items-center justify-center mb-4 animate-glow-3d mx-auto`}>
            <SafeIcon icon={stat.icon} className="text-white text-lg md:text-xl" />
          </div>
          <div className="text-2xl md:text-3xl font-bold text-white mb-2">{stat.value}</div>
          <div className="text-white/60 text-sm mb-3">{stat.label}</div>
          <div className="flex items-center justify-center text-green-400 text-sm font-semibold">
            <SafeIcon icon={FiTrendingUp} className="mr-1" />
            {stat.change} this month
          </div>
        </motion.div>
      ))}
    </motion.div>
  );
}

export default QuickStats;