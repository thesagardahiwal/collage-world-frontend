'use client';

import { Provider } from 'react-redux';
import { store } from '../redux/store';
import Navbar from '../components/Navbar';
import ProfileSession from '@/components/ProfileSession';
import Footer from '@/components/Footer';
import './globals.css';
import Alerts from '@/components/ui/Alerts';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Rounded:opsz,wght,FILL,GRAD@24,300,0,0"
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@40,300,0,0"
        />
      </head>
      <body className='bg-[#f9dfd5]'>
        {/* Move Provider here to wrap the main app content */}
        <Provider store={store}>
          <main className='flex w-[100vw] gap-2 sm:p-4 h-[100vh]'>
            {/* Navbar Section */}
            <div className='sm:w-[10vw] z-50 fixed sm:relative bottom-0 h-16 w-full lg:w-[6vw] sm:h-full'>
              <Navbar />
            </div>

            {/* Main Content Area */}
            <div className='flex-1 p-2 min-h-full bg-white rounded-md overflow-y-auto w-full'>
              <Alerts/>
              {children}
              <Footer />
            </div>

            {/* Profile Section */}
            <div className='w-1/3 md:block hidden'>
              <ProfileSession />
            </div>
          </main>
        </Provider>
      </body>
    </html>
  );
}