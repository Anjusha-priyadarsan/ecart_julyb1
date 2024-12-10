import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";


export const  fetchProducts=createAsyncThunk('products/fetchProducts',async()=>{
   const result= await axios.get('https://dummyjson.com/products')
   localStorage.setItem("products",JSON.stringify(result.data.products))
   return result.data.products
})

const productSlice=createSlice({
    name:'products',
    initialState:{
        allProducts:[],
        dummyAllProducts:[],
        loading:false,
        error:""
    },
    reducers:{

        serachProduct:(state,action)=>{
            state.allProducts=state.dummyAllProducts.filter(pro=>pro.title.toLowerCase().includes(action.payload))

        }



    },
    extraReducers:
        (builder)=>{

            builder.addCase(fetchProducts.fulfilled,(state,action)=>{

                state.allProducts=action.payload,
                state.dummyAllProducts=action.payload
                state.loading=false,
                state.error=""

            })
            builder.addCase(fetchProducts.pending,(state,action)=>{

                state.allProducts=[]
                state.loading=true,
                state.error=""

            })
            builder.addCase(fetchProducts.rejected,(state,action)=>{

                state.allProducts=[]
                state.loading=false,
                state.error="Api call failed ...please try after sometimes"

            })


        

    }
        
})
export const {serachProduct} =productSlice.actions
export default productSlice.reducer