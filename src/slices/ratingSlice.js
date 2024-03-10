import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";
import ratingService from "../services/ratingService";

const initialState = {
    loading: false,
    rating: null,
    error: null
}

export const getRating = createAsyncThunk(
    "rating/getRating",
    async (subCategoryId) => {
        const res = await ratingService.getRating(subCategoryId);
        return res.data;
    }
)

const ratingSlice = createSlice({
    name: "rating",
    initialState,
    reducers: {
        clearRatingErrorMessage: (state) => {
            state.message = null;
            state.error = null;
        }
    },
    extraReducers: (builder) => {
        builder.addCase(getRating.pending, (state) => {
            state.loading = true;
            state.error = null;
        })
        .addCase(getRating.fulfilled, (state, action) => {
            state.loading = false;
            state.rating = action.payload.rating;
            state.error = null;
        })
        .addCase(getRating.rejected, (state, action) => {
            state.loading = false;
            state.rating = null;
            state.error = action.error.message ;
        })
    }
})

export const {clearRatingErrorMessage} = ratingSlice.actions;
const { reducer } = ratingSlice;
export default reducer;

