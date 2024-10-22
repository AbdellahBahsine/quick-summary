'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useUser } from '@/app/context/UserContext';
import React from 'react';
import Spinner from '../Spinner/Spinner';

const WithUnAuth = <P extends object>(WrappedComponent: React.ComponentType<P>) => {
  const UnauthenticatedComponent: React.FC<P> = (props) => {
    const { isLoggedIn } = useUser();
    const router = useRouter();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
      if (isLoggedIn()) {
        router.push('/summaries');
      } else {
        setLoading(false);
      }
    }, [router]);

    if (loading) {
        return <Spinner />;
    }

    return <WrappedComponent {...props} />;
  };

  return UnauthenticatedComponent;
};

export default WithUnAuth;
