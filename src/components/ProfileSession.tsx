import React from 'react'
import TopBar from './profile/TopBar'
import ProfileCard from './profile/ProfileCard'
import Follwers from './profile/Follwers'
import Shortcuts from './profile/Shortcuts'
import { useAuth } from '@/hooks/useAuth'
import Link from 'next/link'

function ProfileSession() {
  const { isAuthenticated, logoutUser } = useAuth();

  if (!isAuthenticated) {
    return (
      <div className='angular-bg rounded-md p-4 h-full w-full'>
        <Link href="/games" className='iconFix flex-col bg-white/40 h-full w-full'>
          <div className='iconContainer iconFix' onClick={() => logoutUser}>
            <span className="material-symbols-rounded">
              lock
            </span>
          </div>
          <div className='text-gray-800 font-bold mt-3'>
            <h2 className='text'>Login, to use these features!</h2>
          </div>
        </Link>
      </div>
    )
  }

  return (
    <div className='angular-bg rounded-md p-4 h-full w-full'>
      <TopBar />
      <div className='mt-10'>
        <ProfileCard />
      </div>

      <div>
        <Follwers />
      </div>

      <div className='mt-4'>
        <Shortcuts />
      </div>
    </div>
  )
}

export default ProfileSession