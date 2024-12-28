"use client"

import {useClerk,SignIn } from '@clerk/nextjs';

export default function SignInPage() {
  const user = useClerk()
  return (
    <div className='h-[100vh] flex justify-center items-center'>
      <SignIn path='/sign-in' signUpUrl='/sign-up' />
    </div>
  );
}
