"use client"

import { useToast } from '@/hooks/use-toast';
import { useAuth } from '@/hooks/useAuth';
import { get } from '@/services/useQuery';
import React, { useEffect, useState } from 'react'
import Doubt from './Doubt';

export interface IDoubt {
  title: string;
  description: string;
  asker: {
    name: string
  }; 
  images: string[];
  createdAt: Date;
  updatedAt: Date;
  answers: []; 
}

function DoubtList() {
  const [doubts, setDoubts] = useState<IDoubt[]>([]);
  const { token } = useAuth();
  const { toast } = useToast();
  const fetchData = () => {
    if (typeof token != "string") {
      return;
    };

    get("/doubts", token)
      .then((data) => {
        setDoubts(data);
      })
      .catch(() => {
        toast({
          title: "Not fetched successfully!",
          variant: "destructive"
        })
      })
  };

  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div className='flex-1 grid grid-cols-3'>
      {doubts.length > 0 && doubts.map((doubt, i) => (
        <div key={i}>
          <Doubt doubt={doubt}/>
        </div>
      ))}
    </div>
  )
}

export default DoubtList