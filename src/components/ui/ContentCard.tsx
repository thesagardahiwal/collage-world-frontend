'use client';
import React from 'react';
import { NextUIProvider } from '@nextui-org/system';
import { Image } from '@nextui-org/image';

function ContentCard() {
    
  return (
    <NextUIProvider>
      <div className='relative bg-white rounded-md flex flex-col h-[300px] w-full sm:h-[200px] sm:w-[240px]'>
        <div className='absolute w-full rounded-md flex justify-between items-center top-0 p-2'>
          <div className='w-5 h-5 rounded-md bg-white'></div>
          <div className='w-5 h-5 rounded-md bg-white'></div>
        </div>
        <div className='bg-gray-200 rounded-t-md overflow-hidden h-fit w-full'>
        <Image
            className=' opacity-100'
            width={300}
            
            alt="NextUI hero Image"
            src="https://res.cloudinary.com/dfcknhtu4/image/upload/t_Banner 16:9/v1724787694/uploads/1724787693742-resized-image.jpg"
          />
        </div>
        <div className='h-20 rounded-b-md w-full'>
          Description
        </div>
      </div>
    </NextUIProvider>
  );
}

export default ContentCard;
