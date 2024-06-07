import { create } from "zustand";
import { RecipiesSliceType, createRecipesSlice } from "./recipeSlice";

export const useAppStore = create<RecipiesSliceType> ( (...a) => ({
    ...createRecipesSlice(...a)
}))