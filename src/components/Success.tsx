'use client';

import { resetState } from "@/redux/features/UserExperienceSlice";
import { useAppDispatch, useAppSelector } from "@/redux/hook";
import images from "@/utils/images";
import Image from "next/image";
import { useContext, useEffect } from "react";
import { ModalContext } from "./ModalContext";

const Success = () => {
  const { handleClose } = useContext(ModalContext);
  const userExperience = useAppSelector(state => state.userExperience);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (userExperience) {
      console.log(userExperience);
      dispatch(resetState())
    }
  }, [])
  
  return (
    <div className="bg-white w-[700px] h-max rounded-xl text-black">
      <div className="w-full h-[10%] py-2 px-4 border-b flex items-center justify-between">
        <Image src={images.navIcon} alt="app icon" />
        <Image
          src={images.closeIcon}
          alt="close"
          onClick={handleClose}
          className="cursor-pointer"
        />
      </div>
      <div className="w-2/3 h-[90%] mx-auto py-10 flex flex-col items-center justify-center gap-3">
        <h2 className="text-lg font-semibold mt-3">You’re all set!</h2>
        <p>Start stackin’, reviewin’, discussin’ and more... 🙌</p>
        <Image src={images.tickCircle} alt="tick circle" />
      </div>
    </div>
  );
};

export default Success;
