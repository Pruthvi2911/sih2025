import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '@/hooks/AuthContext';

interface ProtectedRouteProps {
  children: React.ReactNode;
}

const ProtectedRoute = ({ children }: ProtectedRouteProps) => {
  const { isAuthenticated } = useAuth();

  if (!isAuthenticated) {
    // User not authenticated, redirect to login page
    return <Navigate to="/login" />;
  }

  return <>{children}</>;
};

export default ProtectedRoute;