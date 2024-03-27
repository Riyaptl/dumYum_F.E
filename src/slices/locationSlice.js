import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";
import locationService from "../services/locationService";

const initialState = {
    loading: false,
    location: null,
    message: null,
    deliverMessage: null,
    error: null
}


export const getLocationCart = createAsyncThunk(
    "location/getLocationCart",
    async (data) => {
        const res = await locationService.getLocationCart(data);
        return res.data;
    }
)

export const whetherDeliver = createAsyncThunk(
    "location/whetherDeliver",
    async (data) => {
        const res = await locationService.whetherDeliver(data);
        return res.data;
    }
)

const locationSlice = createSlice({
    name: "location",
    initialState,
    reducers: {
        clearlocationErrorMessage: (state) => {
            state.message = null;
            state.error = null;
        }
    },
    extraReducers: (builder) => {
        builder.addCase(getLocationCart.pending, (state) => {
            state.loading = true;
            state.message = null;
            state.deliverMessage = null;
            state.error = null;
        })
        .addCase(getLocationCart.fulfilled, (state, action) => {
            state.loading = false;
            state.location = action.payload.location;
            state.message = null;
            state.deliverMessage = null;
            state.error = null;
        })
        .addCase(getLocationCart.rejected, (state, action) => {
            state.loading = false;
            state.location = null;
            state.message = null;
            state.deliverMessage = null;
            state.error = action.error.message ;
        })
        .addCase(whetherDeliver.pending, (state) => {
            state.loading = true;
            state.deliverMessage = null;
            state.error = null;
        })
        .addCase(whetherDeliver.fulfilled, (state, action) => {
            state.loading = false;
            state.deliverMessage = action.payload.message;
            state.error = null;
        })
        .addCase(whetherDeliver.rejected, (state, action) => {
            state.loading = false;
            state.deliverMessage = null;
            state.error = action.error.message ;
        })
    }
})

export const {clearlocationErrorMessage} = locationSlice.actions;
const { reducer } = locationSlice;
export default reducer;

