import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import orderService from "../services/orderServices"


const initialState = {
    queries: null,
    images: null,
    orders: null,
    orderIds: null,
    products: null,
    loading: false,
    message: null,
    error: null
}

export const getOrders = createAsyncThunk (
    "order/getOrders",
    async () => {
        const res = await orderService.getOrders()
        return res.data
    }
)

export const getQueries = createAsyncThunk (
    "order/getQueries",
    async () => {
        const res = await orderService.getQueries()
        return res.data
    }
)

export const getProducts = createAsyncThunk (
    "order/getProducts",
    async (id) => {
        const res = await orderService.getProducts(id)
        return res.data
    }
)

export const getImages = createAsyncThunk (
    "order/getImages",
    async (id) => {
        const res = await orderService.getImages(id)
        return res.data
    }
)

export const getorderIds = createAsyncThunk (
    "order/orderIds",
    async (id) => {
        const res = await orderService.orderIds(id)
        return res.data
    }
) 

const orderSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getOrders.pending, (state) => {
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
        .addCase(getorderIds.pending, (state) => {
            state.loading = true;
            state.error = null;
        })
        .addCase(getorderIds.fulfilled, (state, action) => {
            state.loading = true;
            state.orderIds = action.payload.orders;
            state.error = null;
        })
        .addCase(getorderIds.rejected, (state, action) => {
            state.loading = true;
            state.orderIds = null;
            state.error = action.error.message;
        })
    }
})

const {reducer} = orderSlice
export default reducer