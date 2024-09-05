'use client';
import { Provider } from 'react-redux';
import { store } from '../redux/store';
import Navbar from '../components/Navbar';
import './globals.css';
import ProfileSession from '@/components/ProfileSession';
import Footer from '@/components/Footer';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <header>
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Rounded:opsz,wght,FILL,GRAD@24,300,0,0" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@40,300,0,0" />
      </header>
      <body className='bg-[#f9dfd5]'>
        <Provider store={store}>
          <main className='flex w-[100vw] gap-2 p-4 h-[100vh]'>
            <div className='w-[10vw] lg:w-[6vw] h-full'>
              <Navbar />
            </div>
            <div className='flex-1 p-2 min-h-full bg-white rounded-md overflow-y-auto w-full'>
            {children}
            <Footer/>
            </div>
            <div className='w-1/3 md:block hidden'>
              <ProfileSession/>
            </div>
          </main>
        </Provider>
      </body>
    </html>
  );
}