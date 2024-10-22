import PageLayout from '@/components/layout/PageLayout'
import React from 'react'
import FollowerLists from './components/FollowerLists'
function page() {
  return (
    <PageLayout title='Followers' component={<FollowerLists/>}></PageLayout>
  )
}

export default page