import React from 'react'
import ProductCard from '../Card'
import { IProduct, IProductsGridProps } from '@/interfaces/Interfaces'

export default function ProductsGridComponent({products}: IProductsGridProps) {
  return (
    <div className='grid grid-cols-1 gap-4 p-4 md:grid-cols-3 max-w-screen-xl mx-auto'>
     {products.map((product: IProduct) => (
        <ProductCard product={product} key={product.id}/>
     ))}
    </div>
  )
}
