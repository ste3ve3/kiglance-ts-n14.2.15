'use client';

import { Box } from "@mui/material";
import { useContext } from "react";
import Button from "../Button";
import { StepperContext } from "../Stepper";

const productInterests = [
  "Label",
  "SEO",
  "Sales enablement",
  "Email Marketing",
  "Max ch",
  "Cross-Channel",
  "Max using 10 Tags",
  "Label",
  "SEO",
  "Sales enablement",
  "Email Marketing",
  "Max ch",
  "Cross-Channel",
  "Max using 10 Tags",
  "Label",
  "SEO",
  "Sales enablement",
  "Email Marketing",
  "Max ch",
  "Cross-Channel",
  "Max using 10 Tags",
  "Label",
  "SEO",
  "Sales enablement",
  "Email Marketing",
  "Max ch",
  "Cross-Channel",
  "Max using 10 Tags",
  "Label",
  "SEO",
  "Sales enablement",
  "Email Marketing",
  "Max ch",
  "Cross-Channel",
  "Max using 10 Tags",
];

const ProductInterests = () => {
  const { handleBack, handleNext } = useContext(StepperContext);
  return (
    <div className="w-full h-full flex flex-col place-content-between items-center">
      <div className="w-4/5 h-[80%] flex flex-col justify-start items-center overflow-y-auto scrollbar-hidden">
        <h2 className="text-xl font-semibold">
          What are your product interests?
        </h2>
        <p>Choose three or more.</p>
        <div className="flex flex-wrap  gap-2 w-full mt-3">
          {productInterests.map((interest, idx) => (
            <div
              key={idx}
              className={`p-3 text-sm ${
                !productInterests.includes(interest)
                  ? "border border-light-purple/50 text-light-purple bg-light-purple/10"
                  : "border border-light-gray"
              } rounded-full flex items-center justify-center`}
            >
              {interest}
            </div>
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

export default ProductInterests;
