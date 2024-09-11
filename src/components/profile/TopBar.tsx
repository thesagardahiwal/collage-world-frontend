import React from 'react'
import SettingsIcon from '@mui/icons-material/Settings';

import NotificationsIcon from '@mui/icons-material/Notifications';
import NotificationsRoundedIcon from '@mui/icons-material/NotificationsRounded';

function TopBar() {
  return (
    <div className='h-10 w-full justify-between flex items-center'>
        <div className='h-10 bg-white/10 hover:bg-white/30 duration-300 cursor-pointer iconFix rounded-md w-10'>
          <SettingsIcon/>
        </div>
        <div className='h-10 bg-white/10 hover:bg-white/30 duration-300 cursor-pointer iconFix rounded-md w-10'>
          <NotificationsIcon/>
        </div>
    </div>
  )
}

export default TopBar