import RootLayout from '@/components/layout/Layout'
import React from 'react'
import './globals.css';

function layout({children} : {children : React.ReactNode}) {
  return (
    <html>
      <body>
        <RootLayout>
          {children}
        </RootLayout>
      </body>
    </html>
  )
}

export default layout