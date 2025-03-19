'use client'
import { useRouter } from 'next/navigation';
import React from 'react'
import { CardContent } from './ui/card';


type props = {

    type: "login" | "register"
}; 


function AuthForm({type }:props) {
const isloginForm = type === "login";

const router = useRouter();

const handleSubmit = (formData:FormData) =>{
    console.log("Form Submiited");
}

  return ( 
    <form action={handleSubmit}>
        <CardContent>
            <div>
                
            </div>
        </CardContent>
    </form>
  )
}

export default AuthForm