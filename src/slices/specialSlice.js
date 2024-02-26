import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";
import specialService from "../services/specialServices";

const initialState = {
    loading: false,
    specials: [],
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
            state.error = action.payload.message;
        })
    }
})

export const {clearSpecialErrorMessage} = specialSlice.actions;
const { reducer } = specialSlice;
export default reducer;

