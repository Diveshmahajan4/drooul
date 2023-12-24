"use client"

import { Button, buttonVariants } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { cn } from "@/lib/utils"
import { ArrowRight } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import {useForm} from "react-hook-form"
import z from "zod"
import {zodResolver} from "@hookform/resolvers/zod"
import { AuthCredentialValidator, TAuthCredentialsValidators } from "@/lib/validators/account-credentials-validator"



const Page = () => {

    const { register, handleSubmit, formState: {errors} } = useForm<TAuthCredentialsValidators>({
        resolver: zodResolver(AuthCredentialValidator)
    })

    const onSubmit = ({email, password} : TAuthCredentialsValidators) => {
        // send the data to the server

    }

  return (
    <div className="container realtive flex pt-20 flex-col items-center jutify-center lg:px-0">
        <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
            <div className="flex flex-col items-center space-y-2 text-center">
                <Image src='/logoblue1.png' alt="logo" height={150} width={250} />
                <h1 className="text-2xl font-bold" >
                    Create an account
                </h1>
                <Link href='/sign-in' className={buttonVariants({
                    variant: 'link',
                    className:"gap-1.5"
                })}>
                    Already have an account? Sign-in
                    <ArrowRight className='h-4 w-4' />    
                </Link>
            </div>

            <div className="grid gap-6">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="grid gap-2">
                        <div className="grid gap-1 py-2">
                            <Label htmlFor="email" className="pb-1">Email</Label>
                            <Input 
                            {...register('email')}
                            className={cn({
                                'focus-visible:ring-red-500': errors.email,
                            })}
                            placeholder="you@example.com"
                            />
                        </div>
                        <div className="grid gap-1 py-2">
                            <Label htmlFor="password" className="pb-1">Password</Label>
                            <Input
                            {...register('password')}
                             className={cn({
                                'focus-visible:ring-red-500': errors.password
                            })}
                            placeholder="password"
                            />
                        </div>
                        <Button>Sign Up</Button>
                    </div>
                </form>
            </div>
        </div>
    </div>
  )
}

export default Page