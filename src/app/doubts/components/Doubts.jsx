import ShowCaser from '@/components/layout/ShowCaser'
import React from 'react'
import CreateDoubts from './create-doubts'
import DoubtList from './doubts-list';

function Doubts() {
  return (
    <ShowCaser 
        titleOne='Create Doubt'
        titleTwo='Doubts'
        componentOne={<CreateDoubts/>}
        componentTwo={<DoubtList/>}
    />
  )
}

export default Doubts