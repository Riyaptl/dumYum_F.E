import { configureStore } from "@reduxjs/toolkit"
import categoryReducer from "./slices/categorySlice"
import specialReducer from "./slices/specialSlice"
import animationReducer from "./slices/animationSlice"

const reducer = {
    category: categoryReducer,
    special: specialReducer,
    animation: animationReducer
}

const store = configureStore({
    reducer
})

export default store