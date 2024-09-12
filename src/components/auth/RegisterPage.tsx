'use client'
import React, { useTransition } from 'react'
import { useForm } from 'react-hook-form';
import { FormControl, Form, FormField, FormItem, FormLabel, FormMessage } from '../ui/form';
import { Input } from '../ui/input';
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { Button } from '../ui/button';
import { register } from '@/services/api';
import { useAuth } from '@/hooks/useAuth';
import { useToast } from '@/hooks/use-toast';
import { useRouter } from 'next/navigation';


const formSchema = z.object({
    email: z.string().min(2).max(50).email(),
    password: z.string().min(6).max(20),
    name: z.string().min(3).max(20),
    password2: z.string().min(6).max(20)
})

function RegisterPage() {
    const [isPending, startTransition] = useTransition();
    const router = useRouter();
    const { login } = useAuth();
    const { toast } = useToast();
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            email: "",
            password: "",
            name : "",
            password2: "",
        },
    })

    function onSubmit(values: z.infer<typeof formSchema>) {
        // Do something with the form values.
        // ✅ This will be type-safe and validated.
        startTransition(async () => {
            register(values.email, values.password, 'student', values.name).then((data) => {
                login(data);
                toast({
                    title: "Authenticated!",
                    description: "Successfully Registered."
                });
                router.push('/');

            }).catch(() => {
                toast({
                    title: "Not Authenticated!",
                    description: "Enter correct details to authenticate.",
                    variant: "destructive"
                })
            })
        })
    }
  return (
    <div>
        <div className='max-w-[600px] w-full p-3 flex flex-col justify-center items-center'>
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4 w-full">
                        <FormField
                            control={form.control}
                            name="name"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Name</FormLabel>
                                    <FormControl>
                                        <Input placeholder="join.doe" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="email"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Email</FormLabel>
                                    <FormControl>
                                        <Input placeholder="join.doe@example.com" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="password"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Password</FormLabel>
                                    <FormControl>
                                        <Input type='password' placeholder="*******" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="password2"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Confirm Password</FormLabel>
                                    <FormControl>
                                        <Input type='password' placeholder="*******" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <Button variant={isPending ? "destructive" : "default"} disabled={isPending} className='w-full' type="submit">Submit</Button>
                    </form>
                </Form>
            </div>
    </div>
  )
}

export default RegisterPage