import ShowCaser from '@/components/layout/ShowCaser'
import React from 'react'
import CreateNote from './create-note'
import NotesList from './show-notes'

function Notes() {
  return (
    <div>
        <ShowCaser
            titleOne='Create Note'
            titleTwo='Show Notes'
            componentOne={<CreateNote/>}
            componentTwo={<NotesList/>}
        />
    </div>
  )
}

export default Notes