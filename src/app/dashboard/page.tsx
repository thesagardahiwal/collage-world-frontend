'use client';

import ProtectedLayout from '@/components/ProtectedLayout';
import { useAuth } from '../../hooks/useAuth';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

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