import PageLayout from '@/components/layout/PageLayout'
import React from 'react'
import ProfilePage from './components/ProfilePage';
function page() {
  // console.log(user);
  return (
    <PageLayout title='Profile' component={<ProfilePage/>}></PageLayout>
  )
}

export default page