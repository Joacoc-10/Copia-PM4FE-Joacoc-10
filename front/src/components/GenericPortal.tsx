'use client';
import {  useEffect,  useState } from "react";
import { createPortal } from "react-dom";

interface GenericPortalProps {
  children: React.ReactNode;
  containerId?: string;
}

const GenericPortal = ({ children, containerId}: GenericPortalProps) => {
  const [mounted, setMounted] = useState(false);
  const [container, setContainer] = useState<HTMLElement | null>(null);

  useEffect(() => {
    setMounted(true);
    if (containerId) {
      const el = document.getElementById(containerId);
      setContainer(el);
    }else {
      setContainer(document.body);
    }
  }, [containerId]);

  if (!mounted || !container) return null;
  
  return createPortal(children,container);

}

export default GenericPortal;