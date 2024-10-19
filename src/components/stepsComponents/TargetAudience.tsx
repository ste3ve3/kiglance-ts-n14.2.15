'use client';

import { Box } from "@mui/material";
import { useContext } from "react";
import Button from "../Button";
import { StepperContext } from "../Stepper";
import ValueBox from "../ValueBox";

const audiences = [
  "Business (B2B)",
  "Consumers (B2C)",
  "Business and Consumers",
];

const TargetAudience = () => {
  const { handleBack, handleNext } = useContext(StepperContext);
  return (
    <div className="w-full h-full flex flex-col place-content-between items-center">
      <div className="w-2/3 h-[80%] flex flex-col items-center overflow-y-auto">
        <h2 className="text-xl font-semibold">Who is your target audience?</h2>
        <div className="grid grid-cols-1 gap-2 w-4/5 mt-3">
          {audiences.map((audience) => (
            <ValueBox key={audience} text={audience} />
          ))}
        </div>
      </div>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: 2,
          borderTop: "1px solid #ECECF1",
          width: "100%",
        }}
      >
        <Button
          handleClick={handleBack}
          text="Back"
          background="bg-white"
          className="text-light-purple font-medium"
        />
        <Button
          text={"Next"}
          background=""
          handleClick={handleNext}
          className="disabled:bg-light-purple/20 disabled:text-light-purple/50 bg-light-purple text-white"
        />
      </Box>
    </div>
  );
};

export default TargetAudience;
