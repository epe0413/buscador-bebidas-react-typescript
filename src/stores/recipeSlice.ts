import { StateCreator } from "zustand"

type Category = {}

export type RecipiesSliceType = {
    categories: Category[]
}

export const createRecipesSlice : StateCreator<RecipiesSliceType> = () => ({
    categories: []
})