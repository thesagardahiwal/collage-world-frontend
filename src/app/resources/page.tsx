import React from 'react'
import ResourcesList from './components/list-resources'

function page() {
  return (
    <div className='min-h-[100vh p-3 h-full w-full '>
        <div>
            <h1 
            className='font-semibold text-2xl tracking-tight'
            >Resources</h1>
        </div>

        <div className='h-full w-full'>
            <ResourcesList/>
        </div>
    </div>
  )
}

export default page