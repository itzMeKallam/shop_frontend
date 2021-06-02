import {createSlice} from '@reduxjs/toolkit'

const backdropSlice = createSlice({
    name: 'backdrop', 
    initialState: {
        backdrop: false,
    },
    reducers:{
        toggleBackdrop(state){
            state.backdrop = !state.backdrop
        },
    }
})

export const backdropAction = backdropSlice.actions

export default backdropSlice