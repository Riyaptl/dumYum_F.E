import { configureStore } from "@reduxjs/toolkit"
import categoryReducer from "./slices/categorySlice"
import subCategoryReducer from "./slices/subCategorySlice"
import specialReducer from "./slices/specialSlice"
import animationReducer from "./slices/animationSlice"
import cartReducer from "./slices/cartSlice"
import locationReducer from "./slices/locationSlice"
import ratingReducer from "./slices/ratingSlice"
import authReducer from "./slices/authSlice"
import customerReducer from "./slices/customerSlice"
import inquiryReducer from "./slices/inquirySlice"

const reducer = {
    auth: authReducer,
    category: categoryReducer,
    subCategory: subCategoryReducer,
    cart: cartReducer,
    customer: customerReducer,
    location: locationReducer,
    rating: ratingReducer,
    special: specialReducer,
    animation: animationReducer,
    inquiry: inquiryReducer
}

const store = configureStore({
    reducer
})

export default store