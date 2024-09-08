import React from 'react'

import VideoCameraFrontRoundedIcon from '@mui/icons-material/VideoCameraFrontRounded';
import VideoCameraFrontOutlinedIcon from '@mui/icons-material/VideoCameraFrontOutlined';

import EditRoundedIcon from '@mui/icons-material/EditRounded';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';

import BookmarkRoundedIcon from '@mui/icons-material/BookmarkRounded';
import BookmarkBorderRoundedIcon from '@mui/icons-material/BookmarkBorderRounded';

import FavoriteRoundedIcon from '@mui/icons-material/FavoriteRounded';
import FavoriteBorderRoundedIcon from '@mui/icons-material/FavoriteBorderRounded';

import NewspaperRoundedIcon from '@mui/icons-material/NewspaperRounded';

import PsychologyAltRoundedIcon from '@mui/icons-material/PsychologyAltRounded';
import PsychologyAltOutlinedIcon from '@mui/icons-material/PsychologyAltOutlined';

import CheckRoundedIcon from '@mui/icons-material/CheckRounded';
import Link from 'next/link';
import { useSelectedLayoutSegment } from 'next/navigation';

function Shortcuts() {
  const segment = useSelectedLayoutSegment();
  return (
    <div className='w-full profileSessionBc bg-white p-2 rounded-md'>
        <div className='grid grid-cols-4 content-center h-fit gap-2 items-center justify-around'>
            <Link href="/collageOmegle" className='profileSessionIcons'>
              {segment == 'collageOmage' ? <VideoCameraFrontRoundedIcon/> : <VideoCameraFrontOutlinedIcon />}
            </Link>

            <Link href="/resources" className='profileSessionIcons'>
              {segment == 'resources' ? <EditRoundedIcon/> : <EditOutlinedIcon />}
            </Link>
            <Link href="/saves" className='profileSessionIcons'>
              {segment == 'saves' ? <BookmarkRoundedIcon/> : <BookmarkBorderRoundedIcon />}
            </Link>
            <Link href="/likes" className='profileSessionIcons'>
              {segment == 'likes' ? <FavoriteRoundedIcon/> : <FavoriteBorderRoundedIcon />}
            </Link>
            <Link href="/news" className='profileSessionIcons'>
              <NewspaperRoundedIcon/>
            </Link>
            <Link href="/answers" className='profileSessionIcons'>
              <CheckRoundedIcon/>
            </Link>
            <Link href="/doubts" className='profileSessionIcons'>
              {segment == 'doubts' ? <PsychologyAltRoundedIcon/> : <PsychologyAltOutlinedIcon />}
            </Link>
        </div>
    </div>
  )
}

export default Shortcuts