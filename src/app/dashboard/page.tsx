import PageLayout from '@/components/layout/PageLayout'
import React from 'react'
import DashBoardPage from './components/SavePage'

function Page() {
  return (
    <PageLayout title='DashBoard' component={<DashBoardPage/>}></PageLayout>
  )
}

export default Page