import React from 'react'
import TopBar from './profile/TopBar'
import ProfileCard from './profile/ProfileCard'
import Follwers from './profile/Follwers'
import Shortcuts from './profile/Shortcuts'

function ProfileSession() {
  return (
    <div className='angular-bg rounded-md p-4 h-full w-full'>
        <TopBar/>
        <div className='mt-10'>
            <ProfileCard/>
        </div>

        <div>
            <Follwers/>
        </div>

        <div className='mt-4'>
            <Shortcuts/>
        </div>
    </div>
  )
}

export default ProfileSession