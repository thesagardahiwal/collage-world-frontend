'use client'
import { useToast } from '@/hooks/use-toast';
import { useAuth } from '@/hooks/useAuth';
import useResource from '@/hooks/useResource'
import { IResource } from '@/redux/slices/resourceSlice';
import { get } from '@/services/useQuery';
import React, { useEffect } from 'react'
import Resource from './Resource';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import CreateResources from './CreateResources';


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
                console.log(data)
                for(let i of data.resources) {
                    addRes(i);
                }
            })
            .catch(() => {
                toast({
                    title: "Unable to fetch data!",
                    variant: "destructive"
                })
            })
            console.log(resource)
    }
    useEffect(() => {
        if(resource.length === 0) {
            fetchData();
        }
    }, []);
  return (
      <Tabs defaultValue="Resources" className="w-full">
          <TabsList>
              <TabsTrigger value="Add Resources">Add Resources</TabsTrigger>
              <TabsTrigger value="Resources">Resources</TabsTrigger>
          </TabsList>
          <TabsContent value="Resources">
              <div className='min-h-screen grid sm:grid-cols-2 h-full w-full'>
                  {resource.length > 0 && resource.map((res: IResource, i: number) => (
                      <div className='my-1' key={i}>
                          <Resource res={res} />
                      </div>
                  ))
                  }
                  <div className='h-[400px]'></div>
                  {resource.length == 0 && <h1 className='flex items-center justify-center h-full w-full text-slate-400'> No resources. </h1>}
              </div>
          </TabsContent>
          <TabsContent value="Add Resources">
              <CreateResources />
          </TabsContent>
      </Tabs>
  )
}

export default ResourcesList