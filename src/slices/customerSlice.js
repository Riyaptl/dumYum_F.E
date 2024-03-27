import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import customerService from "../services/customerService"


const initialState = {
    loading: false,
    address: null,
    message: null,
    error: null
}

export const addAddress = createAsyncThunk (
    "auth/addAddress",
    async (formData) => {
        console.log(formData);
        const res = await customerService.addAddress(formData)
        return res.data
    }
)

export const updateAddress = createAsyncThunk (
    "auth/updateAddress",
    async (formData) => {
        console.log(formData);
        const res = await customerService.updateAddress(formData)
        return res.data
    }
)

export const getAddress = createAsyncThunk (
    "auth/getAddress",
    async () => {
        const res = await customerService.getAddress()
        return res.data
    }
)


const authSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(addAddress.pending, (state) => {
            state.loading = true;
            state.error = null;
            state.message = null;
        })
        .addCase(addAddress.fulfilled, (state, action) => {
            state.loading = true;
            state.message = action.payload.message;
            state.error = null;
        })
        .addCase(addAddress.rejected, (state, action) => {
            state.loading = true;
            state.error = action.error.message;
            state.message = null;
            console.log(state.error);
        })
        .addCase(updateAddress.pending, (state) => {
            state.loading = true;
            state.error = null;
            state.message = null;
        })
        .addCase(updateAddress.fulfilled, (state, action) => {
            state.loading = true;
            state.message = action.payload.message;
            state.error = null;
        })
        .addCase(updateAddress.rejected, (state, action) => {
            state.loading = true;
            state.error = action.error.message;
            state.message = null;
            console.log(state.error);
        })
        .addCase(getAddress.pending, (state) => {
            state.loading = true;
            state.error = null;
            state.message = null;
        })
        .addCase(getAddress.fulfilled, (state, action) => {
            state.loading = true;
            state.address = action.payload.addressDetails;
            state.error = null;
        })
        .addCase(getAddress.rejected, (state, action) => {
            state.loading = true;
            state.error = action.error.message;
            state.addressDetails = null;
            console.log(state.error);
        })
    }
})

const {reducer} = authSlice
export default reducer