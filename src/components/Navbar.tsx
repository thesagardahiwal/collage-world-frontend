'use client';

import { useEffect, useState } from 'react';
import { useAuth } from '../hooks/useAuth';
import { useRouter } from 'next/navigation';

const Navbar = () => {
  const { isAuthenticated, logoutUser } = useAuth();
  const router = useRouter();
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [size, setSize] = useState(12); // Initial size of the div
  const [visible, setVisible] = useState(true); // Visibility state
  const [lastMove, setLastMove] = useState<number | null>(null); 

  const handleLogout = () => {
    logoutUser();
    router.push('/');
  };

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      setPosition({ x: event.clientX, y: event.clientY });
      setSize(30); // Increase the size when moving
      setVisible(true); // Make sure the div is visible when the mouse is moving
      setLastMove(Date.now()); // Update the time of the last movement
    };

    const handleMouseStop = () => {
      // Start decreasing size after the mouse stops moving for a brief moment
      const timeout = setTimeout(() => {
        setSize(16); // Decrease the size after stopping
      }, 1000); // Adjust the delay as needed
      return () => clearTimeout(timeout);
    };

    // Check if the mouse has been inactive for 5-6 seconds
    const checkInactive = () => {
      const now = Date.now();
      if (lastMove && now - lastMove > 5000) { // 5 seconds
        setVisible(false); // Hide the div if inactive
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mousemove', handleMouseStop); // Call to reduce size when stopped

    const interval = setInterval(checkInactive, 1000); // Check inactivity every second

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mousemove', handleMouseStop);
      clearInterval(interval);
    };
  }, [lastMove]);

  return (
    <nav className='bg-gradient-to-t flex flex-col justify-between items-center rounded-md h-full w-full from-[#FF9A75] to-[#fed0c0]'>
      <div
        id='pointer'
        className="fixed top-0 left-0 w-4 h-4 bg-white/60 rounded-full pointer-events-none transform -translate-x-1/2 -translate-y-1/2 transition-all duration-150 ease-out"
        style={{ top: `${position.y}px`,
          left: `${position.x}px`,
          width: `${size}px`,
          height: `${size}px`, }}
      />
      <div className='flex flex-col gap-y-10 mt-6'>
        <div className='iconContainer iconFix'>

        </div>

        <div className='iconContainer iconFix'>
          <span className="material-symbols-rounded">
            travel_explore
          </span>
        </div>
      </div>


      <div className='flex flex-col gap-y-10'>
        <div className='iconContainer iconFix'>
          <span className="material-symbols-rounded">
            format_list_bulleted_add
          </span>
        </div>

        <div className='iconFix iconContainer'>
          <span className="material-symbols-outlined">
            home
          </span>
        </div>
        <div className='iconContainer iconFix'>
          <span className="material-symbols-rounded">
            stream
          </span>
        </div>
      </div>

      <div className='flex flex-col gap-y-6 mb-4'>
        <div className='iconContainer iconFix'>
          <span className="material-symbols-rounded">
            settings
          </span>
        </div>

        <div className='iconContainer iconFix'>
          <span className="material-symbols-rounded">
            person
          </span>
        </div>
      </div>

    </nav>
  );
};

export default Navbar;