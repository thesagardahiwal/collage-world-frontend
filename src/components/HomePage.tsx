import ContentCard from '@/components/ui/ContentCard'
import HorizontalSlider from '@/components/ui/HorizontalSlider'
import React from 'react'

function HomePage() {
  return (
    <div className='p-2 scroll-smooth'>
        <div className="heroSession">
            <div className='p-10 text-gray-400 text-xl'>
                <h1>Welcome to</h1>
                <h1 className='text-blue-500 text-3xl font-extrabold'>COLLAGE WORLD</h1>
            </div>

            <div className='h-[200px] overflow-hidden w-full bg-gray-300 rounded-md'>
                <img 
                className='object-cover'
                src="https://cdn.pixabay.com/photo/2018/01/14/23/12/nature-3082832_1280.jpg" alt="hero-image" />
            </div>
        </div>
        <div className="categorySession">
            <div className='mt-6 mb-3'>
            <HorizontalSlider />
            </div>
            
        </div>
        <div className="contentSession flex justify-center">
            <div className='grid grid-cols-1 scroll-smooth items-center justify-evenly content-evenly sm:grid-cols-2 md:grid-cols-3'>
                {[1, 2, 3, 4].map((el, i) => (
                    <div key={i} className='m-2'>
                        <ContentCard />
                    </div>
                ))}
            </div>
        </div>
    </div>
  )
}

export default HomePage