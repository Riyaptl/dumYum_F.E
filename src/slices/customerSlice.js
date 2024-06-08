import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import customerService from "../services/customerService"


const initialState = {
    queries: null,
    images: null,
    orders: null,
    orderIds: null,
    products: null,
    loading: false,
    customer: null,
    address: null,
    message: null,
    error: null
}

export const addAddress = createAsyncThunk (
    "customer/addAddress",
    async (formData) => {
        const res = await customerService.addAddress(formData)
        return res.data
    }
)

export const updateAddress = createAsyncThunk (
    "customer/updateAddress",
    async (formData) => {
        const res = await customerService.updateAddress(formData)
        return res.data
    }
)

export const defaultAddress = createAsyncThunk (
    "customer/defaultAddress",
    async (id) => {
        const res = await customerService.defaultAddress(id)
        return res.data
    }
)

export const removeAddress = createAsyncThunk (
    "customer/removeAddress",
    async (id) => {
        const res = await customerService.removeAddress(id)
        return res.data
    }
)

export const getAddress = createAsyncThunk (
    "customer/getAddress",
    async () => {
        const res = await customerService.getAddress()
        return res.data
    }
)

export const getCustomer = createAsyncThunk(
    "customer/getCustomer",
    async () => {
        const res = await customerService.getCustomer()
        return res.data
    }
)

export const updateCustomer = createAsyncThunk(
    "customer/updateCustomer",
    async ({id, body}) => {
        const res = await customerService.updateCustomer({id, body})
        return res.data
    }
)

const customerSlice = createSlice({
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
            state.address = action.payload.address;
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
        .addCase(defaultAddress.pending, (state) => {
            state.loading = true;
            state.error = null;
            state.message = null;
        })
        .addCase(defaultAddress.fulfilled, (state, action) => {
            state.loading = true;
            state.message = action.payload.message;
            state.error = null;
        })
        .addCase(defaultAddress.rejected, (state, action) => {
            state.loading = true;
            state.error = action.error.message;
            state.message = null;
            console.log(state.error);
        })
        .addCase(removeAddress.pending, (state) => {
            state.loading = true;
            state.error = null;
            state.message = null;
        })
        .addCase(removeAddress.fulfilled, (state, action) => {
            state.loading = true;
            state.message = action.payload.message;
            state.error = null;
        })
        .addCase(removeAddress.rejected, (state, action) => {
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
        })
        .addCase(getCustomer.pending, (state) => {
            state.loading = true;
            state.error = null;
        })
        .addCase(getCustomer.fulfilled, (state, action) => {
            state.loading = true;
            state.customer = action.payload.customer;
            state.error = null;
        })
        .addCase(getCustomer.rejected, (state, action) => {
            state.loading = true;
            state.customer = null;
            state.error = action.error.message;
        })
        .addCase(updateCustomer.pending, (state) => {
            state.loading = true;
            state.error = null;
        })
        .addCase(updateCustomer.fulfilled, (state, action) => {
            state.loading = true;
            state.customer = action.payload.customer;
            state.error = null;
        })
        .addCase(updateCustomer.rejected, (state, action) => {
            state.loading = true;
            state.customer = null;
            state.error = action.error.message;
        })
    }
})

const {reducer} = customerSlice
export default reducer