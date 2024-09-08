import React from 'react'

import Groups3RoundedIcon from '@mui/icons-material/Groups3Rounded';
import KeyboardArrowRightRoundedIcon from '@mui/icons-material/KeyboardArrowRightRounded';
import Link from 'next/link';


function Follwers() {
  return (
    <div>
        <Link href="follower" className='flex items-center justify-between bg-white rounded-md w-full px-4 h-14'>
            <div className='iconFix hover:scale-110 duration-200'>
              <Groups3RoundedIcon/>
            </div>
            <div className=' hover:tracking-wider font-semibold hover:font-normal duration-300'>
              <h1>Followers</h1>
            </div>
            <div>
              <KeyboardArrowRightRoundedIcon/>
            </div>
        </Link>
    </div>
  )
}

export default Follwers