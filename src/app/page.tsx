"use client";

import Button from "@/components/Button";
import { ModalContext } from "@/components/ModalContext";
import Steps from "@/components/Steps";
import Success from "@/components/Success";
import ToggleModal from "@/components/ToggleModal";
import Welcome from "@/components/Welcome";
import { resetState } from "@/redux/features/UserExperienceSlice";
import { useAppDispatch } from "@/redux/hook";
import React from "react";

const Home = () => {
  const [modelOpen, setModelOpen] = React.useState(false);
  const [step, setStep] = React.useState<string>("first");
  const dispatch = useAppDispatch();
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
            dispatch(resetState());
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
