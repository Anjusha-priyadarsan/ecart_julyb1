import { configureStore } from "@reduxjs/toolkit";
import productSlice from './productSlice'
import WishlistSlice from './wishlistSlice'
import cartSlice from './cartSlice'



const ffStore=configureStore({
    reducer:{

        productReducer:productSlice,
        WishlistReducer:WishlistSlice,
        cartReducer:cartSlice

    }
})
export default ffStore