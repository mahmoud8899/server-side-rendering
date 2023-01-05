import { createSlice } from "@reduxjs/toolkit";




const initialState = {
    loading: false,
    error: null,
    allProducts: {},
    productNextNumber: {},
}

export const ProductsSlice = createSlice({

    name: "product",
    initialState,
    reducers: {



        // append error products..
        AppendProductError: (state, action) => {
            state.loading = false
            state.error = action.payload
        },
        ProductsLoading: (state, action) => {
            state.loading = true

        },

        AppendProductsWithUserId: (state, action) => {
            const TheName = action.payload.user
            return {

                ...state,
                loading: false,
                allProducts: {
                    ...state.allProducts,
                    [TheName]: (state.allProducts[TheName] || []).concat(action.payload.HandelData)
                },


            }
        },

        AppenNumberNextPages: (state, action) => {


            return {

                ...state,
                loading: false,
                productNextNumber: {
                    ...state.productNextNumber,
                    [action.payload.user]: action.payload.nextpage
                },

            }

        },

    },
})




export const {
    AppendProductError,
    ProductsLoading,
    AppendProductsWithUserId,
    AppenNumberNextPages,
} = ProductsSlice.actions

export default ProductsSlice.reducer