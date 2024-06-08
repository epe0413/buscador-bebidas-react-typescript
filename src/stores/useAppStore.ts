import { create } from "zustand";
import { devtools } from 'zustand/middleware'
import { RecipiesSliceType, createRecipesSlice } from "./recipeSlice";

export const useAppStore = create<RecipiesSliceType>()(devtools((...a) => ({
    ...createRecipesSlice(...a)
})))