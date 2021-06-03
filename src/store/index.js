import {configureStore } from '@reduxjs/toolkit'
import adminSignupSlice from './admin/signup/'
import adminSigninSlice from './admin/signin/'
import adminAuthSlice from './admin/auth/'
import backdropSlice from './backdrop/'
import displaySlice from './display/'
import addProduct from './admin/addProduct/'
const store = configureStore({
    reducer : {
        adminSignup: adminSignupSlice.reducer,
        adminSignin: adminSigninSlice.reducer,
        adminAuth: adminAuthSlice.reducer,
        backdrop: backdropSlice.reducer,
        display: displaySlice.reducer,
        adminAddProduct: addProduct.reducer
    }
}) 

export default store 