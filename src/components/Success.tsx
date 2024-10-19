'use client';

import { useContext } from "react";
import images from "@/utils/images";
import { ModalContext } from "./ModalContext";

const Success = () => {
  const { handleClose } = useContext(ModalContext);
  return (
    <div className="bg-white w-[700px] h-max rounded-xl text-black">
      <div className="w-full h-[10%] py-2 px-4 border-b flex items-center justify-between">
        <img src={images.navIcon} alt="app icon" />
        <img
          src={images.closeIcon}
          alt="close"
          onClick={handleClose}
          className="cursor-pointer"
        />
      </div>
      <div className="w-2/3 h-[90%] mx-auto py-10 flex flex-col items-center justify-center gap-3">
        <h2 className="text-lg font-semibold mt-3">You’re all set!</h2>
        <p>Start stackin’, reviewin’, discussin’ and more... 🙌</p>
        <img src={images.tickCircle} alt="tick circle" />
      </div>
    </div>
  );
};

export default Success;
