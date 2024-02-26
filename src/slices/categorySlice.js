import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";
import categoryService from "../services/categoryServices";

const initialState = {
    loading: false,
    categories: [],
    message: null,
    error: null
}

export const getCategories = createAsyncThunk(
    "categories/getCategories",
    async () => {
        const res = await categoryService.getAll();
        return res.data;
    }
)

const categorySlice = createSlice({
    name: "category",
    initialState,
    reducer: {
        clearCategoryErrorMessage: (state) => {
            state.message = null;
            state.error = null;
        }
    },
    extraReducers: (builder) => {
        builder.addCase(getCategories.pending, (state) => {
            state.loading = true;
            state.categories = [];
            state.message = null;
            state.error = null;
        })
        .addCase(getCategories.fulfilled, (state, action) => {
            console.log(action.payload.categories);
            state.loading = false;
            state.categories = action.payload.categories;
            state.message = null;
            state.error = null;
        })
        .addCase(getCategories.rejected, (state, action) => {
            state.loading = false;
            state.categories = [];
            state.message = null;
            state.error = action.error.message || action.payload.message;
        })
    }
})

export const {clearCategoryErrorMessage} = categorySlice.actions;
const { reducer } = categorySlice;
export default reducer;

