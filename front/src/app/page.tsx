"use client";
import { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import Image from "next/image";

export default function LandingPage() {
    const [activeIndex, setActiveIndex] = useState(0);

    const images = [
      "https://www.pngall.com/wp-content/uploads/5/iPhone-11-PNG-File.png",
      "https://pngimg.com/uploads/macbook/macbook_PNG35.png",
      "https://cdsassets.apple.com/live/SZLF0YNV/images/sp/111979_ipad-pro-12-2018.png",
      "https://www.pngarts.com/files/8/Apple-Watch-Series-6-Download-Image.png",
      "https://cdn.shopify.com/s/files/1/1956/9041/products/airpods_pro.png?v=1572876659"
    ];

    const nextSlide = useCallback(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, [images.length]);

    const prevSlide = () => {
      setActiveIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
    };

    useEffect(() => {
      const intervalId = setInterval(nextSlide, 3000); // Cambia cada 3 segundos
      return () => clearInterval(intervalId); // Limpia el intervalo al desmontar el componente
    }, [nextSlide]);

  return (
    <>
      <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
      <div className="flex flex-col justify-between">
        <div className="flex flex-col items-center justify-center py-4 md:py-8 text-center">
          <h1 className="text-3xl font-bold mb-4">Bienvenido al e-commerce</h1>
          <Link href="/home">
            <button className="text-white bg-third-color hover:bg-fourth-color focus:ring-4 focus:ring-first-color font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2">
              Enter
            </button>
          </Link>
        </div>
      </div>

      <div id="default-carousel" className="relative w-full" data-carousel="slide">
        {/* Carousel wrapper */}
        <div className="relative h-56 overflow-hidden rounded-lg md:h-96">
          {images.map((src, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${index === activeIndex ? "opacity-100" : "opacity-0"}`}
              data-carousel-item
            >
              <Image
                src={src}
                alt={`Carousel ${index + 1}`}
                fill
                style={{ objectFit: 'contain' }}
                className="absolute inset-0 m-auto"
              />
            </div>
          ))}
        </div>
        {/* Slider indicators */}
        <div className="absolute z-30 flex -translate-x-1/2 bottom-5 left-1/2 space-x-3 rtl:space-x-reverse">
          {images.map((_, index) => (
            <button
              key={index}
              type="button"
              className={`w-3 h-3 rounded-full ${index === activeIndex ? "bg-fourth-color/70" : "bg-gray-500/50"}`}
              onClick={() => setActiveIndex(index)}
              aria-current={index === activeIndex}
              aria-label={`Slide ${index + 1}`}
            />
          ))}
        </div>
        {/* Slider controls */}
        <button
          type="button"
          className="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
          onClick={prevSlide}
        >
          <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-third-color group-hover:bg-fourth-color group-focus:ring-4 group-focus:ring-white group-focus:outline-none">
            <svg
              className="w-4 h-4 text-white rtl:rotate-180"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 6 10"
            >
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 1 1 5l4 4" />
            </svg>
            <span className="sr-only">Previous</span>
          </span>
        </button>
        <button
          type="button"
          className="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
          onClick={nextSlide}
        >
          <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-third-color group-hover:bg-fourth-color group-focus:ring-4 group-focus:ring-white group-focus:outline-none">
            <svg
              className="w-4 h-4 text-white rtl:rotate-180"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 6 10"
            >
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 9 4-4-4-4" />
            </svg>
            <span className="sr-only">Next</span>
          </span>
        </button>
      </div>
      </div>
    </>
  );
}