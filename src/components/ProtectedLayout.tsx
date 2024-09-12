'use client'

import { useToast } from '@/hooks/use-toast';
import { useAuth } from '@/hooks/useAuth';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

const ProtectedLayout = ({ children }: any) => {
  const router = useRouter();
  const { toast } = useToast();
  const {isAuthenticated, login} = useAuth();
  // const [isAuth, setIsAuth] = useState(false);

  const getJSONDetails = (data : string | null) => {
    if (typeof data === 'string') {
      return JSON.parse(data);
    }
    return null;
  }

  useEffect(() => {
    // Ensure localStorage is only accessed on the client side
    if (isAuthenticated) {
      return;
    }
    const checkAuth = () => {
      if (typeof window !== 'undefined') {
        const accessToken = localStorage.getItem('accessToken');
        return !!accessToken; // Return true if token exists, false otherwise
      }
      return false;
    };

    if (!checkAuth()) {
        toast({
          title: "User is not logged in",
          description: "Login first to use these features!",
          variant: "destructive"
        })
      router.push('/login'); // Redirect to login if not authenticated
    } else {
      login({user : getJSONDetails(localStorage.getItem('user')), token: localStorage.getItem("accessToken")})
      // setIsAuth(true); // Set authenticated state
    }
  }, [router, isAuthenticated]);

  if (!isAuthenticated) {
    return null; // Render nothing or a loader while checking auth
  }

  return <>{children}</>;
};

export default ProtectedLayout;