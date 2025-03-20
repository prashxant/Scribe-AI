'use client'
import { useRouter } from 'next/navigation';
import React, { useTransition } from 'react'
import { CardContent, CardFooter } from './ui/card';
import { Label } from './ui/label';
import { Input } from './ui/input';
import { Button } from './ui/button';
import { Loader2 } from 'lucide-react';
import Link from 'next/link';
import { toast } from 'sonner';
import { loginAction, SignUpAction } from '@/actions/user';


type props = {
    type: "login" | "register"
}; 


function AuthForm({ type }: props) {
    const isloginForm = type === "login";

    const router = useRouter();
    const [isPending, startTransition] = useTransition()

    const handleSubmit = (formData: FormData) => {
        startTransition(async () => {
            const email = formData.get("email") as string;
            const password = formData.get("password") as string;

            let errorMessage;
            let title = "";
            let description = "";

            if (isloginForm) {
                errorMessage = (await loginAction(email, password)).errorMessage;
                title = "Logged in";
                description = "You have been logged in";
            } else {
                errorMessage = (await SignUpAction(email, password)).errorMessage;
                title = "Signed up";
                description = "Check your email for confirmation link";
            }

            if (!errorMessage) {
                toast({
                    title,
                    description,
                    variant: "success",
                });
                router.replace("/");
            } else {
                toast({
                    title: "Error",
                    description: errorMessage,
                    variant: "destructive",
                });
            }
        });
    };

    return (
        <form action={handleSubmit}>
            <CardContent className="grid w-full item-center gap-4">
                <div className="flex flex-col space-y-1.5">
                    <Label htmlFor='email'>Email</Label>
                    <Input
                        id="email"
                        name="email"
                        placeholder="enter your email"
                        type="email"
                        required
                        disabled={isPending}
                    />
                </div>
                <div className="flex flex-col space-y-1.5">
                    <Label htmlFor="password">Password</Label>
                    <Input
                        id="password"
                        name="password"
                        placeholder="enter your password"
                        type="password"
                        required
                        disabled={isPending}
                    />
                </div>
            </CardContent>
            <CardFooter>
                <Button>
                    {isPending ?
                        <Loader2 className='animate-spin' />
                        : isloginForm ? (
                            "Login")
                            : ("Sign Up ")}
                </Button>
                <p className='text-xs'>
                    {isloginForm ? "Don't have an account? " : "Already have an account? "}{" "}
                    <Link href={isloginForm ? "/sign-up" : "/login"} className={`text-blue-500 underline ${isPending ? "pointer-events-none opacity-50" : ""}`}>
                        {isloginForm ? "Sign Up" : "Login"}
                    </Link>
                </p>
            </CardFooter>
        </form>
    )
}

export default AuthForm