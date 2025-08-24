import React, { useState, useEffect } from 'react';
import { useAuth } from '../../contexts/AuthContext';
import AuthModal from './AuthModal';
import LoadingScreen from '../ui/LoadingScreen';

function AuthGuard({ children }) {
  const { user, loading, authError } = useAuth();
  const [showAuthModal, setShowAuthModal] = useState(false);

  useEffect(() => {
    console.log('AuthGuard state:', { user: !!user, loading, authError });
    
    // Show auth modal if no user is logged in and not loading
    if (!loading && !user) {
      setShowAuthModal(true);
    } else if (user) {
      setShowAuthModal(false);
    }
  }, [user, loading]);

  // Show loading screen while checking authentication
  if (loading) {
    console.log('Showing loading screen');
    return <LoadingScreen />;
  }

  // Show auth modal if no user is authenticated
  if (!user) {
    console.log('No user, showing auth modal');
    return (
      <>
        <AuthModal 
          isOpen={showAuthModal} 
          onClose={() => {
            // Don't allow closing the modal if no user is authenticated
            // This ensures users must log in to access the app
            if (user) {
              setShowAuthModal(false);
            }
          }} 
        />
        {/* Render children in background but blurred and non-interactive */}
        <div 
          style={{
            filter: 'blur(10px)',
            pointerEvents: 'none',
            opacity: 0.3,
            position: 'fixed',
            inset: 0,
            zIndex: -1
          }}
        >
          {children}
        </div>
      </>
    );
  }

  // User is authenticated, render the app normally
  console.log('User authenticated, rendering app');
  return children;
}

export default AuthGuard;