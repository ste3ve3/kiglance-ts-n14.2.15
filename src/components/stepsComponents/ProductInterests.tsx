"use client";

import { fetchProductTags } from "@/api";
import { updateProductInterests } from "@/redux/features/UserExperienceSlice";
import { useAppDispatch, useAppSelector } from "@/redux/hook";
import { Box } from "@mui/material";
import { useContext, useEffect, useState } from "react";
import Button from "../Button";
import { StepperContext } from "../Stepper";

export type ProductTag = {
  id?: string;
  name: string;
};

const ProductInterests = () => {
  const { handleBack, handleNext } = useContext(StepperContext);
  const [productInterests, setProductInterests] = useState<ProductTag[]>([]);
  const { productInterests: selectedProductsInterests } = useAppSelector(
    (state) => state.userExperience
  );
  const [allProductInterests, setAllProductInterests] = useState<string[]>([]);
  const dispatch = useAppDispatch();

  useEffect(() => {
    const getProductTags = async () => {
      const data = await fetchProductTags();
      setProductInterests(data);
    };
    getProductTags();
  }, []);

  useEffect(() => {
    setAllProductInterests(
      selectedProductsInterests.map((interest) => interest.name)
    );
  }, []);

  useEffect(() => {
    dispatch(
      updateProductInterests(
        productInterests.filter((interest) =>
          allProductInterests.includes(interest.name)
        )
      )
    );
  }, [allProductInterests, dispatch, productInterests]);

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
              className={`p-3 text-sm cursor-pointer ${
                allProductInterests.includes(interest.name)
                  ? "border border-light-purple/50 text-light-purple bg-light-purple/10"
                  : "border border-light-gray"
              } rounded-full flex items-center justify-center`}
              onClick={() => {
                setAllProductInterests((prev) =>
                  prev.includes(interest.name)
                    ? prev.filter((item) => item !== interest.name)
                    : [...prev, interest.name]
                );
              }}
            >
              {interest?.name}
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
          disabled={selectedProductsInterests.length < 3}
          className="disabled:bg-light-purple/20 disabled:text-light-purple/50 bg-light-purple text-white"
        />
      </Box>
    </div>
  );
};

export default ProductInterests;
