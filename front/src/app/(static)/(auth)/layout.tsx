import React, { FC } from "react";
import Image from "next/image";
import Link from "next/link";
import { Routes } from "@/routes";

interface LayoutAuthProps {
  children: React.ReactNode;
}

const LayoutAuth: FC<LayoutAuthProps> = ({ children }) => {
  return (
    <div className="flex items-center justify-center min-h-screen p-4 bg-secondary_yellow-500">
      <div
        className="flex flex-col w-full overflow-hidden rounded-lg bg-light_blue-500 md:flex-row max-w-7xl min-h-[600px] 
                    m-8 shadow-[0_25px_50px_-12px_rgba(0,0,0,0.4)] border border-light_blue-800 "
      >
        <div className="relative w-full h-64 md:w-1/2 md:h-auto">
          <Link href={Routes.home}>
            <Image
              src="https://ik.imagekit.io/i1pxujmp5t/Proyecto%20M4%20Henry/Gemini_Generated_Image_ar3695ar3695ar36.jpeg?updatedAt=1749592843917"
              alt="Imagen FuturaTech"
              fill
              className="object-cover"
            />
          </Link>
        </div>

        <div className="flex items-center justify-center w-full p-8 md:w-1/2">
          <div className="w-full">{children}</div>
        </div>
      </div>
    </div>
  );
};

export default LayoutAuth;
