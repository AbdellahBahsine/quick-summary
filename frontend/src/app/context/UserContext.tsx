'use client';

import { createContext, useContext, useState, ReactNode, useEffect } from 'react';
import axios from 'axios';
import { useRouter } from 'next/navigation';

interface UserContextProps {
  user: User | null;
  login: (username: string, password: string) => Promise<void>;
  register: (email: string, username: string, password: string) => Promise<void>;
  logout: () => void;
  isLoggedIn: () => boolean;
}

interface User {
  id: string;
  username: string;
  email: string;
}

const UserContext = createContext<UserContextProps | undefined>(undefined);

export const useUser = () => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error('useUser must be used within a UserProvider');
  }
  return context;
};

export const UserProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  
  const router = useRouter();

  useEffect(() => {
      fetchUser();
  }, []);

  const refreshAccessToken = async () => {
    try {
      const response = await axios.post('/api/auth/refresh');
      const { accessToken } = response.data;
      localStorage.setItem('accessToken', accessToken);
      return accessToken;
    } catch (error) {
      console.error('Failed to refresh token', error);
      throw error;
    }
  };
  
  const isTokenExpired = (token: string) => {
    const payload = JSON.parse(atob(token.split('.')[1]));
    const currentTime = Math.floor(Date.now() / 1000);
    return payload.exp < currentTime;
  };

  const isLoggedIn = () => {
    const token = localStorage.getItem('accessToken');
    if (!token) return false;
  
    return isTokenExpired(token) ? false : true;
  };
  
  const makeAuthenticatedRequest = async (url: string) => {
    try {
      let accessToken = localStorage.getItem('accessToken');
  
      if (accessToken && isTokenExpired(accessToken)) {
        accessToken = await refreshAccessToken();
      }
  
      const response = await axios.get(url, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      });
  
      return response.data;
    } catch (error) {
      console.error('Error making request:', error);
      throw error;
    }
  };

  const fetchUser = async () => {
    try {
      const data = await makeAuthenticatedRequest('/api/auth/me');

      setUser(data.user);
    } catch (error) {
      console.error('Failed to fetch user:', error);
      setUser(null);
    }
  };

  const register = async (email: string, username: string, password: string) => {
    try {
      await axios.post('/api/auth/register', { email, username, password });

      router.push('/login');

    } catch (error) {
      console.error('Registration failed:', error);
      throw new Error('Registration failed');
    }
  };

  const login = async (username: string, password: string) => {

    try {
      const res = await axios.post('/api/auth/login', { username, password });
      const { accessToken } = res.data;
      localStorage.setItem('accessToken', accessToken);

      await fetchUser();

      router.push('/summaries');

    } catch (error) {
      console.error('Login failed:', error);
      throw new Error('Login failed');
    }
  };

  const logout = async () => {
    try {
      await axios.post('/api/auth/logout');
      
      localStorage.removeItem('accessToken');
      setUser(null);

      router.push('/');
    } catch (error) {
      console.error('Logout failed:', error);
      throw new Error('Logout failed');
    }
    
  };

  return (
    <UserContext.Provider value={{ user, login, register, logout, isLoggedIn }}>
      {children}
    </UserContext.Provider>
  );
};
