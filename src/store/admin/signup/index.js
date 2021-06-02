import {createSlice} from '@reduxjs/toolkit'

const adminSignupSlice = createSlice({
    name: 'signup', 
    initialState: {
        form:{
            username: '',
            email: '',
            password: '',
            confirmPassword: ''
        },
        error:{
            status: false,
            message: '',
            data: []
        },
    },
    reducers:{
        onChangeHandler(state, action){
            state['form'][action.payload.field] = action.payload.value
        },
        clearFields(state){
            state['form']['username'] = ''
            state['form']['email'] = ''
            state['form']['password'] = ''
            state['form']['confirmPassword'] = ''
        },
        toggleBackdrop(state){
            state.backdrop = !state.backdrop
        },
        closeErrorStatus(state){
            state.error.status = false
            state.error.message= ''
            state.error.data = []
        },
        openErrorStatus(state, action){
            state.error.status = true
            state.error.message= action.payload.message
            state.error.data = action.payload.data
        }
    }
})

export const adminSignupAction = adminSignupSlice.actions

export default adminSignupSlice