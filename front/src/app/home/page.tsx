import ProductsGridComponent from '@/components/Cards'
import {fetchProducts} from '@/lib/server/fetchProducts';
import React from 'react'

export default async function Home() {

  const products = await fetchProducts();
  return (
    <div className='mt-8'>
        <ProductsGridComponent products={products}/>
    </div>
  )
}
