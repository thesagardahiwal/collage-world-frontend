'use client'

import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

const ProtectedLayout = ({ children } : any) => {
  const router = useRouter();
  // Assume you have a function to check if the user is logged in
  const isAuthenticated = () => {
    // Example: check a token or a user object in localStorage/cookies
    return localStorage.getItem('accessToken'); 
  };

  useEffect(() => {
    if (!isAuthenticated()) {
      router.push('/'); // Redirect to login if not authenticated
    }
  }, [router]);

  if (!isAuthenticated()) {
    return null; // You can return a loader or null while checking auth
  }

  return <>{children}</>;
};

export default ProtectedLayout;
