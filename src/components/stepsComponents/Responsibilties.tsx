"use client";

import { fetchResponsibilities } from "@/api";
import { updateResponsibility } from "@/redux/features/UserExperienceSlice";
import { useAppDispatch, useAppSelector } from "@/redux/hook";
import { Box } from "@mui/material";
import { useContext, useEffect, useState } from "react";
import Button from "../Button";
import { StepperContext } from "../Stepper";
import ValueBox from "../ValueBox";

export type Responsibility = {
  id: string;
  name: string;
};

const Responsibilties = () => {
  const { handleBack, handleNext } = useContext(StepperContext);
  const [responsibilities, setResponsibilities] = useState<Responsibility[]>(
    []
  );
  const { responsibility } = useAppSelector((state) => state.userExperience);
  const dispatch = useAppDispatch();

  useEffect(() => {
    const getResponsibilities = async () => {
      const data = await fetchResponsibilities();
      setResponsibilities(data);
    };
    getResponsibilities();
  }, []);

  return (
    <div className="w-full h-full flex flex-col place-content-between items-center">
      <div className="w-2/3 h-[80%] flex flex-col items-center overflow-y-auto">
        <h2 className="text-xl font-semibold">
          What is your main work responsibility?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2 w-full mt-3">
          {responsibilities.map((responsibilityItem) => (
            <ValueBox
              key={responsibilityItem?.name}
              handleClick={() => {
                dispatch(updateResponsibility(responsibilityItem));
              }}
              isSelected={responsibilityItem.name === responsibility?.name}
              text={responsibilityItem?.name}
            />
          ))}
        </div>
      </div>
      <Box
        sx={{
          display: "flex",
          justifyContent: `${responsibility ? "space-between" : "start"}`,
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
        {responsibility && (
          <Button
            text={"Next"}
            background=""
            handleClick={handleNext}
            className="disabled:bg-light-purple/20 disabled:text-light-purple/50 bg-light-purple text-white"
          />
        )}
      </Box>
    </div>
  );
};

export default Responsibilties;
