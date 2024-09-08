'use client'
import React from 'react'

function ContentCard() {
  return (
    <div className='min-w-[300px]'>
        <div className='relative flex flex-col h-[300px] w-full sm:h-[200px] sm:w-[240px]'>
            <div className='absolute w-full rounded-md flex justify-between items-center top-0 p-2'>
                <div className='w-5 h-5 rounded-md bg-white'></div>
                <div className='w-5 h-5 rounded-md bg-white'></div>
            </div>
            <div className='bg-gray-200 rounded-t-md flex-1 h-full w-full'>
                <img src="" alt="content" />
            </div>
            <div className='h-20 rounded-b-md bg-gray-500 w-full'>
                Description
            </div>
        </div>
    </div>
  )
}

export default ContentCard