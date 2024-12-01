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
import { useTransition } from "react";
import { post } from "@/services/useQuery";
import { useAuth } from "@/hooks/useAuth";
import useResource from "@/hooks/useResource";

export interface IResource extends Document {
    title: string;
    subject: string;
    examType: string;
    resourceType: string;
    content: string;
  }

const FormSchema = z.object({
  title: z.string().min(2).max(30),
  subject: z.string().min(2),
  examType: z.string().min(1),
  resourceType: z.string().min(1),
  content: z
    .string()
    .min(1, {
      message: "Note must be at least 1 characters.",
    })
    .max(160, {
      message: "Note must not be longer than 160 characters.",
    }),
})

export default function CreateResources() {
  const { addRes } = useResource();
  const { token } = useAuth();
  const [isPending, startTransition] = useTransition()
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      title: "",
      content: "",
      examType: "",
      subject: "",
      resourceType: "",
    }
  })

  function onSubmit(data: z.infer<typeof FormSchema>) {
    console.log("FIRED")
    if(typeof token !== 'string') {
      console.log("FIRED")
      return;
    }
    startTransition(() => {
        post('/resource/create', data, token)
          .then ((data) => {
            addRes(data);
            toast({
              title: "Resource is added!",
            })
          })
          .catch(() => {
            toast({
              title: "Unsuccessfull! try again.",
              variant: "destructive"
            })
          })      
    })
  }

  return (
    <div className="w-full min-h-[100vh] h-full flex pt-10 justify-center">
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
          name="content"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Content</FormLabel>
              <FormControl>
                <Textarea
                  placeholder="Write content here.."
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
          name="subject"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Subject</FormLabel>
              <FormControl>
                <Input
                  placeholder="eg, Math, DSA, etc."
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
          name="examType"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Exam Type</FormLabel>
              <FormControl>
                <Input
                  placeholder="eg. GATE, SPPU etc."
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
          name="resourceType"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Resource Type</FormLabel>
              <FormControl>
                <Input
                  placeholder="eg. Computer Engineering, Medical, Civil Engineering, etc"
                  className="resize-none"
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
