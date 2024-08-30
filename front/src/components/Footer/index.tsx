

import React from 'react'

import Link from 'next/link'
import Image from 'next/image'

export default function Footer() {
  return (
    <footer className="bg-second-color rounded-lg shadow m-4">
    <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
      <div className="sm:flex sm:items-center sm:justify-between">
        <Link href="/" className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse">
          <Image 
            src="https://res.cloudinary.com/dhrys2lqz/image/upload/v1723912207/1486504353-cart-ecommerce-shop-commerce-supermarket-trolley-shopping_81310_ptmvkc.png" 
            className="h-8" 
            alt="Logo" 
            width={32} 
            height={32} 
          />
          <span className="self-center text-2xl font-semibold whitespace-nowrap text-white">E-Commerce</span>
        </Link>
        <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-white sm:mb-0">
          <li>
            <Link href="/about" className="hover:underline me-4 md:me-6">About</Link>
          </li>
          <li>
            <Link href="/privacy-policy" className="hover:underline me-4 md:me-6">Privacy Policy</Link>
          </li>
          <li>
            <Link href="/contact" className="hover:underline">Contact</Link>
          </li>
        </ul>
      </div>
      <hr className="my-6 border-gray-200 sm:mx-auto lg:my-8" />
      <span className="block text-sm text-white sm:text-center">
        © 2024 E-Commerce™. All Rights Reserved.
      </span>
    </div>
  </footer>
  )
}
