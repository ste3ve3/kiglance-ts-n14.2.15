'use client';

import { z } from "zod";
import images from "@/utils/images";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import TextAreaField from "../TextAreaField";
import InputField from "../InputField";
import { Box } from "@mui/material";
import { useContext } from "react";
import Button from "../Button";
import { StepperContext } from "../Stepper";

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

type CommunitySchemaType = z.infer<typeof communitySchema>;

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

  const onSubmit = (data: CommunitySchemaType) => {
    reset();
  };
  const { handleBack, handleNext } = useContext(StepperContext);
  return (
    <div className="w-full h-full flex flex-col place-content-between items-center">
      <div className="w-2/3 h-[80%] flex flex-col items-center overflow-y-auto">
        <h2 className="text-xl font-semibold">
          Introduce yourself to the community
        </h2>
        <p className="my-3">Let members learn more about you.</p>
        <div className="flex items-center justify-center gap-2">
          <img src={images.janeDoe} alt="Jane doe" />
          <span>Jane Doe</span>
        </div>
        <form
          action=""
          className="grid gap-2 grid-cols-1 w-full mt-4"
          onSubmit={handleSubmit(onSubmit)}
        >
          <TextAreaField
            id="headline"
            name="headline"
            register={register}
            rows={1}
            placeholder="Headline; e.g ‘Marketing and Sales Tech lover’"
            error={errors.headline}
            length={healine?.length}
            expected={90}
          />
          <InputField
            type="text"
            name="jobTitle"
            register={register}
            placeholder="Job Title"
            error={errors.jobTitle}
            length={jobTitle?.length}
            expected={40}
          />
          <InputField
            type="text"
            name="location"
            register={register}
            placeholder="Location"
            error={errors.location}
          />
        </form>
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
          text={"Submit"}
          background=""
          handleClick={handleNext}
          className="disabled:bg-light-purple/20 disabled:text-light-purple/50 bg-light-purple text-white"
        />
      </Box>
    </div>
  );
};

export default Community;
