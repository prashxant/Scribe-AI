import React from 'react'
import { Card } from '@/components/ui/card'
import { CardHeader, CardTitle } from '@/components/ui/card'
import AuthForm from '@/components/AuthForm'

function SignUpPage() {
  return (
    <div className="mt-20 flex flex-1 flex-col items-center">
        <Card className="w-full max-w-md">
            <CardHeader className="mb-4">
                <CardTitle className="text-center text-3xl">
                    SignUp
                </CardTitle>
            </CardHeader>

            <AuthForm type="register"/>

        </Card>
    </div>
  )
}

export default SignUpPage