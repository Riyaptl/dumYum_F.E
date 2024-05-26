import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";
import inquiryService from "../services/inquiryService";

const initialState = {
    loading: false,
    message: null,
    error: null
}

export const newsletter = createAsyncThunk(
    "inquiry/newsletter",
    async (email) => {
        const res = await inquiryService.newsletter(email);
        return res.data;
    }
)

export const B2B = createAsyncThunk(
    "inquiry/B2B",
    async (info) => {
        const res = await inquiryService.B2B(info);
        return res.data;
    }
)

const inquirySlice = createSlice({
    name: "inquiry",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(newsletter.pending, (state) => {
            state.loading = true;
            state.error = null;
        })
        .addCase(newsletter.fulfilled, (state, action) => {
            state.loading = false;
            state.message = action.payload.message;
            state.error = null;
        })
        .addCase(newsletter.rejected, (state, action) => {
            state.loading = false;
            state.message = null;
            state.error = action.error.message ;
        })
        .addCase(B2B.pending, (state) => {
            state.loading = true;
            state.error = null;
        })
        .addCase(B2B.fulfilled, (state, action) => {
            state.loading = false;
            state.message = action.payload.message;
            state.error = null;
        })
        .addCase(B2B.rejected, (state, action) => {
            state.loading = false;
            state.message = null;
            state.error = action.error.message ;
        })
    }
})

const { reducer } = inquirySlice;
export default reducer;

