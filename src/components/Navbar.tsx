'use client';

import { useAuth } from '../hooks/useAuth';
import { useRouter } from 'next/navigation';

const Navbar = () => {
  const { isAuthenticated, logoutUser } = useAuth();
  const router = useRouter();

  const handleLogout = () => {
    logoutUser();
    router.push('/');
  };

  return (
    <nav className='bg-gradient-to-t flex flex-col justify-between items-center rounded-md h-full w-[5vw] from-[#FF9A75] to-[#fed0c0]'>
      <div className='flex flex-col gap-y-10 mt-6'>
        <div className='w-10 h-10 bg-white'>

        </div>

        <div className='w-10 h-10 bg-white'>

        </div>
      </div>


      <div className='flex flex-col gap-y-10'>
        <div className='w-10 h-10 bg-white'>

        </div>
        
        <div className='w-10 h-10 bg-white'>

        </div>
        <div className='w-10 h-10 bg-white'>

        </div>
      </div>

      <div className='flex flex-col gap-y-6 mb-4'>
        <div className='w-10 h-10 bg-white'>

        </div>
        
        <div className='w-10 h-10 bg-white'>

        </div>
      </div>

    </nav>
  );
};

export default Navbar;