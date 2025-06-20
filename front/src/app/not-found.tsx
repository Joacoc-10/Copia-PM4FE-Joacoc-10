import Button from "@/components/ui/Button";
import Link from "next/link";

export default function NotFound() {
  return (
    <>
      <div className="min-h-[calc(100vh-var(--header-height,0px)-var(--footer-height,0px))] flex flex-col items-center justify-center text-center py-16 px-4 bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white">
        <h1 className="text-8xl md:text-9xl font-extrabold text-red-600 dark:text-red-500 mb-6 drop-shadow-lg">
          404
        </h1>
        <p className="text-xl md:text-2xl font-semibold text-gray-700 dark:text-gray-300 mb-8 max-w-md">
          ¡Oops! Parece que la página que estás buscando no existe.
        </p>
        <Link href="/">
          <Button
            variant="default"
            label="Volver al Inicio"
            className=" py-4 px-16 text-lg rounded-lg "
          ></Button>
        </Link>
      </div>
    </>
  );
}
