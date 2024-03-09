import { configureStore } from "@reduxjs/toolkit"
import categoryReducer from "./slices/categorySlice"
import subCategoryReducer from "./slices/subCategorySlice"
import specialReducer from "./slices/specialSlice"
import animationReducer from "./slices/animationSlice"
import cartReducer from "./slices/cartSlice"

const reducer = {
    category: categoryReducer,
    subCategory: subCategoryReducer,
    cart: cartReducer,
    special: specialReducer,
    animation: animationReducer
}

const store = configureStore({
    reducer
})

export default store