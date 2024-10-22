import React from 'react'
import ResourcesList from './components/list-resources'
import PageLayout from '@/components/layout/PageLayout'

function page() {
    return (
        <PageLayout title='Resources' component={<ResourcesList />} />
    );
}

export default page