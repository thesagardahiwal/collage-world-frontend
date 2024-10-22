import PageLayout from '@/components/layout/PageLayout'
import React from 'react'
import SavePage from './components/SavePage'

function Saves() {
  return (
    <PageLayout title='Saves' component={<SavePage/>}></PageLayout>
  )
}

export default Saves