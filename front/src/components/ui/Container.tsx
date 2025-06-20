import React, { FC } from "react";

interface ContainerProp {
  children: React.ReactNode;
}
const Container: FC<ContainerProp> = ({ children }) => {
  return <div className="container mx-auto px-4"> {children} </div>;
};

export default Container;
