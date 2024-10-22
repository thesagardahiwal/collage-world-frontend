import { IResource } from '@/redux/slices/resourceSlice'
import React from 'react'

function ResourceDetails({res} : {res: IResource}) {
    if (!res) {
        return null;
    }
  return (
    <div>
        {res.title}
        {res.content}
        {res.examType}
    </div>
  )
}

export default ResourceDetails