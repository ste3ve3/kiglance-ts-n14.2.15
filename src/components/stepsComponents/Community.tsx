"use client";

import { updateCommunityData } from "@/redux/features/UserExperienceSlice";
import { useAppDispatch, useAppSelector } from "@/redux/hook";
import images from "@/utils/images";
import { zodResolver } from "@hookform/resolvers/zod";
import { Box } from "@mui/material";
import Image from "next/image";
import { useContext } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import Button from "../Button";
import InputField from "../InputField";
import { StepperContext } from "../Stepper";
import TextAreaField from "../TextAreaField";

const communitySchema = z.object({
  headline: z
    .string()
    .min(5, "Headline should be at least 5 characters long")
    .max(90, "Exceeded maximum character length of 90"),
  jobTitle: z
    .string()
    .min(2, "Job Title should be at least 2 characters long")
    .max(40, "Exceeded maximum character length of 40"),
  location: z.string().min(3, "Headline should be at least 3 characters long"),
});

export type CommunitySchemaType = z.infer<typeof communitySchema>;

const Community = () => {
  const {
    register,
    handleSubmit,
    reset,
    watch,
    formState: { errors },
  } = useForm<CommunitySchemaType>({
    resolver: zodResolver(communitySchema),
  });
  const healine = watch("headline");
  const jobTitle = watch("jobTitle");
  const { communityData } = useAppSelector((state) => state.userExperience);
  const dispatch = useAppDispatch();

  const { handleBack, handleNext } = useContext(StepperContext);

  const onSubmit = (data: CommunitySchemaType) => {
    dispatch(updateCommunityData(data));
    reset();
    handleNext();
  };

  return (
    <div className="w-full h-full flex flex-col place-content-between items-center">
      <div className="w-full h-full flex flex-col items-center overflow-y-auto">
        <h2 className="text-xl font-semibold">
          Introduce yourself to the community
        </h2>
        <p className="my-3">Let members learn more about you.</p>
        <div className="flex items-center justify-center gap-2">
          <Image src={images.janeDoe} alt="Jane doe" />
          <span>Jane Doe</span>
        </div>
        <form
          action=""
          className="w-full flex-grow mt-4"
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className="grid gap-2 grid-cols-1 w-2/3 h-[77%] place-content-center mx-auto">
            <TextAreaField
              id="headline"
              name="headline"
              register={register}
              rows={1}
              placeholder="Headline; e.g ‘Marketing and Sales Tech lover’"
              error={errors.headline}
              length={healine?.length}
              expected={90}
              value={communityData?.headline}
            />
            <InputField
              type="text"
              name="jobTitle"
              register={register}
              placeholder="Job Title"
              error={errors.jobTitle}
              length={jobTitle?.length}
              expected={40}
              value={communityData?.jobTitle}
            />
            <InputField
              type="text"
              name="location"
              register={register}
              placeholder="Location"
              error={errors.location}
              value={communityData?.location}
            />
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
            <button
              type="submit"
              className={`px-4 py-2.5 rounded-lg bg-light-purple text-white transition duration-200`}
            >
              Submit
            </button>
          </Box>
        </form>
      </div>
    </div>
  );
};

export default Community;
