import Api from '../api'


export default false ? {message: "You are Offline. Please! turn on the internet"}
: {
    addAddress: (formData, dispatch) => {
        return Api.post("customer/add/address", formData, dispatch)
    },

}