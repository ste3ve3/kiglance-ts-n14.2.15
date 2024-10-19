"use client";

import React, { useContext } from "react";
import images from "@/utils/images";
import Button from "../Button";
import { StepperContext } from "../Stepper";
import { Box } from "@mui/material";
import Image from "next/image";

const colors = [
  "#262626",
  "#BABABA",
  "#8D57FA",
  "#3268F4",
  "#DF6B6B",
  "#34B658",
  "#DEA22C",
  "#F2D777",
];

const ProfilePhoto = () => {
  const [selectedColor, setSelectedColor] = React.useState("#8D57FA");
  const [fileUrl, setFileUrl] = React.useState("");

  const handleFileChange = (event: any) => {
    const file = event.target.files[0];
    if (file) {
      const url = URL.createObjectURL(file);
      setFileUrl(url);
    }
  };

  const { handleBack, handleNext } = useContext(StepperContext);

  return (
    <div className="w-full h-full flex flex-col place-content-between items-center">
      <div className="w-11/12 h-[80%] flex flex-col items-center overflow-y-auto">
        <h2 className="text-xl font-semibold">Choose your profile photo</h2>
        {!fileUrl ? (
          <>
            <div className="my-5">
              <div className="relative cursor-pointer border border-gray-300 rounded-lg bg-gray-50 p-2 flex items-center justify-center gap-2">
                <Image src={images.plusIcon} alt="plus icon" />
                <span className="text-sm">Select an image</span>
                <input
                  type="file"
                  id="file"
                  onChange={handleFileChange}
                  className="absolute inset-0 w-full h-full opacity-0"
                />
              </div>
              <p className="text-gray-400 text-xs mt-2">
                Recommended size: 400x400px
              </p>
            </div>
            <div className="inline-flex relative items-center justify-center w-4/5">
              <hr className="w-full h-px my-8 bg-gray-200 border-0" />
              <span className="absolute px-3 text-xs font-medium text-gray-900 -translate-x-1/2 bg-white left-1/2">
                Or select color
              </span>
            </div>
            <div className="flex flex-wrap items-center justify-around w-full">
              <div
                style={{ backgroundColor: selectedColor }}
                className="w-32 h-32 rounded-full text-white text-6xl font-bold flex items-center justify-center"
              >
                J
              </div>
              <div className="flex gap-2 items-center justify-center flex-wrap">
                {colors.map((color) => (
                  <div
                    key={color}
                    className="relative flex items-center justify-center"
                  >
                    <div
                      style={{ backgroundColor: color }}
                      className={`w-8 h-8 rounded-full`}
                      onClick={() => setSelectedColor(color)}
                    />
                    {selectedColor === color && (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="1em"
                        height="1em"
                        viewBox="0 0 15 15"
                        className="absolute"
                      >
                        <path
                          fill="blue"
                          fill-rule="evenodd"
                          d="M0 7.5a7.5 7.5 0 1 1 15 0a7.5 7.5 0 0 1-15 0m7.072 3.21l4.318-5.398l-.78-.624l-3.682 4.601L4.32 7.116l-.64.768z"
                          clip-rule="evenodd"
                        />
                      </svg>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </>
        ) : (
          <>
            <div className="w-full h-full bg-black/50 flex items-center justify-center">
              <Image
                src={fileUrl}
                alt="file"
                width={48}
                height={48}
                className="w-48 h-48 object-cover object-center"
              />
            </div>
            <div className="flex items-center justify-center gap-4 mt-5">
              <Button
                text="Cancel"
                background="bg-white"
                className="border border-light-gray w-32"
                handleClick={() => setFileUrl("")}
              />
              <Button
                text="Save"
                background="bg-light-purple"
                className="text-white w-32"
              />
            </div>
          </>
        )}
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

export default ProfilePhoto;
