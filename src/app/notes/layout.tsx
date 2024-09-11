import ProtectedLayout from '@/components/ProtectedLayout'
import React from 'react'

function layout({children} : {children: React.ReactNode }) {
  return (
    <ProtectedLayout>
        {children}
    </ProtectedLayout>
  )
}

export default layout