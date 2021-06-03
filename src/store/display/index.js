import {createSlice} from '@reduxjs/toolkit'

const displaySlice = createSlice({
    name: 'display', 
    initialState: {
            status: false,
            message: '',
            data: ''
    },
    reducers:{
        closeDisplayStatus(state){
            state.status = false
            state.message= ''
            state.data = ''
        },
        openDisplayStatus(state, action){
            state.status = true
            state.message= action.payload.message
            state.data = action.payload.data
        }
    }
})

export const displayAction = displaySlice.actions

export default displaySlice