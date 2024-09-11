'use client'

import * as React from 'react';
import Box from '@mui/material/Box';
import SpeedDial from '@mui/material/SpeedDial';
import SpeedDialIcon from '@mui/material/SpeedDialIcon';
import ClearIcon from '@mui/icons-material/Clear';

import useNote from '@/hooks/useNote';
import { usePathname, useRouter } from 'next/navigation';


function FloatingBar() {
    const router = useRouter();
    const param = usePathname();
    if (!param.includes('/notes')) {
        return null;
    }

    const handleNavigation = () => {
        if (param.includes('/notes/create')) {
            router.back();
        } else {
            router.push('/notes/create')
        }
    }
    
  return (
    <Box sx={{ height: 320, transform: 'translateZ(0px)', flexGrow: 1 }}>
      <SpeedDial
        ariaLabel="SpeedDial"
        sx={{ position: 'absolute', bottom: 16, right: 16 }}
        onClick={handleNavigation}
        icon={param.includes('/notes/create') ? <ClearIcon/> :<SpeedDialIcon />}
      >
      </SpeedDial>
    </Box>

  )
}

export default FloatingBar