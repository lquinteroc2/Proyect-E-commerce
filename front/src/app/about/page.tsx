import Image from 'next/image'
import React from 'react'

export default function About() {
  return (
    <>
    <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
      <div className="flex flex-col justify-between">
        <div className="flex flex-col items-center justify-center py-4 md:py-8 text-center">
          <h1 className="text-3xl font-bold mb-4">About Us</h1>

          <div className='p-4'>
          <Image 
               src={"https://res.cloudinary.com/dhrys2lqz/image/upload/v1722464351/samples/two-ladies.jpg"} 
               alt={"About Us"} 
               width={500} 
               height={500}/>

          </div>
          
          <p className="text-2xl mb-4">
             En E-commerce, nuestra misión es ofrecer la mejor calidad de productos con los precios más competitivos del mercado. 
             Fundada este año(2024) por Leonardo Quintero, comenzamos con una simple idea: vender productos.
          </p>
          <p className="text-2xl mb-4">
             Desde entonces, hemos crecido y evolucionado, siempre manteniendo nuestro enfoque en ofrecer productos y servicios de alta calidad y una experiencia excepcional para nuestros clientes.
             Nuestro equipo está compuesto por una sola persona. Este miembro aporta su experiencia y pasión para asegurarnos de que nuestros clientes reciban lo mejor en cada interacción.
             Estamos comprometidos con nuestros clientes. 
          </p>
          <p className="text-2xl mb-4">
             En E-commerce, también nos esforzamos por iniciativas de sostenibilidad o responsabilidad social. Nos enorgullece ser parte de una comunidad que ayuda a niños en abandono.
             Te invitamos a explorar nuestro sitio, conocer nuestros productos y ponerte en contacto con nosotros si tienes alguna pregunta. Síguenos en Instagram y TikTok y únete a nuestra comunidad. ¡Gracias por ser parte de nuestra historia! 
          </p>
        </div>

      </div>
    </div>
    </>
  )
}
