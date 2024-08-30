import SigninForm from '@/components/Signin';
import React from 'react'

export default function AuthSignIn() {
  return (
    <div className='flex flex-col mt-8 md:flex-row md:self-center 
                    min-w-full md:items-center md:justify-evenly'>
       <div className='flex-1 mt-8 md:mt-0'>
          <h2 className='text-2xl font-bold text-center'>Sign In</h2>
          <SigninForm />
       </div>
    </div>
  );
}