import PageLayout from '@/components/layout/PageLayout'
import React from 'react'
import LikesPage from './components/LikesPage'

function Saves() {
  return (
    <PageLayout title='Likes' component={<LikesPage/>}></PageLayout>
  )
}

export default Saves