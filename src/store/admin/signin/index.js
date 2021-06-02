import {createSlice} from '@reduxjs/toolkit'

const adminSigninSlice = createSlice({
    name: 'signin', 
    initialState: {
        form:{
            email: 'kallamvenky@gmail.com',
            password: 'big mark',
        },
    },
    reducers:{
        onChangeHandler(state, action){
            state['form'][action.payload.field] = action.payload.value
        },
        clearFields(state){
            state['form']['email'] = ''
            state['form']['password'] = ''
        },
    }
})

export const adminSigninAction = adminSigninSlice.actions

export default adminSigninSlice