import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";
import specialService from "../services/specialServices";

const initialState = {
    loading: false,
    specials: [],
    singleSpecial: null,
    message: null,
    error: null
}

export const getSpecials = createAsyncThunk(
    "specials/getSpecials",
    async () => {
        const res = await specialService.getAll();
        return res.data;
    }
)

export const getSingleSpecial = createAsyncThunk(
    "categories/getSingleCategory",
    async (id) => {
        const res = await specialService.getSingleSubCategories(id)
        return res.data;
    }
)

const specialSlice = createSlice({
    name: "special",
    initialState,
    reducer: {
        clearSpecialErrorMessage: (state) => {
            state.message = null;
            state.error = null;
        }
    },
    extraReducers: (builder) => {
        builder.addCase(getSpecials.pending, (state) => {
            state.loading = true;
            state.specials = [];
            state.message = null;
            state.error = null;
        })
        .addCase(getSpecials.fulfilled, (state, action) => {
            state.loading = false;
            state.specials = action.payload.specials;
            state.message = null;
            state.error = null;
        })
        .addCase(getSpecials.rejected, (state, action) => {
            state.loading = false;
            state.specials = [];
            state.message = null;
            state.error = action.error.message;
            // console.log("-->>>", action.payload)
        })
        .addCase(getSingleSpecial.pending, (state) => {
            state.loading = true;
            state.singleSpecial = null;
            state.message = null;
            state.error = null;
        })
        .addCase(getSingleSpecial.fulfilled, (state, action) => {
            state.loading = false;
            state.singleSpecial = action.payload.special;
            state.message = null;
            state.error = null;
        })
        .addCase(getSingleSpecial.rejected, (state, action) => {
            state.loading = false;
            state.singleSpecial = null;
            state.message = null;
            state.error = action.error.message ;
        })
    }
})

export const {clearSpecialErrorMessage} = specialSlice.actions;
const { reducer } = specialSlice;
export default reducer;

