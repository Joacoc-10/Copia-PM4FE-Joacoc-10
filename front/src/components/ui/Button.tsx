import React from "react";
import cs from "classnames";

type ButtonVariant = "default" | "alternative" | "dark" | "light" | "red";


const VariantClasses: Record<ButtonVariant, string> = {
  default:
    "text-secondary_yellow-400 font-black bg-accent_blue-500 hover:bg-accent_blue-400 focus:ring-4 focus:ring-accent_blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-accent_blue-600 dark:hover:bg-accent_blue-700 focus:outline-none dark:focus:ring-accent_blue-800",

  alternative:
    "py-2.5 px-5 me-2 mb-2 text-sm font-medium text-light_blue-900 focus:outline-none bg-light_blue-500 rounded-lg border border-light_blue-200 hover:bg-light_blue-300 hover:text-accent_blue-700 focus:z-10 focus:ring-4 focus:ring-light_blue-100 dark:focus:ring-light_blue-700 dark:bg-light_blue-800 dark:text-light_blue-400 dark:border-light_blue-600 dark:hover:text-white dark:hover:bg-light_blue-700",

  dark: "text-white bg-light_black-500 hover:bg-light_black-300 focus:outline-none focus:ring-4 focus:ring-light_blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-light_blue-800 dark:hover:bg-light_blue-700 dark:focus:ring-light_blue-700 dark:border-light_blue-700",

  light:
    "text-primary_blue-500 bg-secondary_yellow-500 border border-light_blue-300 focus:outline-none hover:bg-light_blue-100 focus:ring-4 focus:ring-light_blue-100 font-medium rounded-lg text-extrabold px-5 py-2.5 me-2 mb-2 dark:bg-light_blue-800 dark:text-white dark:border-light_blue-600 dark:hover:bg-light_blue-700 dark:hover:border-light_blue-600 dark:focus:ring-light_blue-700",

  red: "focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900",
};

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  label: string;
  loading?: boolean
}

const Button: React.FC<ButtonProps> = ({
  variant = "default",
  label,
  className,
  loading = false,
  ...props
}) => {
  return (
    <button className={cs(VariantClasses[variant], 
    className, props.disabled && "opacity-50 cursos-not-allowed")} {...props}>
      {!loading && label}
      {loading && <span>Cargando...</span>}
    </button>
  );
};

export default Button;
