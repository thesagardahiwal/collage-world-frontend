"use client"

import React, { useTransition } from 'react'
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"

import { toast, useToast } from "../../../hooks/use-toast";
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { useAuth } from '@/hooks/useAuth'
import { post } from '@/services/useQuery'

const FormSchema = z.object({
  title: z.string().min(2).max(30),
  description: z.string().min(2),
});


function CreateDoubts() {
  const [isPending, startTransition] = useTransition();
  const { token } = useAuth();
  const { toast } = useToast()
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      title: "",
      description: "",
    }
  });

  const onSubmit = (data: z.infer<typeof FormSchema>) => {
      if (typeof token != "string") {
        return;
      };

      post("/doubts", data, token)
      .then((data) => {
        toast({
          title: "Successfully created!"
        })
      })
      .catch(() => {
        toast({
          title: "Unsuccessful!, Please try later..."
        })
      })
  };
  return (
    <div className='flex-1 justify-center items-center'>
      <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="w-10/12 sm:w-2/3 space-y-3">
        <FormField
          control={form.control}
          name="title"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Title</FormLabel>
              <FormControl>
                <Input
                  type = "text"
                  placeholder="title"
                  className="resize-none"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="description"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Description</FormLabel>
              <FormControl>
                <Textarea
                  placeholder="description"
                  className="resize"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button disabled={isPending} className="w-full" type="submit">Submit</Button>
      </form>
    </Form>
    </div>
  )
}

export default CreateDoubts