'use client'

import React from 'react'
import { useState, useTransition } from 'react';
import { login } from '../../services/api';

import VisibilityRoundedIcon from '@mui/icons-material/VisibilityRounded';
import VisibilityOffRoundedIcon from '@mui/icons-material/VisibilityOffRounded';


import { useForm } from 'react-hook-form';
import { FormControl, Form, FormField, FormItem, FormLabel, FormMessage } from '../ui/form';
import { Input } from '../ui/input';
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { Button } from '../ui/button';
import { useToast } from '@/hooks/use-toast';
import { useAuth } from '@/hooks/useAuth';
import { useRouter } from 'next/navigation';


const formSchema = z.object({
    email: z.string().min(2).max(50).email(),
    password: z.string().min(1)
})

function LoginPage() {
    const { login : authLogin } = useAuth()
    const [isPending, startTransition] = useTransition();
    const router = useRouter();
    const { toast } = useToast();
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            email: "",
            password: ""
        },
    })

    function onSubmit(values: z.infer<typeof formSchema>) {
        // Do something with the form values.
        // ✅ This will be type-safe and validated.
        startTransition(() => {
            login(values.email, values.password).then((data) => {
                authLogin(data);
                toast({
                    title: "Authenticated!",
                    description: "Successfully Logged in."
                });
                router.push('/home');

            }).catch(() => {
                toast({
                    title: "Not Authenticated!",
                    description: "Enter correct details to authenticate.",
                    variant: "destructive"
                })
            })
        });
        
    }
  return (
    <div>
        <div className='max-w-[400px] w-full p-3 flex flex-col justify-center items-center'>
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4 w-full">
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
                        <Button disabled={isPending} className='w-full' type="submit">Submit</Button>
                    </form>
                </Form>
            </div>
    </div>
  )
}

export default LoginPage