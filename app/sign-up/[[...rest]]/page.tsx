"use client"

import { SignUp, useClerk } from "@clerk/nextjs"

export default function Signup() {
  const user = useClerk()
  return (
    <div className='h-[100vh] flex justify-center items-center'>
      <SignUp path="/sign-up" signInUrl='/sign-in' />
    </div>
  )
}
