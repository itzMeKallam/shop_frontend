import {createSlice} from '@reduxjs/toolkit'

const adminAuthSlice = createSlice({
    name: 'signin', 
    initialState: {
        token: 'login',
    },
    reducers:{
        setAuth(state, action){
            state.token = action.payload.token
        },
        resetAuth(state){ 
            state.token = 'login'
        },
    }
})

export const adminAuthAction = adminAuthSlice.actions

export default adminAuthSlice