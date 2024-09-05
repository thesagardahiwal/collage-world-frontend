'use client';
import { Provider } from 'react-redux';
import { store } from '../redux/store';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import './globals.css';
import ProfileSession from '@/components/ProfileSession';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className='bg-[#f9dfd5]'>
        <Provider store={store}>
          <main className='flex w-[100vw] p-4 h-[100vh]'>
            <div className='w-[6.5vw] h-full py-4'>
              <Navbar />
            </div>
            <div className='flex-1 p-4 h-full w-full'>
            {children}
            </div>
            <div className='w-1/3 p-4'>
              <ProfileSession/>
            </div>
          </main>
        </Provider>
      </body>
    </html>
  );
}