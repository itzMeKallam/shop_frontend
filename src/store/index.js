import {configureStore } from '@reduxjs/toolkit'
import adminSignupSlice from './admin/signup/'
import adminSigninSlice from './admin/signin/'
import adminAuthSlice from './admin/auth/'
import backdropSlice from './backdrop/'
import errorSlice from './error/'
import addProduct from './admin/addProduct/'
const store = configureStore({
    reducer : {
        adminSignup: adminSignupSlice.reducer,
        adminSignin: adminSigninSlice.reducer,
        adminAuth: adminAuthSlice.reducer,
        backdrop: backdropSlice.reducer,
        error: errorSlice.reducer,
        adminAddProduct: addProduct.reducer
    }
}) 

export default store 