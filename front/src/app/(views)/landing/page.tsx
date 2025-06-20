import React from "react";
import Image from "next/image";
import Link from "next/link";

const LandingPage = () => {
  return (
    <>    
      <div
        className="
        max-w-5xl w-full mx-auto /* Ancho máximo y centrado automático */
        bg-secondary_yellow-500 /* Fondo de la tarjeta: tu amarillo clarito */
        rounded-2xl shadow-3xl overflow-hidden /* Bordes redondeados y sombra profunda */
        md:flex /* Activa flexbox para la disposición horizontal en pantallas medianas y grandes */
        transform transition-transform duration-500 hover:scale-[1.02] /* Efecto sutil al pasar el ratón */
        border border-primary_blue-300 /* Borde sutil para definir la tarjeta */
      "
      >
        <div className="flex items-center justify-center p-8 md:w-1/2 bg-gradient-to-br from-secondary_yellow-200 to-secondary_yellow-600">
          <Image
            src="https://ik.imagekit.io/i1pxujmp5t/Proyecto%20M4%20Henry/Iphone16pro.jpg?updatedAt=1749413376932"
            alt="iPhone 16 Pro Max"
            width={500}
            height={500}
            className="rounded-xl shadow-lg transform hover:rotate-2 transition-transform duration-300 ease-out h-[700px]"
            priority
          />
        </div>

        <div className="flex flex-col justify-center p-8 text-center md:w-1/2 md:p-12 md:text-left">
          <h1 className="mb-4 text-4xl font-extrabold leading-tight sm:text-5xl lg:text-6xl text-primary_blue-700">
            Descubre el Poder del <br className="hidden sm:inline" />
            <span className="text-accent_blue-500">iPhone 16 Pro Max</span>
          </h1>

          <p className="max-w-md mx-auto mb-6 text-lg sm:text-xl text-primary_blue-500 md:mx-0">
            La innovación se une a la potencia. Experimenta una velocidad
            inigualable, una cámara de otro nivel y un diseño que redefine la
            elegancia.
          </p>

          <ul className="max-w-sm mx-auto mb-8 space-y-3 text-left text-primary_blue-600 md:mx-0">
            <li className="flex items-start">
              <svg
                className="flex-shrink-0 w-6 h-6 mr-2 text-accent_blue-500"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                ></path>
              </svg>
              Chip A18 Bionic:
              
              <span className="font-semibold">
                Rendimiento sin precedentes.
              </span>
            </li>

            <br />

            <li className="flex items-start">
              <svg
                className="flex-shrink-0 w-6 h-6 mr-2 text-accent_blue-500"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                ></path>
              </svg>
              Sistema de Cámara Pro 50MP:{" "}
              <span className="font-semibold">
                Fotos y videos impresionantes.
              </span>
            </li>

            <br />

            <li className="flex items-start">
              <svg
                className="flex-shrink-0 w-6 h-6 mr-2 text-accent_blue-500"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                ></path>
              </svg>
              Pantalla ProMotion XDR:{" "}
              <span className="font-semibold">
                Claridad y fluidez sin igual.
              </span>
            </li>
          </ul>
         
          <Link href="/product-detail/16/iphone-16-pro-max">
            <button
              className="w-full px-10 py-4 text-xl font-extrabold text-white transition duration-300 ease-in-out transform rounded-full shadow-lg animate-rainbow-slide md:w-auto hover:-translate-y-1 hover:scale-105 focus:outline-none focus:ring-4 focus:ring-accent_blue-300"
            >
              ¡Cómprarlo Ahora y Vive la Experiencia!
            </button>
          </Link>
        </div>
      </div>
     
    </>

  );
};

export default LandingPage;
