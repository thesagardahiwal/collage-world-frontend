'use client'

import ProtectedLayout from '@/components/ProtectedLayout'
import React from 'react'
import CreateNote from './components/create-note'

function notes() {

  return (
    <ProtectedLayout>
        <div className='h-[100vh] bg-white w-full'>
            <div>
              <h2 className='font-semibold text-xl flex items-center justify-center p-3'>Notes</h2>
            </div>
            <div className='w-full flex justify-center'>
              <CreateNote/>
            </div>
            <div></div>
        </div>
    </ProtectedLayout>
  )
}

export default notes