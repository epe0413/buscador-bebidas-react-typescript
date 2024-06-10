import { create } from "zustand";
import { devtools } from 'zustand/middleware'
import { RecipiesSliceType, createRecipesSlice } from "./recipeSlice";
import { FavoritesSliceType, createFavoritesSlice } from './favoritesSlice'

export const useAppStore = create<RecipiesSliceType & FavoritesSliceType>()(devtools((...a) => ({
    ...createRecipesSlice(...a),
    ...createFavoritesSlice(...a),
})))