import { createSlice } from "@reduxjs/toolkit";

const initialState = {

    loading: false,
    error: null,
    AllCategory: {},
}

export const CategorySlice = createSlice({

    name: "Category",
    initialState,
    reducers: {

        CategoryLoading: (state, action) => {
            state.loading = true

        },
        CategoryLists: (state, action) => {
            state.loading = false
            state.AllCategory = action.payload

        },
        CategoryError: (state, action) => {
            state.loading = false
            state.error = action.payload

        },





    },
})








export const {
    CategoryLoading,
    CategoryLists,
    CategoryError,
} = CategorySlice.actions

export default CategorySlice.reducer