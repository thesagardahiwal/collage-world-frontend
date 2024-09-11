'use client'

import useNote from '@/hooks/useNote';
import { useEffect, useTransition } from 'react';
import { INote } from "../../../redux/slices/noteSlice"
import { get } from '@/services/useQuery';
import { useAuth } from '@/hooks/useAuth';
import { Image } from '@nextui-org/image';


import Note from './note';

const NotesList = () => {
  const { notes, add, getNote, del } = useNote();
  const { token } = useAuth();
  const [isPending, startTransition] = useTransition();

  const fetchNotes = () => {
    startTransition(() => {
      if (typeof token === 'string') {
        get('/notes', token).then((data) => {
          for (let n of data) {
            add(n);
          }
        })

        console.log(notes)

      }
    })
  }

  useEffect(() => {
    if (notes.length === 0) {
      fetchNotes();
    }
  }, []);

  return (
    <div className='w-full h-full'>
      <div className='text-md text-left font-medium tracking-wide'>Recent Notes</div>
      <div 
      className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2'
      >
        {notes.length > 0 && notes.map((note: INote, i: number) => (
          <div
            key={i}>
            <Note note={note} />
          </div>
        ))}
      </div>
      {notes.length === 0 && <h2>Write note...</h2>}
    </div>
  );
};

export default NotesList;