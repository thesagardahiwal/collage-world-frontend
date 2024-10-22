'use client'

import useResource from '@/hooks/useResource';
import { IResource } from '@/redux/slices/resourceSlice';
import { useParams } from 'next/navigation'
import React from 'react'
import ResourceDetails from '../components/resource-detail';

function page() {
    const { id } = useParams();
    const { getRes } = useResource()
    if ( typeof id !== 'string') {
        return null;
    }

    const Resource : IResource | undefined = getRes(id);
    if (!Resource) {
        return null;
    };
  return (
    <div>
        <ResourceDetails res={Resource}/>
    </div>
  )
}

export default page