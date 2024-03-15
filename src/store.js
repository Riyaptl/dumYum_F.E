import { configureStore } from "@reduxjs/toolkit"
import categoryReducer from "./slices/categorySlice"
import subCategoryReducer from "./slices/subCategorySlice"
import specialReducer from "./slices/specialSlice"
import animationReducer from "./slices/animationSlice"
import cartReducer from "./slices/cartSlice"
import ratingReducer from "./slices/ratingSlice"
import authReducer from "./slices/authSlice"

const reducer = {
    auth: authReducer,
    category: categoryReducer,
    subCategory: subCategoryReducer,
    cart: cartReducer,
    rating: ratingReducer,
    special: specialReducer,
    animation: animationReducer
}

const store = configureStore({
    reducer
})

export default store