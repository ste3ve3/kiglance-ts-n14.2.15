import React, { createContext } from "react";

type ModalContextType = {
  handleClose: () => void;
  handleSteps: (value: React.SetStateAction<string>) => void;
};

export const ModalContext = createContext<ModalContextType>(
  {} as ModalContextType
);