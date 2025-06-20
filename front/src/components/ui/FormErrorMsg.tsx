import React, { FC } from "react";

interface FormErrorMsgProps {
  msg: string;
}

const FormErrorMsg: FC<FormErrorMsgProps> = ({ msg }) => {
  return <p className="mb-2 text-sm text-red-500">{msg}</p>;
};

export default FormErrorMsg;
