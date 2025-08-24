/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f0f9ff',
          100: '#e0f2fe',
          500: '#0ea5e9',
          600: '#0284c7',
          700: '#0369a1',
          900: '#0c4a6e',
        },
        accent: {
          500: '#8b5cf6',
          600: '#7c3aed',
        },
        neon: {
          blue: '#00d4ff',
          purple: '#b347ff',
          pink: '#ff47b3',
          green: '#47ff47',
        }
      },
      animation: {
        // Ultra-fast animations (3x faster)
        'pulse-ultra': 'pulse 0.67s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'bounce-ultra': 'bounce 0.33s infinite',
        'spin-ultra': 'spin 0.33s linear infinite',
        'ping-ultra': 'ping 0.33s cubic-bezier(0, 0, 0.2, 1) infinite',
        'float-ultra': 'float 2s ease-in-out infinite',
        'glow-ultra': 'glow 0.67s ease-in-out infinite alternate',
        'shimmer-ultra': 'shimmer 0.5s ease-in-out infinite',
        'fade-in-ultra': 'fadeIn 0.1s ease-out',
        'fade-out-ultra': 'fadeOut 0.1s ease-in',
        'slide-up-ultra': 'slideUp 0.1s ease-out',
        'slide-down-ultra': 'slideDown 0.1s ease-out',
        'slide-left-ultra': 'slideLeft 0.1s ease-out',
        'slide-right-ultra': 'slideRight 0.1s ease-out',
        'scale-up-ultra': 'scaleUp 0.1s ease-out',
        'scale-down-ultra': 'scaleDown 0.1s ease-in',
        'quantum-pulse-ultra': 'quantumPulse 1.33s ease-in-out infinite',
        'neural-flow-ultra': 'neuralFlow 2.67s linear infinite',
        'energy-wave-ultra': 'energyWave 1s ease-in-out infinite',
        'hologram-ultra': 'hologram 2s ease-in-out infinite',
        'matrix-rain-ultra': 'matrixRain 3.33s linear infinite',
      },
      keyframes: {
        // Ultra-fast keyframes
        float: {
          '0%, 100%': { transform: 'translateY(0px) translateZ(0)' },
          '50%': { transform: 'translateY(-3px) translateZ(0)' }, // Reduced movement
        },
        glow: {
          'from': { 
            boxShadow: '0 0 10px #00d4ff',
            transform: 'scale(1) translateZ(0)'
          },
          'to': { 
            boxShadow: '0 0 20px #b347ff, 0 0 30px #b347ff',
            transform: 'scale(1.01) translateZ(0)' // Reduced scale
          },
        },
        shimmer: {
          '0%': { transform: 'translateX(-100%) translateZ(0)' },
          '100%': { transform: 'translateX(100%) translateZ(0)' }
        },
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateZ(0)' },
          '100%': { opacity: '1', transform: 'translateZ(0)' }
        },
        fadeOut: {
          '0%': { opacity: '1', transform: 'translateZ(0)' },
          '100%': { opacity: '0', transform: 'translateZ(0)' }
        },
        slideUp: {
          '0%': { 
            transform: 'translateY(10px) translateZ(0)', 
            opacity: '0' 
          },
          '100%': { 
            transform: 'translateY(0) translateZ(0)', 
            opacity: '1' 
          }
        },
        slideDown: {
          '0%': { 
            transform: 'translateY(-10px) translateZ(0)', 
            opacity: '0' 
          },
          '100%': { 
            transform: 'translateY(0) translateZ(0)', 
            opacity: '1' 
          }
        },
        slideLeft: {
          '0%': { 
            transform: 'translateX(10px) translateZ(0)', 
            opacity: '0' 
          },
          '100%': { 
            transform: 'translateX(0) translateZ(0)', 
            opacity: '1' 
          }
        },
        slideRight: {
          '0%': { 
            transform: 'translateX(-10px) translateZ(0)', 
            opacity: '0' 
          },
          '100%': { 
            transform: 'translateX(0) translateZ(0)', 
            opacity: '1' 
          }
        },
        scaleUp: {
          '0%': { 
            transform: 'scale(0.95) translateZ(0)', 
            opacity: '0' 
          },
          '100%': { 
            transform: 'scale(1) translateZ(0)', 
            opacity: '1' 
          }
        },
        scaleDown: {
          '0%': { 
            transform: 'scale(1.05) translateZ(0)', 
            opacity: '0' 
          },
          '100%': { 
            transform: 'scale(1) translateZ(0)', 
            opacity: '1' 
          }
        },
        quantumPulse: {
          '0%, 100%': { 
            transform: 'scale(1) translateZ(0)', 
            opacity: '0.8', 
            filter: 'hue-rotate(0deg)' 
          },
          '50%': { 
            transform: 'scale(1.02) translateZ(0)', 
            opacity: '1', 
            filter: 'hue-rotate(180deg)' 
          },
        },
        neuralFlow: {
          '0%': { 
            backgroundPosition: '0% 50%', 
            filter: 'hue-rotate(0deg)',
            transform: 'translateZ(0)'
          },
          '50%': { 
            backgroundPosition: '100% 50%', 
            filter: 'hue-rotate(180deg)',
            transform: 'translateZ(0)'
          },
          '100%': { 
            backgroundPosition: '0% 50%', 
            filter: 'hue-rotate(360deg)',
            transform: 'translateZ(0)'
          },
        },
        energyWave: {
          '0%, 100%': { 
            transform: 'scaleX(1) scaleY(1) translateZ(0)',
            opacity: '0.7'
          },
          '50%': { 
            transform: 'scaleX(1.1) scaleY(0.9) translateZ(0)',
            opacity: '1'
          }
        },
        hologram: {
          '0%, 100%': { 
            opacity: '0.8',
            transform: 'translateY(0) translateZ(0)',
            filter: 'brightness(1)'
          },
          '25%': { 
            opacity: '0.9',
            transform: 'translateY(-1px) translateZ(0)',
            filter: 'brightness(1.1)'
          },
          '50%': { 
            opacity: '1',
            transform: 'translateY(0) translateZ(0)',
            filter: 'brightness(1.2)'
          },
          '75%': { 
            opacity: '0.9',
            transform: 'translateY(1px) translateZ(0)',
            filter: 'brightness(1.1)'
          }
        },
        matrixRain: {
          '0%': { 
            transform: 'translateY(-100%) translateZ(0)',
            opacity: '0'
          },
          '10%': { 
            opacity: '1'
          },
          '90%': { 
            opacity: '1'
          },
          '100%': { 
            transform: 'translateY(100vh) translateZ(0)',
            opacity: '0'
          }
        }
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'quantum-grid': `
          linear-gradient(rgba(0,212,255,0.05) 1px, transparent 1px),
          linear-gradient(90deg, rgba(0,212,255,0.05) 1px, transparent 1px)
        `,
        'neural-network': `
          radial-gradient(circle at 20% 30%, rgba(0,212,255,0.05) 0%, transparent 50%),
          radial-gradient(circle at 80% 70%, rgba(179,71,255,0.05) 0%, transparent 50%)
        `,
      },
      backgroundSize: {
        'quantum-grid': '25px 25px', // Reduced for performance
        'neural-network': '100px 100px', // Reduced for performance
      },
      backdropBlur: {
        xs: '2px',
      },
      fontFamily: {
        'quantum': ['Inter', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        'quantum': '0 0 25px rgba(0,212,255,0.3)', // Reduced for performance
        'neural': '0 0 15px rgba(179,71,255,0.4)', // Reduced for performance
        'glow-blue': '0 0 10px rgba(0,212,255,0.5)',
        'glow-purple': '0 0 10px rgba(179,71,255,0.5)',
        'glow-pink': '0 0 10px rgba(255,71,179,0.5)',
        'ultra-glow': '0 0 5px currentColor', // Ultra-fast glow
      },
      transitionDuration: {
        'ultra': '67ms', // 3x faster than default 200ms
        'ultra-fast': '33ms', // 6x faster for real-time updates
        'instant': '16ms', // For 60fps smooth animations
      },
      transitionTimingFunction: {
        'ultra-smooth': 'cubic-bezier(0.25, 0.46, 0.45, 0.94)',
        'ultra-bounce': 'cubic-bezier(0.68, -0.55, 0.265, 1.55)',
        'ultra-ease': 'cubic-bezier(0.4, 0, 0.2, 1)',
      },
      scale: {
        '102': '1.02', // Subtle scale for performance
        '98': '0.98',
        '105': '1.05',
        '95': '0.95',
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '128': '32rem',
      }
    },
  },
  plugins: [],
}