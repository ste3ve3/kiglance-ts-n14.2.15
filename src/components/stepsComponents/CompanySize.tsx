'use client';

import { useContext } from "react";
import ValueBox from "../ValueBox";
import { StepperContext } from "../Stepper";
import { Box } from "@mui/material";
import Button from "../Button";

const companySize = [
  "Myself only",
  "501-1000 emeployees",
  "2-10 employees",
  "1001-5000 employees",
  "11-50 employees",
  "5001-10,000 employees",
  "50-200 employees",
  "10,000+ employees",
  "201-500 employees",
];

const CompanySize = () => {
  const { handleBack, handleNext } = useContext(StepperContext);
  return (
    <div className="w-full h-full flex flex-col place-content-between items-center">
      <div className="w-2/3 h-[80%] flex flex-col items-center overflow-y-auto">
        <h2 className="text-xl font-semibold">What is your company size?</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2 w-full mt-3">
          {companySize.map((size) => (
            <ValueBox key={size} text={size} />
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

export default CompanySize;
