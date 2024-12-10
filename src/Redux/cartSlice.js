import { createSlice } from "@reduxjs/toolkit";

const cartSlice=createSlice({
    name:'myCart',
    initialState:[],
    reducers:{

        addCartItem:(state,action)=>{
            const existingProduct=state.find(item=>item.id==action.payload.id)
            if(existingProduct){

                const remainingProducts=state.filter(item=>item.id!=existingProduct.id)

                existingProduct.quatintity++
                existingProduct.totalPrice=existingProduct.quatintity*existingProduct.price
                state=[...remainingProducts,existingProduct]

            }
            else{

                state.push({...action.payload,quatintity:1,totalPrice:action.payload.price})

            }
        },
        removeCartItem:(state,action)=>{
         return   state.filter(item=>item.id!=action.payload)
        },
        incQunatity:(state,action)=>{
            const existingProduct=state.find(item=>item.id==action.payload)
            existingProduct.quatintity++
            existingProduct.totalPrice=existingProduct.quatintity*existingProduct.price
            const remainingProducts=state.filter(item=>item.id!=existingProduct.id)
            state=[...remainingProducts,existingProduct]


        },
        decQuantity:(state,action)=>{

            const existingProduct=state.find(item=>item.id==action.payload)
            existingProduct.quatintity--
            existingProduct.totalPrice=existingProduct.quatintity*existingProduct.price
            const remainingProducts=state.filter(item=>item.id!=existingProduct.id)
            state=[...remainingProducts,existingProduct]

        },
        emptyCart:(state)=>{
            return state=[]
        }

    }
})
export const {addCartItem,removeCartItem,incQunatity,decQuantity,emptyCart}=cartSlice.actions
export default cartSlice.reducer