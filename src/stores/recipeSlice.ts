import { StateCreator } from "zustand"
import { getCategories, getRecipes } from "../services/RecipeService"
import type { Categories, Drink, Drinks, SearchFilter } from "../types"

export type RecipiesSliceType = {
    categories: Categories
    drinks: Drinks
    fetchCategories: () => Promise<void>
    searchRecipes: (searchFilter: SearchFilter) => Promise<void>
    selectRecipe: (id: Drink['idDrink']) => Promise<void>
}

export const createRecipesSlice : StateCreator<RecipiesSliceType> = (set) => ({
    categories: {
        drinks: []
    },
    drinks: {
        drinks:[]
    },
    fetchCategories: async() => {
        const categories = await getCategories()
        set({
            categories
        })
    },
    searchRecipes: async(filters) => {
        const drinks = await getRecipes(filters)
        set({
            drinks
        })
    },
    selectRecipe: async(id) => {
        console.log(id)
    }
})