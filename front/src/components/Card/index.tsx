import React from 'react'
import Image from 'next/image'
import { IProductCardProps } from '@/interfaces/Interfaces'
import Link from 'next/link'

export default function ProductCard({product}: IProductCardProps) {
  return (

          <div className='flex flex-col items-center text-center justify-center bg-second-color border
                        border-gray-200 rounded-xl md:flex-row shadow-md p-2 px-2 transform 
                        transition-transform duration-300 hover:scale-105'>
              <div className="relative object-contain w-20 rounded-t-lg h-20 
                              md:h-40 md:w-40 md:rounded-none md:rounded-s-lg">
                <Image 
                    src={product.image} 
                    alt={product.name} 
                    fill={true} 
                    sizes='(max-width: 768px) 100vw,
                    (max-width: 1200px) 50vw, 33vw' 
                    priority={true} 
                    /> 
              </div>
              <div className='flex flex-col justify-between p-4 leading-normal'>
                <h2 className='mb-2 text-2xl font-bold tracking-tight text-gray-900'>{product.name}</h2>
                <p className='mb-3 font-normal text-gray-700'>$ {product.price}</p>
                <Link href={`/detail/${product.id}`}>
                  <button className='bg-first-color hover:bg-neutral-200
                                      text-center p-1 rounded-xl shadow-md 
                                      cursor-pointer'
                                      > Details...
                  </button>
                </Link>
              </div>
          </div>
  )
}
