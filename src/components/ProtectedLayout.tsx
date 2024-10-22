'use client'

import { useToast } from "@/hooks/use-toast";
import { useAuth } from "@/hooks/useAuth";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { isTokenExpired } from "@/utils/helper";

const ProtectedLayout = ({ children }: any) => {
  const router = useRouter();
  const { toast } = useToast();
  const { isAuthenticated, login } = useAuth();
  const getJSONDetails = (data: string | null) => {
    if (typeof data === 'string' && data.length > 0) {
      try {
        return JSON.parse(data);
      } catch (error) {
        return null;
      }
    }
    return null;
  }

  useEffect(() => {
    if (isAuthenticated) {
      return;
    }

    const checkAuth = () => {
      if (typeof window !== 'undefined') {
        const user = localStorage.getItem('user');
        const accessToken = localStorage.getItem('accessToken');
        if(user && accessToken && !isTokenExpired(accessToken)) {
          return true;
        }
      }
      return false;
    };
    if (!checkAuth()) {
      toast({
        title: "User is not logged in",
        description: "Login first to use these features!",
        variant: "destructive"
      });
      router.push('/login');
    } else {
      const user = getJSONDetails(localStorage.getItem('user'));
      login({ user, token: localStorage.getItem("accessToken") });
    }
  }, [router, isAuthenticated]);

  if (!isAuthenticated) {
    // router.push('/login');
    return null; // Render nothing or a loader while checking auth
  }

  return <>{children}</>;
};

export default ProtectedLayout;
