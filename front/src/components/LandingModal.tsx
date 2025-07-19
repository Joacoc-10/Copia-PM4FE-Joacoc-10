"use client"; 

import React, { useState, useEffect } from "react";
import LandingPage from "@/app/(views)/landing/page";
import ModalWrapper from "./ui/ModalWrapper"; 

const ClientLandingModal: React.FC = () => {
  const [showLandingModal, setShowLandingModal] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const hasModalBeenShown = sessionStorage.getItem("landingModalShownInSession");

      if (!hasModalBeenShown) {
        setShowLandingModal(true);
        sessionStorage.setItem("landingModalShownInSession", "true");
      }
    }
  }, []); 

  const handleCloseModal = () => {
    setShowLandingModal(false);
  }

  return (
    <ModalWrapper isOpen={showLandingModal} onClose={handleCloseModal}>
      <LandingPage />
    </ModalWrapper>
  );
};

export default ClientLandingModal;