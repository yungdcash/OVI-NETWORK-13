import React, { Suspense, lazy } from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './contexts/AuthContext';
import { ToastProvider } from './contexts/ToastContext';
import AuthGuard from './components/auth/AuthGuard';
import MainLayout from './components/layout/MainLayout';
import LoadingScreen from './components/ui/LoadingScreen';
import './App.css';

// Lazy load pages for better performance
const OptimizedHome = lazy(() => import('./pages/OptimizedHome'));
const Discover = lazy(() => import('./pages/Discover'));
const Studio = lazy(() => import('./pages/Studio'));
const Social = lazy(() => import('./pages/Social'));
const Monetization = lazy(() => import('./pages/Monetization'));
const Analytics = lazy(() => import('./pages/Analytics'));
const Profile = lazy(() => import('./pages/Profile'));
const Dashboard = lazy(() => import('./pages/Dashboard'));
const Settings = lazy(() => import('./pages/Settings'));
const MusicPlayer = lazy(() => import('./components/player/MusicPlayer'));

function App() {
  const [currentTrack, setCurrentTrack] = React.useState(null);
  const [isPlaying, setIsPlaying] = React.useState(false);

  return (
    <div className="app-container">
      <ToastProvider>
        <AuthProvider>
          <Router>
            <AuthGuard>
              <MainLayout>
                <Suspense fallback={<LoadingScreen />}>
                  <Routes>
                    <Route 
                      path="/" 
                      element={
                        <OptimizedHome 
                          setCurrentTrack={setCurrentTrack} 
                          setIsPlaying={setIsPlaying} 
                        />
                      } 
                    />
                    <Route 
                      path="/discover" 
                      element={
                        <Discover 
                          setCurrentTrack={setCurrentTrack} 
                          setIsPlaying={setIsPlaying} 
                        />
                      } 
                    />
                    <Route 
                      path="/dashboard" 
                      element={
                        <Dashboard 
                          setCurrentTrack={setCurrentTrack} 
                          setIsPlaying={setIsPlaying} 
                        />
                      } 
                    />
                    <Route path="/studio" element={<Studio />} />
                    <Route path="/social" element={<Social />} />
                    <Route path="/monetization" element={<Monetization />} />
                    <Route path="/analytics" element={<Analytics />} />
                    <Route path="/profile" element={<Profile />} />
                    <Route path="/settings" element={<Settings />} />
                  </Routes>
                </Suspense>

                {/* Music Player */}
                <Suspense fallback={null}>
                  <MusicPlayer
                    currentTrack={currentTrack}
                    isPlaying={isPlaying}
                    setIsPlaying={setIsPlaying}
                  />
                </Suspense>
              </MainLayout>
            </AuthGuard>
          </Router>
        </AuthProvider>
      </ToastProvider>
    </div>
  );
}

export default App;