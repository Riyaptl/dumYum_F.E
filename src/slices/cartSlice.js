import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";
import cartService from "../services/cartService";
import Cookies from "js-cookie";

const initialState = {
    loading: false,
    cart: null,
    cartQuantity: 0,
    deliveryStatus: null,
    message: null,
    error: null
}

export const addCart = createAsyncThunk(
    "cart/addCart",
    async ({subCategoryId, quantity}) => {
        const res = await cartService.addCart({subCategoryId, quantity});
        return res.data;
    }
)

export const addMessage = createAsyncThunk(
    "cart/addMessage",
    async ({orderFor, message}) => {
        const res = await cartService.addMessage({orderFor, message});
        return res.data;
    }
)

export const addBucketCart = createAsyncThunk(
    "cart/addBucketCart",
    async (bucket) => {
        const res = await cartService.addBucketCart(bucket);
        return res.data;
    }
)

export const getcartQuantity = createAsyncThunk(
    "cart/getcartQuantity",
    async (subCategoryId) => {
        const res = await cartService.getcartQuantity(subCategoryId);
        return res.data;
    }
)

export const checkDelivery = createAsyncThunk(
    "cart/checkDelivery",
    async (pincode) => {
        const res = await cartService.checkDelivery(pincode);
        return res.data;
    }
)

export const getCart = createAsyncThunk(
    "cart/getCart",
    async () => {
        const res = await cartService.getCart();
        return res.data;
    }
)

export const updateQuantity = createAsyncThunk(
    "cart/updateQuantity",
    async (data) => {
        const res = await cartService.updateQuanity(data);
        return res.data;
    }
)

export const removeProduct = createAsyncThunk(
    "cart/removeProduct",
    async (data) => {
        const res = await cartService.removeProduct(data);
        return res.data;
    }
)

export const updateAddressCart = createAsyncThunk(
    "cart/updateAddressCart",
    async (data) => {
        const res = await cartService.updateAddressCart(data);
        return res.data;
    }
)

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        clearCartErrorMessage: (state) => {
            state.message = null;
            state.error = null;
        }
    },
    extraReducers: (builder) => {
        builder.addCase(addCart.pending, (state) => {
            state.loading = true;
            state.error = null;
        })
        .addCase(addCart.fulfilled, (state, action) => {
            state.loading = false;
            state.message = action.payload.message;
            state.cartQuantity = action.payload.quantity;
            state.error = null;
        })
        .addCase(addCart.rejected, (state, action) => {
            state.loading = false;
            state.message = null;
            state.error = action.error.message ;
        })
        .addCase(addMessage.pending, (state) => {
            state.loading = true;
            state.error = null;
        })
        .addCase(addMessage.fulfilled, (state, action) => {
            state.loading = false;
            state.message = action.payload.message;
            state.cart = action.payload.cart
            state.error = null;
        })
        .addCase(addMessage.rejected, (state, action) => {
            state.loading = false;
            state.message = null;
            state.error = action.error.message ;
            console.log(state.error);
        })
        .addCase(addBucketCart.pending, (state) => {
            state.loading = true;
            state.error = null;
        })
        .addCase(addBucketCart.fulfilled, (state, action) => {
            Cookies.remove('cart')
            state.loading = false;
            state.message = action.payload.message;
            state.error = null;
        })
        .addCase(addBucketCart.rejected, (state, action) => {
            state.loading = false;
            state.message = null;
            state.error = action.error.message ;
        })
        .addCase(getCart.pending, (state) => {
            state.loading = true;
            state.message = null;
            state.error = null;
        })
        .addCase(getCart.fulfilled, (state, action) => {
            state.loading = false;
            state.cart = action.payload.cart;
            state.message = null;
            state.error = null;
        })
        .addCase(getCart.rejected, (state, action) => {
            state.loading = false;
            state.cart = null;
            state.message = null;
            state.error = action.error.message ;
        })
        .addCase(getcartQuantity.pending, (state) => {
            state.loading = true;
            state.error = null;
        })
        .addCase(getcartQuantity.fulfilled, (state, action) => {
            state.loading = false;
            state.cartQuantity = action.payload.quantity;
        })
        .addCase(getcartQuantity.rejected, (state, action) => {
            state.loading = false;
            state.error = action.error.message ;
        })
        .addCase(checkDelivery.pending, (state) => {
            state.loading = true;
            state.error = null;
        })
        .addCase(checkDelivery.fulfilled, (state, action) => {
            state.loading = false;
            state.deliveryStatus = action.payload.message;
            console.log(state.deliveryStatus);
        })
        .addCase(checkDelivery.rejected, (state, action) => {
            state.loading = false;
            state.error = action.error.message ;
        })
        .addCase(updateQuantity.pending, (state) => {
            state.loading = true;
            state.message = null;
            state.error = null;
        })
        .addCase(updateQuantity.fulfilled, (state, action) => {
            state.loading = false;
            state.message = action.payload.message;
            state.cart = action.payload.cart;
            state.error = null;
        })
        .addCase(updateQuantity.rejected, (state, action) => {
            state.loading = false;
            state.message = null;
            state.error = action.error.message ;
        })
        .addCase(removeProduct.pending, (state) => {
            state.loading = true;
            state.message = null;
            state.error = null;
        })
        .addCase(removeProduct.fulfilled, (state, action) => {
            state.loading = false;
            state.message = action.payload.message;
            state.cart = action.payload.cart;
            state.error = null;
        })
        .addCase(removeProduct.rejected, (state, action) => {
            state.loading = false;
            state.message = null;
            state.error = action.error.message ;
            console.log(state.error);
        })
        .addCase(updateAddressCart.pending, (state) => {
            state.loading = true;
            state.message = null;
        })
        .addCase(updateAddressCart.fulfilled, (state, action) => {
            state.loading = false;
            state.message = action.payload.message;
            state.cart = action.payload.cart;
            state.error = null;
        })
        .addCase(updateAddressCart.rejected, (state, action) => {
            state.loading = false;
            state.message = null;
            state.error = action.error.message ;
        })
    }
})

export const {clearCartErrorMessage} = cartSlice.actions;
const { reducer } = cartSlice;
export default reducer;

