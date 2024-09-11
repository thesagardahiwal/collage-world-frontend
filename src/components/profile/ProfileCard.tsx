import { useAuth } from '@/hooks/useAuth'
import React from 'react'
import Person4RoundedIcon from '@mui/icons-material/Person4Rounded';

function ProfileCard() {
  const { user } = useAuth();
  console.log(user);
  return (
    <div className='w-full relative h-full min-h-[140px]'>
      <div className='flex relative items-center justify-center w-full'>
        <div className='w-20 h-20 flex items-center justify-center bg-white/40 p-2 rounded-full absolute'>
          <Person4RoundedIcon className='w-full h-full text-black'/>
        </div>
      </div>
      <div className='text-blue-900  absolute tracking-wider top-10 w-full flex items-end justify-center font-bold text-3xl'>
        <h2 className='hover:tracking-widest hover:font-normal duration-300'>
          {user?.name}
        </h2>
      </div>
    </div>
  )
}

export default ProfileCard