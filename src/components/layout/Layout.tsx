'use client'
import { Provider } from 'react-redux';
import { store } from '../../redux/store';
import Navbar from '../../components/Navbar';
import ProfileSession from '../ProfileSession';
import Footer from '../Footer';
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable"
import { Suspense } from 'react';
import { Toaster } from '@/components/ui/toaster';

export default function RootLayout({ children }: { children: React.ReactNode }) {

  return (
        <Provider store={store}>
          <main className="flex w-[100vw] gap-2 sm:p-4 h-[100vh]">
            {/* Navbar Section */}
            <div className="sm:w-[10vw] z-50 fixed sm:relative bottom-0 h-16 w-full lg:w-[6vw] sm:h-full">
              {/* Wrapping Navbar in Suspense */}
              <Suspense fallback={<div>Loading navbar...</div>}>
                <Navbar />
              </Suspense>
            </div>
            <ResizablePanelGroup direction='horizontal'>
              {/* Main Content Area */}
              <ResizablePanel
              className='w-full min-h-full !overflow-y-auto'
              >
                <div className='min-h-full w-full'>
                  {children}
                  <Suspense fallback={<div>Loading Footer...</div>}>
                    <Footer />
                  </Suspense>
                </div>
              </ResizablePanel>

              <ResizableHandle withHandle className='hidden sm:flex' />

              <ResizablePanel 
                className='w-1/3 sm:block hidden h-full'
              >
                {/* Profile Section */}
                <div className="md:block h-full w-full hidden">
                  <Suspense fallback={<div>Loading profile...</div>}>
                    <ProfileSession />
                  </Suspense>
                </div>
              </ResizablePanel>
            </ResizablePanelGroup>
            <div className='absolute'>
              <Toaster />
            </div>
          </main>
        </Provider>
  );
}