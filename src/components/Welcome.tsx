'use client';

import { useContext } from "react";
import images from "@/utils/images";
import Button from "./Button";
import { ModalContext } from "./ModalContext";

const Welcome = () => {
  const { handleSteps, handleClose } = useContext(ModalContext);
  return (
    <div className="bg-white w-[700px] h-[600px] rounded-xl text-black">
      <div className="w-full h-[10%] py-2 px-4 border-b flex items-center justify-between">
        <img src={images.navIcon} alt="app icon" />
        <img src={images.closeIcon} alt="close" onClick={handleClose} className="cursor-pointer" />
      </div>
      <div className="w-2/3 h-[90%] mx-auto flex flex-col items-center justify-center gap-3">
        <div className="w-32 h-32 bg-light-purple rounded-full text-white text-6xl font-bold flex items-center justify-center">
          J
        </div>
        <h2 className="text-xl font-semibold mt-3">Welcome Jane Doe 🙌</h2>
        <p>We need a few details to personalize your experience.</p>
        <Button
          text="Let's do it"
          background="bg-light-purple"
          handleClick={() => handleSteps('second')}
          className="text-white hover:bg-light-purple/90 w-full mt-3"
        />
        <p className="text-light-gray text-xs my-5">
          This will only take a minute.
        </p>
      </div>
    </div>
  );
};

export default Welcome;
