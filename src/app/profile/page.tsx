'use client'

import ProtectedLayout from '@/components/ProtectedLayout'
import { useAuth } from '@/hooks/useAuth'
import React from 'react'

function page() {
  const {user} = useAuth()
  // console.log(user);
  return (
    <ProtectedLayout>
        <div className='min-h-[100vh] p-2 h-full w-full'>
          <h2 className='text-xl pt-4 font-bold'>Profile</h2>
          <section className='w-full h-200'>

          </section>
        </div>
    </ProtectedLayout>
  )
}

export default page