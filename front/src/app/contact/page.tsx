import React from 'react'

export default function Contact() {
  return (
    <>
      <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
        <div className="flex flex-col justify-between">
          <div className="flex flex-col items-center justify-center py-4 md:py-8 text-center">
            <h1 className="text-3xl font-bold mb-4">Contáctanos</h1>
            
            <p className="text-xl mb-8">
              Si tienes alguna pregunta o inquietud, no dudes en ponerte en contacto con nosotros. 
              Completa el formulario a continuación y te responderemos lo antes posible.
            </p>

            <form className="w-full max-w-lg mx-auto bg-white p-8 rounded-lg shadow-lg">
              <div className="mb-4">
                <label htmlFor="name" className="block text-lg font-medium mb-2">Nombre</label>
                <input 
                  type="text" 
                  id="name" 
                  name="name" 
                  className="w-full p-2 border border-gray-300 rounded-md" 
                  required 
                />
              </div>

              <div className="mb-4">
                <label htmlFor="email" className="block text-lg font-medium mb-2">Correo Electrónico</label>
                <input 
                  type="email" 
                  id="email" 
                  name="email" 
                  className="w-full p-2 border border-gray-300 rounded-md" 
                  required 
                />
              </div>

              <div className="mb-4">
                <label htmlFor="message" className="block text-lg font-medium mb-2">Mensaje</label>
                <textarea 
                  id="message" 
                  name="message" 
                  rows= {4} 
                  className="w-full p-2 border border-gray-300 rounded-md" 
                  required 
                />
              </div>

              <button 
                type="submit" 
                className="w-full bg-third-color text-white py-2 px-4 rounded-md hover:bg-fourth-color focus:outline-none focus:ring-2 focus:bg-second-color"
              >
                Enviar
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}

