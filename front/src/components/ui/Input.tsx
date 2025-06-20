import React, { FC } from "react";
import cs from "classnames";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  labelClassName?: string;
  classNameContainer?: string;
  id: string;
  inputClassName?: string;
}

const Input: FC<InputProps> = ({
  id,
  label,
  labelClassName,
  className,
  classNameContainer,
  inputClassName,
  ...props
}) => {
  return (
    <div className={classNameContainer}>
      <label
        htmlFor={id}
        className={cs(
          "block mb-2 text-base font-medium text-gray-900 ",
          labelClassName
        )}
      >
        {label || "Input"}
        {props?.required && <span className="ml-1 text-red-500">*</span>}
      </label>
      <input
        id={id}
        className={cs(
          "bg-gray-50 boreder w-full border-gray-300 text-gray-900 text-sm rounded-l",
          props.disabled && "opacity-50 cursos-not-allowed",
          props.readOnly && "bg-gray-200",
          inputClassName,
          className
        )}
        required
        {...props}
      />
    </div>
  );
};

export default Input;
