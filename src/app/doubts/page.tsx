import PageLayout from '@/components/layout/PageLayout'
import React from 'react'
import Doubts from './components/Doubts'

function DoubtsPage() {
  return (
    <PageLayout title='Doubts and Answers' component={<Doubts/>}></PageLayout>
  )
}

export default DoubtsPage