import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import {subCategoryService} from "../services/subCategoryService";

const initialState = {
    loading: false,
    subCategories: [],
    singleSubCategory: null,
    message: null,
    error: null
}

export const getSubCategories = createAsyncThunk(
    "subCategories/getSubCategories",
    async (catId) => {
        const res = await subCategoryService.getAll(catId);
        return res.data
    }
)

export const getSingleSubCategory = createAsyncThunk(
    "subCategories/getSingleSubCategory",
    async (id) => {
        const res = await subCategoryService.getSingle(id);
        return res.data
    }
)

const subCategorySlice = createSlice({
    name: "category",
    initialState,
    reducers: {
        clearSubCategoryErrorMessage: (state) => {
            state.message = null;
            state.error = null;
        }
    },
    extraReducers: (builder) => {
        builder.addCase(getSubCategories.pending, (state) => {
            state.loading = true;
            state.subCategories = [];
            state.message = null;
            state.error = null;
        })
        .addCase(getSubCategories.fulfilled, (state, action) => {
            state.loading = false;
            state.subCategories = action.payload.subCategory;
            state.message = null;
            state.error = null;
        })
        .addCase(getSubCategories.rejected, (state, action) => {
            state.loading = false;
            state.subCategories = [];
            state.message = null;
            state.error = action.error.message;
        })
        .addCase(getSingleSubCategory.pending, (state) => {
            state.loading = true;
            state.singleSubCategory = null;
            state.message = null;
            state.error = null;
        })
        .addCase(getSingleSubCategory.fulfilled, (state, action) => {
            state.loading = false;
            state.singleSubCategory = action.payload.subCategory;
            state.message = null;
            state.error = null;
            // console.log(state.singleSubCategory);
        })
        .addCase(getSingleSubCategory.rejected, (state, action) => {
            state.loading = false;
            state.singleSubCategory = null;
            state.message = null;
            state.error = action.error.message;
            // console.log(state.error);
        })
    }
   
})

export const {clearSubCategoryErrorMessage} = subCategorySlice.actions;
const { reducer } = subCategorySlice;
export default reducer;