"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"

import { toast } from "../../../hooks/use-toast";
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
import { Textarea } from "@/components/ui/textarea"
import { Input } from "@/components/ui/input";
import useNote from "@/hooks/useNote";
import { useTransition } from "react";
import { post } from "@/services/useQuery";
import { useAuth } from "@/hooks/useAuth";

const FormSchema = z.object({
  title: z.string().min(2).max(30),
  content: z
    .string()
    .min(1, {
      message: "Note must be at least 1 characters.",
    })
    .max(160, {
      message: "Note must not be longer than 160 characters.",
    }),
    image: z.any()
})

export default function CreateNote() {
  const { add } = useNote();
  const { token } = useAuth();
  const [isPending, startTransition] = useTransition()
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      title: "",
      content: "",
      image: ""
    }
  })

  function onSubmit(data: z.infer<typeof FormSchema>) {
    console.log(data, token);
    startTransition(() => {
      if (typeof token === 'string') {
        post('/notes', data, token)
          .then ((data) => {
            add(data);
            toast({
              title: "Note is added!",
            })
          })
          .catch(() => {
            toast({
              title: "Unsuccessfull! try again.",
              variant: "destructive"
            })
          })      
      }
    })
    
    
  }

  return (
    <div className="w-full min-h-[100vh] h-full flex items-center justify-center">
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="w-2/3 space-y-3">
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
          name="image"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Attach image to note (optional)</FormLabel>
              <FormControl>
                <Input
                  type = "file"
                  placeholder="Image"
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
          name="content"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Write a note</FormLabel>
              <FormControl>
                <Textarea
                  placeholder="Tell us a little bit about yourself"
                  className="resize-none"
                  {...field}
                />
              </FormControl>
              <FormDescription>
                You can <span>@mention</span> other users and organizations.
              </FormDescription>
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
