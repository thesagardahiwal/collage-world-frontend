import React from 'react'
import ResourcesList from './components/list-resources'
import { Suspense } from 'react'

function page() {
  return (
    <div className='min-h-[100vh p-3 h-full w-full '>
        <div>
            <h1 
            className='font-semibold text-2xl tracking-tight'
            >Resources</h1>
        </div>

        <div className='h-full w-full'>
          <Suspense fallback={<h1>Loading...</h1>}>
              <ResourcesList/>
          </Suspense>
        </div>
    </div>
  )
}

export default page