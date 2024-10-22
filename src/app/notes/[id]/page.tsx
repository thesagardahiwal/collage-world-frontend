'use client'
import useNote from '@/hooks/useNote';
import { INote } from '@/redux/slices/noteSlice';
import { useRouter, useParams } from 'next/navigation';
import React, { useState } from 'react'
import UpdateNote from '../components/update-note';
import ShowNoteDetails from '../components/details-note';


function page() {
    const {getNote} = useNote();
    const { id } = useParams();
    if (typeof id !== 'string') {
        return null 
    }
    const note : INote | undefined = getNote(id);
    if (typeof note === 'undefined') {
        return null;
    };
    const [isUpdate, setIsUpdate] = useState<boolean>(false);
    
  return (
    <div className='min-h-[100vh] h-full w-full'>
        {!isUpdate &&
            <div className='max-w-xl p-2 mx-auto'>
                <ShowNoteDetails setIsUpdate = {setIsUpdate} note={note}/>
            </div>
        }


        {isUpdate &&
            <UpdateNote setIsUpdate={setIsUpdate} note={note} />
        }
    </div>
  )
}

export default page