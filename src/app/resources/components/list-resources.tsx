'use client'
import { useToast } from '@/hooks/use-toast';
import { useAuth } from '@/hooks/useAuth';
import useResource from '@/hooks/useResource'
import { IResource } from '@/redux/slices/resourceSlice';
import { get } from '@/services/useQuery';
import React, { useEffect } from 'react'
import Resource from './Resource';


function ResourcesList() {
    const { resource, addRes } = useResource();
    const { toast } = useToast();
    const { token } = useAuth();
    const fetchData = () => {
        if (typeof token !== 'string') {
            return;
        }
        get('/resource/get', token)
            .then((data) => {
                console.log(data);
                for(let i of data) {
                    addRes(i);
                }
            })
            .catch(() => {
                toast({
                    title: "Unable to fetch data!",
                    variant: "destructive"
                })
            })
    }
    useEffect(() => {
        if(resource.length === 0) {
            fetchData();
        }
    }, []);
  return (
    <div className='h-full'>
        {resource.length > 0 && resource.map((res : IResource, i : number) => (
            <div className='' key={i}>
                <Resource res={res}/>
            </div>
        ))
        }

        {resource.length == 0 && <h1 className='flex items-center justify-center h-full w-full text-slate-400'> No resources. </h1>}
    </div>
  )
}

export default ResourcesList