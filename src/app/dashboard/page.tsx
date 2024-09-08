'use client';

import ProtectedLayout from '@/components/ProtectedLayout';

function Dashboard() {
  return (
    <div>
      <ProtectedLayout>
        Welcome To Collage Dashboard!
      </ProtectedLayout>
    </div>
  )
}

export default Dashboard;