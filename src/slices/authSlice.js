import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import authService from "../services/authService"
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const initialState = {
    loading: false,
    isLoggedIn: localStorage.getItem('token') ? true : false,
    message: null,
    authError: null,
    username: '',
    email: '',
    password: ''
}

export const signIn = createAsyncThunk (
    "auth/signIn",
    async (formData) => {
        const res = await authService.signIn(formData)
        return res.data
    }
)

export const sendOTP = createAsyncThunk(
    "auth/sendOTP",
    async (email) => {
        const res = await authService.sendOTP(email)
        return res.data
    }
)

export const forgotPass = createAsyncThunk(
    "auth/forgotPass",
    async (formData) => {
        const res = await authService.forgotPass(formData)
        return res.data
    }
)

export const signUp = createAsyncThunk (
    "auth/signUp",
    async (formData) => {
        console.log(formData);
        const res = await authService.signUp(formData)
        return res.data
    }
)

export const checkEmail = createAsyncThunk (
    "auth/checkEmail",
    async (formData) => {
        const res = await authService.checkEmail(formData)
        return res.data
    }
)

export const resetPassword = createAsyncThunk (
    "auth/resetPassword",
    async (formData) => {
        const res = await authService.resetPassword(formData)
        return res.data
    }
)

const authSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        logOut: (state) => {
            console.log('logout called');
            localStorage.clear();
            state.isLoggedIn = false;
            toast.success("Logged out succesfully")
        },
        setUserData: (state, action) => {
            state.username = action.payload.name;
            state.email = action.payload.email;
            state.password = action.payload.password;
        }
    },
    extraReducers: (builder) => {
        builder.addCase(signIn.pending, (state) => {
            state.loading = true;
            state.authError = null;
            state.message = null;
        })
        .addCase(signIn.fulfilled, (state, action) => {
            localStorage.setItem('token', action.payload.accessToken)
            localStorage.setItem('role', action.payload.role)
            state.loading = false;
            state.isLoggedIn = true;
            state.message = action.payload.message;
            state.authError = null;
        })
        .addCase(signIn.rejected, (state, action) => {
            state.loading = false;
            state.isLoggedIn = false;
            state.authError = action.error.message;
            state.message = null;
            // console.log(state.authError);
        })
        .addCase(signUp.pending, (state) => {
            state.loading = true;
            state.authError = null;
            state.message = null;
        })
        .addCase(signUp.fulfilled, (state, action) => {
            localStorage.setItem('token', action.payload.accessToken)
            localStorage.setItem('role', action.payload.role)
            state.loading = false;
            state.isLoggedIn = true;
            state.message = action.payload.message;
            state.authError = null;
        })
        .addCase(signUp.rejected, (state, action) => {
            state.loading = false;
            state.isLoggedIn = false;
            state.message = null;
            state.authError = action.error.message;
        })
        .addCase(checkEmail.pending, (state) => {
            state.loading = true;
            state.authError = null;
            state.message = null;
        })
        .addCase(checkEmail.fulfilled, (state, action) => {
            state.loading = false;
            state.message = action.payload.message;
            state.authError = null;
        })
        .addCase(checkEmail.rejected, (state, action) => {
            state.loading = false;
            state.message = null;
            state.authError = action.error.message;
        })
        .addCase(sendOTP.pending, (state) => {
            state.loading = true;
            state.authError = null;
            state.message = null;
        })
        .addCase(sendOTP.fulfilled, (state, action) => {
            state.loading = false;
            state.message = action.payload.message;
            state.authError = null;
        })
        .addCase(sendOTP.rejected, (state, action) => {
            state.loading = false;
            state.message = null;
            state.authError = action.error.message;
        })
        .addCase(forgotPass.pending, (state) => {
            state.loading = true;
            state.authError = null;
            state.message = null;
        })
        .addCase(forgotPass.fulfilled, (state, action) => {
            state.loading = false;
            state.message = action.payload.message;
            state.authError = null;
            console.log(state.message);
        })
        .addCase(forgotPass.rejected, (state, action) => {
            state.loading = false;
            state.message = null;
            state.authError = action.error.message;
        })
        .addCase(resetPassword.pending, (state) => {
            state.loading = true;
            state.authError = null;
            state.message = null;
        })
        .addCase(resetPassword.fulfilled, (state, action) => {
            state.loading = false;
            state.message = action.payload.message;
            state.authError = null;
        })
        .addCase(resetPassword.rejected, (state, action) => {
            state.loading = false;
            state.message = null;
            state.authError = action.error.message;
        })
    }
})

export const {logOut, setUserData} = authSlice.actions;
const {reducer} = authSlice
export default reducer