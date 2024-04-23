import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import customerService from "../services/customerService"


const initialState = {
    queries: null,
    images: null,
    orders: null,
    products: null,
    loading: false,
    customer: null,
    address: null,
    message: null,
    error: null
}

export const addAddress = createAsyncThunk (
    "auth/addAddress",
    async (formData) => {
        const res = await customerService.addAddress(formData)
        return res.data
    }
)

export const updateAddress = createAsyncThunk (
    "auth/updateAddress",
    async (formData) => {
        const res = await customerService.updateAddress(formData)
        return res.data
    }
)

export const defaultAddress = createAsyncThunk (
    "auth/defaultAddress",
    async (id) => {
        const res = await customerService.defaultAddress(id)
        return res.data
    }
)

export const removeAddress = createAsyncThunk (
    "auth/removeAddress",
    async (id) => {
        const res = await customerService.removeAddress(id)
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

export const getOrders = createAsyncThunk (
    "auth/getOrders",
    async () => {
        const res = await customerService.getOrders()
        return res.data
    }
)

export const getQueries = createAsyncThunk (
    "auth/getQueries",
    async () => {
        const res = await customerService.getQueries()
        return res.data
    }
)

export const getProducts = createAsyncThunk (
    "auth/getProducts",
    async (id) => {
        const res = await customerService.getProducts(id)
        return res.data
    }
)

export const getImages = createAsyncThunk (
    "auth/getImages",
    async (id) => {
        const res = await customerService.getImages(id)
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
        .addCase(getOrders.pending, (state) => {
            state.loading = true;
            state.error = null;
        })
        .addCase(getOrders.fulfilled, (state, action) => {
            state.loading = true;
            state.orders = action.payload.orders;
            state.error = null;
        })
        .addCase(getOrders.rejected, (state, action) => {
            state.loading = true;
            state.orders = null;
            state.error = action.error.message;
        })
        .addCase(getProducts.pending, (state) => {
            state.loading = true;
            state.products = null;
            state.error = null;
        })
        .addCase(getProducts.fulfilled, (state, action) => {
            state.loading = true;
            state.products = action.payload.orders;
            state.error = null;
        })
        .addCase(getProducts.rejected, (state, action) => {
            state.loading = true;
            state.products = null;
            state.error = action.error.message;
        })
        .addCase(getQueries.pending, (state) => {
            state.loading = true;
            state.error = null;
        })
        .addCase(getQueries.fulfilled, (state, action) => {
            state.loading = true;
            state.queries = action.payload.queries;
            state.error = null;
        })
        .addCase(getQueries.rejected, (state, action) => {
            state.loading = true;
            state.queries = null;
            state.error = action.error.message;
        })
        .addCase(getImages.pending, (state) => {
            state.loading = true;
            state.images = null;
            state.error = null;
        })
        .addCase(getImages.fulfilled, (state, action) => {
            state.loading = true;
            state.images = action.payload.images;
            state.error = null;
        })
        .addCase(getImages.rejected, (state, action) => {
            state.loading = true;
            state.images = null;
            state.error = action.error.message;
        })
    }
})

const {reducer} = authSlice
export default reducer