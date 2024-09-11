import React from 'react'

import { INote } from '@/redux/slices/noteSlice'
import { useRouter } from 'next/navigation'

function Note({note} : {note: INote}) {
  const router = useRouter();
  return (
    <div 
    onClick={() => router.push('/notes/'+note._id)}
    className='h-20 w-full bg-[#00011c] text-white my-2 p-2 rounded-md overflow-hidden'>
        <h1 className='text-md font-semibold'>{note.title}</h1>
        <p className='text-sm truncate font-medium'>{note.content}</p>
    </div>
  )
}

export default Note