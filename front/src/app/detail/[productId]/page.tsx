import React from 'react'
import Image from 'next/image';
import { fetchProductById } from '@/lib/server/fetchProducts';
import AddToCart from '@/components/AddToCart';

export default async function ProductDetail({params}: {params:{productId: string}}) {
  
  const product = await fetchProductById(params.productId)

  return (
    <div>
      <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
        <h1>{product?.name}</h1>
        <Image src={product.image} alt={product?.name} width={300} height={300}/>
        <p>{product?.description}</p>
        <p>$ {product?.price}</p>
        <AddToCart id={product.id}/>
      </div>
    </div>
  );
}
