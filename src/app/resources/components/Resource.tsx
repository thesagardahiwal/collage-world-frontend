import { Button } from '@/components/ui/button'
import { useToast } from '@/hooks/use-toast'
import { useAuth } from '@/hooks/useAuth'
import useResource from '@/hooks/useResource'
import { IResource } from '@/redux/slices/resourceSlice'
import { del } from '@/services/useQuery'
import {  useRouter } from 'next/navigation';
import React, { useTransition } from 'react'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

interface Prop {
    res: IResource
}

function Resource({res} : Prop) {
  const { user } = useAuth();
  const router = useRouter();


  return (
    <div className=''>
      <Card className="w-[350px]">
        <CardHeader>
          <CardTitle>{res.title}</CardTitle>
          <CardDescription>
            {res.author?.name}
          </CardDescription>
        </CardHeader>
        <CardContent>
          {res.content}
        </CardContent>
        <CardFooter>
          <h5 className='text-sm text-slate-400'>
            @{res.resourceType}
          </h5>
        </CardFooter>
      </Card>
    </div>
  )
}

export default Resource