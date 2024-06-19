import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";
import categoryService from "../services/categoryServices";

const initialState = {
    loading: false,
    categories: [],
    singleCategory: null,
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

export const getSingleCategory = createAsyncThunk(
    "categories/getSingleCategory",
    async (id) => {
        const res = await categoryService.getSingleSubCategories(id)
        return res.data;
    }
)


const categorySlice = createSlice({
    name: "category",
    initialState,
    reducers: {
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
            state.loading = false;
            state.categories = action.payload.categories;
            state.message = null;
            state.error = null;
        })
        .addCase(getCategories.rejected, (state, action) => {
            state.loading = false;
            state.categories = [];
            state.message = null;
            state.error = action.payload.message || action.error.message ;
        })
        .addCase(getSingleCategory.pending, (state) => {
            state.loading = true;
            state.singleCategory = null;
            state.message = null;
            state.error = null;
        })
        .addCase(getSingleCategory.fulfilled, (state, action) => {
            state.loading = false;
            state.singleCategory = action.payload.category;
            state.message = null;
            state.error = null;
        })
        .addCase(getSingleCategory.rejected, (state, action) => {
            state.loading = false;
            state.singleCategory = null;
            state.message = null;
            state.error = action.error.message ;
        })
    }
})

export const {clearCategoryErrorMessage} = categorySlice.actions;
const { reducer } = categorySlice;
export default reducer;

