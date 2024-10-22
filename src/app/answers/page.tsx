import PageLayout from '@/components/layout/PageLayout'
import React from 'react'
import AnswerList from './components/AnswerList'

function AnswerPage() {
  return (
    <PageLayout title='Your Anwers' component={<AnswerList/>} ></PageLayout>
  )
}

export default AnswerPage