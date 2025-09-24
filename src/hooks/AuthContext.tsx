import React, { createContext, useState, useContext, useEffect, ReactNode } from 'react';
import { useNavigate } from 'react-router-dom';

interface AuthContextType {
  isAuthenticated: boolean;
  login: () => void; // Login function no longer needs credentials
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  // We now track a simple boolean state, not a token
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(!!localStorage.getItem('isAuthenticated'));
  const navigate = useNavigate();

  useEffect(() => {
    // Save the simple authenticated status to local storage
    if (isAuthenticated) {
      localStorage.setItem('isAuthenticated', 'true');
    } else {
      localStorage.removeItem('isAuthenticated');
    }
  }, [isAuthenticated]);

  // Login function is now very simple. It sets the state and redirects.
  const login = () => {
    setIsAuthenticated(true);
    navigate('/dashboard');
  };

  const logout = () => {
    setIsAuthenticated(false);
    navigate('/login');
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};