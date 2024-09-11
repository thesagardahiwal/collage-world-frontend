import { IResource } from '@/redux/slices/resourceSlice'
import React from 'react'

interface Prop {
    res: IResource
}

function Resource({res} : Prop) {
  return (
    <div>
        <h2>{res.title}</h2>
        <h2>{res.content}</h2>
        <h2>{res.subject}</h2>
        <h2>{res.examType}</h2>
        <h2>{res.resourceType}</h2>
    </div>
  )
}

export default Resource