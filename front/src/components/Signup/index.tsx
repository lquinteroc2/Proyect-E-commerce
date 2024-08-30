"use client"

import { UserContext } from '@/context/user';
import { validateSignup } from '@/utils/validation';
import { useRouter } from 'next/navigation';
import React, { useContext, useState } from 'react'




export default function SignupForm() {

  const router = useRouter()

  const {signUp} = useContext(UserContext)

  const [signupValues, setSignupValues] = useState ({
    email: "",
    password: "",
    first_name: "",
    last_name: "",
    phone: "",
    address: ""
  })

  const [errors, setErrors] = useState({} as {[key: string]: string});
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const {name, value} = e.target;

    setSignupValues({...signupValues,[name]:value});

    setErrors(validateSignup({...signupValues,[name]:value}));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const user = {
      email: signupValues.email,
      password: signupValues.password,
      name: `${signupValues.first_name} ${signupValues.last_name}`,
      phone: signupValues.phone,
      address: signupValues.address,
    }
    
    const success = await signUp(user);
    
    if (success) router.push("/auth-signin");
    if (!success) alert("Invalid user")
      
  };

  
  return (
    <form className='max-w-md mx-auto' onSubmit={handleSubmit}>
      <div className='relative z-0 w-full mb-5 group'>
         <input 
            type='email'
            name='email'
            id='email' 
            className='block py-2.5 px-0 w-full tex-sm text-gray-900 bg-transparent border-0
                       border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0
                       focus:border-third-color peer'
            placeholder=' '
            onChange={handleChange}
            required
          />
         <label className='peer-focus:font-medium absolute text-sm text-gray-500 
                           duration-300 transform -translate-y-6 scale-75 top-5 -z-10
                           origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4
                           rtl:peer-focus:left-auto peer-focus:text-third-color peer-placeholder-shown:scale-100
                           peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:translate-y-6'>
                Email address
         </label>
         {errors.email && (
            <span className='text-red-500 text-xs italic'>{errors.email}</span>
         )}
      </div>


      <div className='relative z-0 w-full mb-5 group'>
         <input 
            type='password'
            name='password'
            id='password' 
            className='block py-2.5 px-0 w-full tex-sm text-gray-900 bg-transparent border-0
                       border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0
                       focus:border-third-color peer'
            placeholder=' '
            onChange={handleChange}
            required
          />
           <label className='peer-focus:font-medium absolute text-sm text-gray-500 
                           duration-300 transform -translate-y-6 scale-75 top-5 -z-10
                           origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4
                           rtl:peer-focus:left-auto peer-focus:text-third-color peer-placeholder-shown:scale-100
                           peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:translate-y-6'>
                Password
         </label>
         {errors.password && (
            <span className='text-red-500 text-xs mt-1'>{errors.password}</span>
         )}
      </div>
          
         <div className='grid md:grid-cols-2 md:gap-6'>
              <div className='relative z-0 w-full mb-5 group'>
              <input 
                  type='text'
                  name='first_name'
                  id='first_name' 
                  className='block py-2.5 px-0 w-full tex-sm text-gray-900 bg-transparent border-0
                  border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0
                  focus:border-third-color peer'
                  placeholder=' '
                  onChange={handleChange}
                  required
                  />
              <label className='peer-focus:font-medium absolute text-sm text-gray-500 
                                duration-300 transform -translate-y-6 scale-75 top-5 -z-10
                                origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4
                                rtl:peer-focus:left-auto peer-focus:text-third-color peer-placeholder-shown:scale-100
                                peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:translate-y-6'>
                      First name
              </label>
              {errors.first_name && (
                <span className='text-red-500 text-xs mt-1'>{errors.first_name}</span>
                )}     
              </div>

              <div className='relative z-0 w-full mb-5 group'>
              <input 
                  type='text'
                  name='last_name'
                  id='last_name' 
                  className='block py-2.5 px-0 w-full tex-sm text-gray-900 bg-transparent border-0
                  border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0
                  focus:border-third-color peer'
                  placeholder=' '
                  onChange={handleChange}
                  required
                  />
              <label className='peer-focus:font-medium absolute text-sm text-gray-500 
                                duration-300 transform -translate-y-6 scale-75 top-5 -z-10
                                origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4
                                rtl:peer-focus:left-auto peer-focus:text-third-color peer-placeholder-shown:scale-100
                                peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:translate-y-6'>
                      Last name
              </label>
              {errors.last_name && (
                <span className='text-red-500 text-xs mt-1'>{errors.last_name}</span>
                )}     
              </div>
          </div>
          <div className='grid md:grid-cols-2 md:gap-6'>
              <div className='relative z-0 w-full mb-5 group'>
              <input 
                  type='tel'
                  name='phone'
                  id='phone' 
                  className='block py-2.5 px-0 w-full tex-sm text-gray-900 bg-transparent border-0
                  border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0
                  focus:border-third-color peer'
                  placeholder=' '
                  onChange={handleChange}
                  required
                  />
              <label className='peer-focus:font-medium absolute text-sm text-gray-500 
                                duration-300 transform -translate-y-6 scale-75 top-5 -z-10
                                origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4
                                rtl:peer-focus:left-auto peer-focus:text-third-color peer-placeholder-shown:scale-100
                                peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:translate-y-6'>
                      Phone number
              </label>
              {errors.phone && (
                <span className='text-red-500 text-xs mt-1'>{errors.phone}</span>
                )}     
              </div>

              <div className='relative z-0 w-full mb-5 group'>
              <input 
                  type='text'
                  name='address'
                  id='address' 
                  className='block py-2.5 px-0 w-full tex-sm text-gray-900 bg-transparent border-0
                  border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0
                  focus:border-third-color peer'
                  placeholder=' '
                  onChange={handleChange}
                  required
                  />
              <label className='peer-focus:font-medium absolute text-sm text-gray-500 
                                duration-300 transform -translate-y-6 scale-75 top-5 -z-10
                                origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4
                                rtl:peer-focus:left-auto peer-focus:text-third-color peer-placeholder-shown:scale-100
                                peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:translate-y-6'>
                      Address
              </label>
              {errors.address && (
                <span className='text-red-500 text-xs mt-1'>{errors.address}</span>
                )}     
              </div>
          </div>
          <button 
             type='submit'
             disabled={Object.keys(errors).length > 0}
             className='"text-white bg-third-color hover:bg-fourth-color focus:ring-4 focus:ring-first-color font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2'
          >
            Submit
          </button>
    </form>
  )
}

