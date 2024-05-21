import Api from '../api'


export default false ? {message: "You are Offline. Please! turn on the internet"}
: {
    signIn: (formData) => {
        return Api.post("auth/signin", formData)
    },
    signUp: (formData) => {
        return Api.post("auth/signup", formData)
    },
    checkEmail: (formData) => {
        return Api.post("auth/email", formData)
    },
    sendOTP: (email) => {
        return Api.post("password/send/OTP", {email})
    },
    forgotPass: (formData) => {
        console.log(formData);
        return Api.post("password/forgot/pass", formData)
    },
    resetPassword: (formData) => {
        return Api.post("password/reset/pass", formData)
    }
}