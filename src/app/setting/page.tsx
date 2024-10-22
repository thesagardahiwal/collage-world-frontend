import PageLayout from '@/components/layout/PageLayout'
import React from 'react'
import SettingsPage from './components/SettingsPage'

function Saves() {
  return (
    <PageLayout title='Settings' component={<SettingsPage/>}></PageLayout>
  )
}

export default Saves