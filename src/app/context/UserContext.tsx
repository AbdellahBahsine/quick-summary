'use client';

import { createContext, useContext, useState, useEffect } from 'react';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import { toast } from 'react-toastify';
import Spinner from '../components/Spinner/Spinner';

interface UserContextProps {
  user: User | null;
  loading: boolean;
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
  const [loading, setLoading] = useState(false);
  
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
    } catch {}
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
    } catch {}
  };

  const fetchUser = async () => {
    try {
      const data = await makeAuthenticatedRequest('/api/auth/me');

      setUser(data.user);
    } catch {}
  };

  const register = async (email: string, username: string, password: string) => {
    try {
      setLoading(true);

      await axios.post('/api/auth/register', { email, username, password });

      toast.success('Registered Successfully! Please log in.', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light"
      });

      router.push('/login');
 
    } catch {}

    setLoading(false);
  };

  const login = async (username: string, password: string) => {

    try {
      setLoading(true);

      const res = await axios.post('/api/auth/login', { username, password });
      const { accessToken } = res.data;
      localStorage.setItem('accessToken', accessToken);

      fetchUser();

      toast.success('Logged In Successfully', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light"
      });

      router.push('/summaries');

    } catch (error) {
      if (axios.isAxiosError(error)) {
        if (error.response) {
          const errorMessage = error.response.data?.error || 'Login failed';
          toast.error(errorMessage, {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
          });
        } else {
          toast.error('Network error, please try again later.', {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
          });
        }
      } else {
        toast.error('An unexpected error occurred. Please try again later.', {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
      }
    }

    setLoading(false);
  };

  const logout = async () => {
    try {
      setLoading(true);

      await axios.post('/api/auth/logout');
      
      localStorage.removeItem('accessToken');
      setUser(null);

      router.push('/');
    } catch {}
    
    setLoading(false);
  };

  if (loading) {
    return <Spinner />;
  }

  return (
    <UserContext.Provider value={{ user, loading, login, register, logout, isLoggedIn }}>
      {children}
    </UserContext.Provider>
  );
};
