import { CommunitySchemaType } from "@/components/stepsComponents/Community";
import { ProductTag } from "@/components/stepsComponents/ProductInterests";
import { Product } from "@/components/stepsComponents/Products";
import { Responsibility } from "@/components/stepsComponents/Responsibilties";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface IUserExperience {
  responsibility: Responsibility | null;
  companySize: string | null;
  targetAudience: string | null;
  productInterests: Array<ProductTag>;
  products: Array<Product>;
  image: string | null;
  imageColor: string | null;
  communityData: CommunitySchemaType | null;
}

const initialState: IUserExperience = {
  responsibility: null,
  companySize: null,
  targetAudience: null,
  productInterests: [],
  products: [],
  image: null,
  imageColor: null,
  communityData: null,
};

const userExperienceSlice = createSlice({
  name: "userExperience",
  initialState,
  reducers: {
    updateResponsibility: (
      state,
      action: PayloadAction<Responsibility | null>
    ) => {
      state.responsibility = action.payload;
    },
    updateCompanySize: (state, action: PayloadAction<string | null>) => {
      state.companySize = action.payload;
    },
    updateTargetAudience: (state, action: PayloadAction<string | null>) => {
      state.targetAudience = action.payload;
    },
    updateProductInterests: (
      state,
      action: PayloadAction<Array<ProductTag>>
    ) => {
      state.productInterests = action.payload;
    },
    updateProducts: (state, action: PayloadAction<Array<Product>>) => {
      state.products = action.payload;
    },
    updateImageFile: (state, action: PayloadAction<string | null>) => {
      state.image = action.payload;
    },
    updateImageColor: (state, action: PayloadAction<string | null>) => {
      state.imageColor = action.payload;
    },
    updateCommunityData: (
      state,
      action: PayloadAction<CommunitySchemaType | null>
    ) => {
      state.communityData = action.payload;
    },
    updateField: <K extends keyof IUserExperience>(
      state: IUserExperience,
      action: PayloadAction<{ field: K; value: IUserExperience[K] }>
    ) => {
      state[action.payload.field] = action.payload.value;
    },
    resetState: (state) => {
      return Object.assign(state, initialState);
    },
  },
});

export const {
  updateResponsibility,
  updateCompanySize,
  updateTargetAudience,
  updateProductInterests,
  updateProducts,
  updateImageFile,
  updateImageColor,
  updateCommunityData,
  updateField,
  resetState
} = userExperienceSlice.actions;

export default userExperienceSlice.reducer;
