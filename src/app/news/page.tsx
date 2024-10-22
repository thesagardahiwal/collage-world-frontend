import PageLayout from '@/components/layout/PageLayout'
import React from 'react'
import ShowNews from './components/ShowNews'

function NewsPage() {
  return (
    <PageLayout title='News' component={<ShowNews/>}></PageLayout>
  )
}

export default NewsPage