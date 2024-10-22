'use client'

import * as React from 'react';
import Box from '@mui/material/Box';
import SpeedDial from '@mui/material/SpeedDial';
import SpeedDialIcon from '@mui/material/SpeedDialIcon';
import ClearIcon from '@mui/icons-material/Clear';
import { usePathname, useRouter } from 'next/navigation';


function FloatingBar() {
    const router = useRouter();
    const param = usePathname();
    const pathToLink = new Map();
    pathToLink.set('/notes', '/notes/create');
    pathToLink.set('/resources', '/resources/create');
    // pathToLink.set('/notes', '/notes/create');
    // pathToLink.set('/notes', '/notes/create');
    // pathToLink.set('/notes', '/notes/create');
    // if (!param.includes('/notes')) {
    //     return null;
    // }
    // console.log(param)

    const handleNavigation = () => {
        if (pathToLink.has(param)) {
            router.push( pathToLink.get(param));
        } else {
            router.back();
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