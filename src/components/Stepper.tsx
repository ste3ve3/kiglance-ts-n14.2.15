'use client';

import { Box, Step, StepLabel, Stepper, styled } from "@mui/material";
import React, { createContext, useContext, useState } from "react";
import images from "@/utils/images";
import { ModalContext } from "@/app/page";

const StepLine = styled(Box, {
  shouldForwardProp: (prop) => prop !== "isActive" && prop !== "isCompleted",
})<{ isActive: boolean; isCompleted: boolean }>(
  ({ isActive, isCompleted }) => ({
    height: "4px",
    width: "100%",
    background: isActive ? "#D0BAFD" : isCompleted ? "#8D57FA" : "#ECECF1",
    transition: "background 0.3s",
  })
);

interface ReusableStepperProps {
  steps: React.ReactNode[];
}

type ContextType = {
  handleBack: () => void;
  handleNext: () => void;
};

export const StepperContext = createContext<ContextType>({} as ContextType);

const ReusableStepper: React.FC<ReusableStepperProps> = ({ steps }) => {
  const [activeStep, setActiveStep] = useState(0);
  const { handleSteps, handleClose } = useContext(ModalContext);

  const handleNext = () => {
    if (activeStep < steps.length - 1) {
      setActiveStep((prevActiveStep) => prevActiveStep + 1);
    } else handleSteps("success");
  };

  const handleBack = () => {
    if (activeStep > 0) setActiveStep((prevActiveStep) => prevActiveStep - 1);
    else handleSteps("first");
  };

  return (
    <Box
      sx={{
        width: "700px",
        height: "600px",
        bgcolor: "background.paper",
        borderRadius: "8px",
        boxShadow: 24,
        display: "flex",
        flexDirection: "column",
      }}
    >
      <div className="w-full pt-2 px-4 flex items-center justify-between">
        <img src={images.navIcon} alt="app icon" />
        <img
          src={images.closeIcon}
          alt="close"
          onClick={handleClose}
          className="cursor-pointer"
        />
      </div>
      <Box sx={{ width: "100%", mb: 2 }}>
        <Stepper activeStep={activeStep} alternativeLabel connector={null}>
          {steps.map((_, index) => (
            <Step key={index}>
              <StepLabel
                icon={null}
                sx={{
                  "& .MuiStepLabel-label": {
                    display: "block",
                  },
                  "& .MuiStepLabel-iconContainer": {
                    display: "none",
                  },
                }}
              >
                <StepLine
                  isActive={activeStep === index}
                  isCompleted={activeStep > index}
                />
              </StepLabel>
            </Step>
          ))}
        </Stepper>
      </Box>
      <StepperContext.Provider value={{ handleBack, handleNext }}>
        <Box
          sx={{
            mt: 2,
            mb: 2,
            flexGrow: 1,
            display: "flex",
            justifyContent: "center",
            alignItems: "start",
            overflow: "hidden",
          }}
        >
          {steps[activeStep]}
        </Box>
      </StepperContext.Provider>
      {/* <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: 2,
          borderTop: "1px solid #ECECF1",
        }}
      >
        <Button
          handleClick={handleBack}
          text="Back"
          background="bg-white"
          className="text-light-purple font-medium"
        />
        <Button
          text={activeStep === steps.length - 1 ? "Submit" : "Next"}
          background=""
          handleClick={handleNext}
          className="disabled:bg-light-purple/20 disabled:text-light-purple/50 bg-light-purple text-white"
        />
      </Box> */}
    </Box>
  );
};

export default ReusableStepper;
