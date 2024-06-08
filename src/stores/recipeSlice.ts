import { StateCreator } from "zustand"
import { getCategories } from "../services/RecipeService"

type Category = {}

export type RecipiesSliceType = {
    categories: Category[]
    fetchCategories: () => Promise<void>
}

export const createRecipesSlice : StateCreator<RecipiesSliceType> = () => ({
    categories: [],
    fetchCategories: async() => {
        getCategories()
    }
})