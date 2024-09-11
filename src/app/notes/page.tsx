import React from 'react'
import NotesList from './components/show-notes'

function notes() {

  return (

    <div className='h-[100vh] bg-white w-full'>
      <div>
        <h2 className='font-semibold text-xl flex items-center justify-center p-3'>Notes</h2>
      </div>
      <div className='w-full h-full p-4'>
        <NotesList />
      </div>
      <div></div>
    </div>
  )
}

export default notes