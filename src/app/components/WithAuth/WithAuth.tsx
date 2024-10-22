'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useUser } from '@/app/context/UserContext';
import React from 'react';
import Spinner from '../Spinner/Spinner';


const WithAuth = <P extends object>(WrappedComponent: React.ComponentType<P>) => {
  const AuthenticatedComponent: React.FC<P> = (props) => {
    const { isLoggedIn } = useUser();
    const router = useRouter();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
      if (!isLoggedIn()) {
        router.push('/login');
      } else {
        setLoading(false);
      }
    }, [isLoggedIn, router]);

    if (loading) {
      return <Spinner />;
    }

    return <WrappedComponent {...props} />;
  };

  return AuthenticatedComponent;
};

export default WithAuth;
