import { configureStore } from "@reduxjs/toolkit";
import userExperience from "./features/UserExperienceSlice";

export const store = configureStore({
  reducer: {
    userExperience,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
