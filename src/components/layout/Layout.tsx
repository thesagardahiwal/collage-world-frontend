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
import { Toaster } from '@/components/ui/toaster';
import FloatingBar from '@/app/notes/components/floating-bar';
import MobileNavbar from '../MobileNavbar';

export default function RootLayout({ children }: { children: React.ReactNode }) {

  return (
        <Provider store={store}>
          <main className="flex flex-col sm:flex-row w-[100vw] gap-2 sm:p-4 h-[100vh]">
            {/* Navbar Section */}
            <div className='sm:hidden'>
              <MobileNavbar/>
            </div>
            <div className="sm:w-[10vw] z-50 fixed sm:relative bottom-0 h-16 w-full lg:w-[6vw] sm:h-full">
              {/* Wrapping Navbar in Suspense */}
              {/* <Suspense fallback={<div>Loading navbar...</div>}> */}
                <Navbar />
              {/* </Suspense> */}
            </div>
            <ResizablePanelGroup direction='horizontal'>
              {/* Main Content Area */}
              <ResizablePanel
              className='w-full relative h-[100vh]'
              >
                <div className='min-h-full h-full !overflow-y-auto w-full'>
                  <div className='hidden sm:block'>
                    <MobileNavbar />
                  </div>
                  {children}
                  {/* <Suspense fallback={<div>Loading Footer...</div>}> */}
                    <Footer />
                  {/* </Suspense> */}
                </div>
                <div className='absolute h-fit w-fit bottom-14 right-0 z-50'>
                  <FloatingBar/>
                </div>
              </ResizablePanel>

              <ResizableHandle withHandle className='hidden md:flex' />

              <ResizablePanel 
                minSize={25}
                maxSize={35}
                className='w-1/3 md:block hidden h-full'
              >
                {/* Profile Section */}
                <div className="md:block h-full w-full hidden">
                  {/* <Suspense fallback={<div>Loading profile...</div>}> */}
                    <ProfileSession />
                  {/* </Suspense> */}
                </div>
              </ResizablePanel>
            </ResizablePanelGroup>
            <div className='absolute z-50'>
              <Toaster />
            </div>
          
          </main>
        </Provider>
  );
}