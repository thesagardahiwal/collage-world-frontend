'use client';

import { Provider } from 'react-redux';
import { store } from '../redux/store';
import Navbar from '../components/Navbar';
import ProfileSession from '@/components/ProfileSession';
import Footer from '@/components/Footer';
import './globals.css';
import Alerts from '@/components/ui/Alerts';
import { useEffect, Suspense } from 'react';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    // Dynamically load Google fonts to avoid server-client mismatch
    const link1 = document.createElement('link');
    link1.rel = 'stylesheet';
    link1.href = 'https://fonts.googleapis.com/css2?family=Material+Symbols+Rounded:opsz,wght,FILL,GRAD@24,300,0,0';
    document.head.appendChild(link1);

    const link2 = document.createElement('link');
    link2.rel = 'stylesheet';
    link2.href = 'https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@40,300,0,0';
    document.head.appendChild(link2);

    return () => {
      document.head.removeChild(link1);
      document.head.removeChild(link2);
    };
  }, []);

  return (
    <html lang="en">
      <body className="bg-[#f9dfd5]">
        <Provider store={store}>
          <main className="flex w-[100vw] gap-2 sm:p-4 h-[100vh]">
            {/* Navbar Section */}
            <div className="sm:w-[10vw] z-50 fixed sm:relative bottom-0 h-16 w-full lg:w-[6vw] sm:h-full">
              {/* Wrapping Navbar in Suspense */}
              <Suspense fallback={<div>Loading navbar...</div>}>
                <Navbar />
              </Suspense>
            </div>

            {/* Main Content Area */}
            <div className="flex-1 p-2 min-h-full bg-white rounded-md overflow-y-auto w-full">
              <Suspense fallback={<div>Loading alerts...</div>}>
                <Alerts />
              </Suspense>
              {children}
              <Suspense fallback={<div>Loading Footer...</div>}>
                <Footer />
              </Suspense>
            </div>

            {/* Profile Section */}
            <div className="w-1/3 md:block hidden">
              <Suspense fallback={<div>Loading profile...</div>}>
                <ProfileSession />
              </Suspense>
            </div>
          </main>
        </Provider>
      </body>
    </html>
  );
}