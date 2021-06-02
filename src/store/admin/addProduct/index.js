import {createSlice} from '@reduxjs/toolkit'

const addProductSlice = createSlice({
    name: 'AddProduct', 
    initialState: {
        title: 'The Book',
        description: 'Ultimate guide for ML',
        price: 50
    },
    reducers:{
        addProduct(state, action){
            state[action.payload.field] = action.payload.value
        },
        restProduct(state){ 
            state.title = ''
            state.description = ''
            state.price = null
        },
       
    }
})

export const addProductAction = addProductSlice.actions

export default addProductSlice