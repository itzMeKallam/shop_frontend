import {createSlice} from '@reduxjs/toolkit'

const addProductSlice = createSlice({
    name: 'AddProduct', 
    initialState: {
        title: 'A Master class book',
        description: 'A book to open the magical world',
        price: 50
    },
    reducers:{
        addProduct(state, action){
            state[action.payload.field] = action.payload.value
        },
        restProduct(state){ 
            state.title = ''
            state.description = ''
            state.price = 0
        },
       
    }
})

export const addProductAction = addProductSlice.actions

export default addProductSlice