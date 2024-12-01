import React from 'react'
import PageLayout from '@/components/layout/PageLayout'
import Notes from './components/Notes'

function notes() {

  return (
    <>
      <PageLayout title='Notes' component={<Notes/>}/>
    </>
  )
}

export default notes