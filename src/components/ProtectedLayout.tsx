'use client'

import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

const ProtectedLayout = ({ children }: any) => {
  const router = useRouter();
  const [isAuth, setIsAuth] = useState(false);

  useEffect(() => {
    // Ensure localStorage is only accessed on the client side
    const checkAuth = () => {
      if (typeof window !== 'undefined') {
        const accessToken = localStorage.getItem('accessToken');
        return !!accessToken; // Return true if token exists, false otherwise
      }
      return false;
    };

    if (!checkAuth()) {
      router.push('/'); // Redirect to login if not authenticated
    } else {
      setIsAuth(true); // Set authenticated state
    }
  }, [router]);

  if (!isAuth) {
    return null; // Render nothing or a loader while checking auth
  }

  return <>{children}</>;
};

export default ProtectedLayout;