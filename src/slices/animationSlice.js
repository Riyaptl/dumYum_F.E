import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";
import animationService from "../services/animationServices";

const initialState = {
    animationLoading: false,
    animationSpecials: [],
    error: null
}

export const getAnimationSpecials = createAsyncThunk(
    "animations/getAnimations",
    async () => {
        const res = await animationService.getAllAnimation();
        return res.data;
    }
)

const animationSlice = createSlice({
    name: "animation",
    initialState,
    reducer: {
        clearSpecialErrorMessage: (state) => {
            state.error = null;
        }
    },
    extraReducers: (builder) => {
        builder.addCase(getAnimationSpecials.pending, (state) => {
            state.animationLoading = true;
            state.animationSpecials = [];
            state.error = null;
        })
        .addCase(getAnimationSpecials.fulfilled, (state, action) => {
            state.animationLoading = false;
            state.animationSpecials = action.payload.specials;
            state.error = null;
        })
        .addCase(getAnimationSpecials.rejected, (state, action) => {
            state.animationLoading = false;
            state.animationSpecials = [];
            state.error = action.payload.message;
        })
    }
})

export const {clearSpecialErrorMessage} = animationSlice.actions;
const { reducer } = animationSlice;
export default reducer;






