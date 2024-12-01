import { Card, CardHeader, CardTitle, CardContent, CardDescription, CardFooter } from '@/components/ui/card'
import React from 'react'
import { IDoubt} from "./doubts-list"
function Doubt({doubt} : {doubt: IDoubt}) {
  return (
    <div>
        <Card className="w-[350px]">
        <CardHeader>
          <CardTitle>{doubt.title}</CardTitle>
          <CardDescription>
            {doubt.asker.name}
          </CardDescription>
        </CardHeader>
        <CardContent>
          {doubt.description}
        </CardContent>
        <CardFooter>
          <h5 className='text-sm text-slate-400'>
            @{doubt.answers}
          </h5>
        </CardFooter>
      </Card>
    </div>
  )
}

export default Doubt