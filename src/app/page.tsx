'use client';

import React, { createContext } from "react";
import Button from "@/components/Button";
import ToggleModal from "@/components/ToggleModal";
import Welcome from "@/components/Welcome";
import Success from "@/components/Success";
import Steps from "@/components/Steps";

type ModalContextType = {
  handleClose: () => void;
  handleSteps: (value: React.SetStateAction<string>) => void;
};

export const ModalContext = createContext<ModalContextType>(
  {} as ModalContextType
);

const Home = () => {
  const [modelOpen, setModelOpen] = React.useState(false);
  const [step, setStep] = React.useState<string>("first");
  return (
    <section className="firstw-screen h-screen flex items-center justify-center">
      <Button
        text="Let’s get started !"
        background="bg-light-purple"
        className="px-20 text-sm text-white hover:bg-light-purple/90"
        handleClick={() => setModelOpen((curr) => !curr)}
      />
      <ModalContext.Provider
        value={{
          handleClose: () => {
            setModelOpen((curr) => !curr);
            setStep("first");
          },
          handleSteps: setStep,
        }}
      >
        <ToggleModal open={modelOpen}>
          {step === "first" && <Welcome />}
          {step === "second" && <Steps />}
          {step === "success" && <Success />}
        </ToggleModal>
      </ModalContext.Provider>
    </section>
  );
};

export default Home;
