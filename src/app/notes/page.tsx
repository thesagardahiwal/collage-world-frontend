import React from 'react'
import NotesList from './components/show-notes'
import PageLayout from '@/components/layout/PageLayout'

function notes() {

  return (
    <>
      <PageLayout title='Notes' component={<NotesList/>}/>
    </>
  )
}

export default notes