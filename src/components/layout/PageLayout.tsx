import React from 'react'

interface Prop {
    title: string;
    component: React.JSX.Element
}

function PageLayout({title, component} : Prop) {
  return (
    <div className=''>
      <div>
        <h2 className='font-semibold text-2xl flex items-left p-3'>{title}</h2>
      </div>
      <div className='p-2'>
        {component}
      </div>
      <div>
      </div>
    </div>
  )
}

export default PageLayout