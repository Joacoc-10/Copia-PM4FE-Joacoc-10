import React from "react";

const Contact = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4 ">
      <div className="w-full max-w-md p-8 text-center rounded-lg shadow-xl bg-secondary_yellow-400">
        <h1 className="mb-6 text-4xl font-extrabold text-primary_blue-600">
          Contáctanos
        </h1>
        <p className="mb-8 text-lg text-gray-700">
          ¡Estamos aquí para ayudarte! Ponte en contacto con nosotros a través de los siguientes medios:
        </p>

        <div className="mb-6">
          <h2 className="mb-2 text-2xl font-bold text-primary_blue-500">Teléfono</h2>
          <p className="text-xl text-gray-800">
            <a href="tel:+34123456789" className="text-accent_blue-600 hover:underline">
              +34 123 456 789
            </a>
          </p>
          <p className="mt-1 text-sm text-gray-500">
            Horario de atención: Lunes a Viernes, 9:00 - 18:00 
          </p>
        </div>

        <div>
          <h2 className="mb-2 text-2xl font-bold text-primary_blue-500">Correo Electrónico</h2>
          <p className="text-xl text-gray-800">
            <a href="mailto:info@FuturaTech.com" className="text-accent_blue-600 hover:underline">
              info@FuturaTech.com
            </a>
          </p>
          <p className="mt-1 text-sm text-gray-500">
            Te responderemos en un plazo de 24-48 horas hábiles.
          </p>
        </div>

        <p className="mt-10 text-gray-600 text-md">
          ¡Esperamos tu mensaje!
        </p>
      </div>
    </div>
  );
};

export default Contact;
