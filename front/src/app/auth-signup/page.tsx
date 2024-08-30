import SignupForm from '@/components/Signup';
import React from 'react'

export default function AuthSignUp() {
  return (
    <div className='flex flex-col mt-8 md:flex-row md:self-center 
                    min-w-full md:items-center md:justify-evenly'>
       <div className='flex-1'>
          <h2 className='text-2xl font-bold text-center'>Sign Up</h2>
          <SignupForm />
       </div>
    </div>
  );
}