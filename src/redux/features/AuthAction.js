import { createSlice } from "@reduxjs/toolkit";
import * as  ActionTypes from './Types'

// var stateWishlist

// if (typeof window !== 'undefined') {
    //  stateWishlist = localStorage.getItem('USER_INFO') === 'undefined' ? {} :
    // JSON.parse(localStorage.getItem(ActionTypes.USER_INFO))

// } else {
//     console.log('we are running on the server');
// }


const checkout = typeof window !== 'undefined' ?  localStorage.getItem('USER_INFO') === 'undefined' ? {} :
JSON.parse(localStorage.getItem(ActionTypes.USER_INFO))  : null




const initialState = {
    loading: false,
    error: null,
    userInfo: checkout,
    token: typeof window !== 'undefined' ? localStorage.getItem(ActionTypes.TOKEN_INFO) : null
}
const AuthSlice = createSlice({

    name: "auth",
    initialState,
    reducers: {

        Privateloading: (state, action) => {
            state.loading = true
        },

        PrivateData: (state, action) => {

            // check is token is avalibel
            const TheToken = action.payload.token ? action.payload.token : null
            state.loading = false
            state.userInfo = action.payload.data
            typeof window !== 'undefined' && localStorage.setItem(ActionTypes.USER_INFO, JSON.stringify(action.payload.data))
            if (TheToken) {
                state.token = TheToken
                typeof window !== 'undefined' && localStorage.setItem(ActionTypes.TOKEN_INFO, action.payload.token)
            }
        },

        PrivateError: (state, action) => {

            state.error = action.payload
            state.loading = false
        },
        reset: () => initialState,
        FunctionLogout: (state) => {

            typeof window !== 'undefined' && localStorage.setItem(ActionTypes.USER_INFO, JSON.stringify({}))
            typeof window !== 'undefined' && localStorage.setItem(ActionTypes.TOKEN_INFO, null)
            // Object.assign(state, initialState)
            return {
                ...state,
                userInfo: {},
                token: null,
            }
        },


    },
})



export const {
    Privateloading,
    PrivateData,
    PrivateError,
    FunctionLogout,

} = AuthSlice.actions

export default AuthSlice.reducer