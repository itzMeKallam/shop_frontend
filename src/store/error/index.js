import {createSlice} from '@reduxjs/toolkit'

const errorSlice = createSlice({
    name: 'error', 
    initialState: {
            status: false,
            message: '',
            data: [],
    },
    reducers:{
        closeErrorStatus(state){
            state.status = false
            state.message= ''
            state.data = []
        },
        openErrorStatus(state, action){
            state.status = true
            state.message= action.payload.message
            state.data = action.payload.data
        }
    }
})

export const errorAction = errorSlice.actions

export default errorSlice