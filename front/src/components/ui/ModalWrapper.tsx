"use client"; 

import React from "react";

interface ModalWrapperProps {
  children: React.ReactNode;
  onClose: () => void;
  isOpen: boolean;
}

const ModalWrapper: React.FC<ModalWrapperProps> = ({
  children,
  onClose,
  isOpen,
}) => {
  if (!isOpen) {
    return null; 
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div
        className="absolute inset-0 bg-black bg-opacity-50 backdrop-blur-md"
        onClick={onClose} 
      ></div>

      <div className="relative z-10 w-full max-w-5xl overflow-hidden rounded-2xl shadow-3xl">
        <button
          onClick={onClose}
          className="absolute z-20 text-4xl font-bold text-white transition-transform duration-200 right-4 top-4 hover:scale-110"
          aria-label="Cerrar"
        >
          &times;
        </button>
        {children} 
      </div>
    </div>
  );
};

export default ModalWrapper;