'use client';

import { Box } from "@mui/material";
import Button from "../Button";
import ValueBox from "../ValueBox";
import { useContext } from "react";
import { StepperContext } from "../Stepper";

const responsibilities = [
  "Marketing",
  "IT",
  "Customer Services",
  "Finance",
  "Sales",
  "Owner/CEO",
  "Design",
  "Education/Student",
  "Product",
];

const Responsibilties = () => {
  const { handleBack, handleNext } = useContext(StepperContext);
  return (
    <div className="w-full h-full flex flex-col place-content-between items-center">
      <div className="w-2/3 h-[80%] flex flex-col items-center overflow-y-auto">
        <h2 className="text-xl font-semibold">
          What is your main work responsibility?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2 w-full mt-3">
          {responsibilities.map((responsibility) => (
            <ValueBox key={responsibility} text={responsibility} />
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

export default Responsibilties;
