import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";
import cartService from "../services/cartService";

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

// export const getCart = createAsyncThunk(
//     "cart/getCart",
//     async () => {
//         const res = await cartService.getCart();
//         return res.data;
//     }
// )

// export const addQuantity = createAsyncThunk(
//     "cart/addQuantity",
//     async (subCategoryId) => {
//         const res = await cartService.addQuanity(subCategoryId);
//         return res.data;
//     }
// )

// export const removeQuantity = createAsyncThunk(
//     "cart/removeQuantity",
//     async (subCategoryId) => {
//         const res = await cartService.removeQuanity(subCategoryId);
//         return res.data;
//     }
// )

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
        // .addCase(getCart.pending, (state) => {
        //     state.loading = true;
        // })
        // .addCase(getCart.fulfilled, (state, action) => {
        //     state.loading = false;
        //     state.cart = action.payload.cartDetails;
        // })
        // .addCase(getCart.rejected, (state, action) => {
        //     state.loading = false;
        //     state.cart = null;
        //     state.error = action.error.message ;
        // })
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
        // .addCase(addQuantity.pending, (state) => {
        //     state.loading = true;
        //     state.message = null;
        // })
        // .addCase(addQuantity.fulfilled, (state, action) => {
        //     state.loading = false;
        //     state.message = action.payload.message;
        //     state.error = null;
        // })
        // .addCase(addQuantity.rejected, (state, action) => {
        //     state.loading = false;
        //     state.message = null;
        //     state.error = action.error.message ;
        // })
        // .addCase(removeQuantity.pending, (state) => {
        //     state.loading = true;
        //     state.message = null;
        // })
        // .addCase(removeQuantity.fulfilled, (state, action) => {
        //     state.loading = false;
        //     state.message = action.payload.message;
        //     state.error = null;
        // })
        // .addCase(removeQuantity.rejected, (state, action) => {
        //     state.loading = false;
        //     state.message = null;
        //     state.error = action.error.message ;
        // })
    }
})

export const {clearCartErrorMessage} = cartSlice.actions;
const { reducer } = cartSlice;
export default reducer;

