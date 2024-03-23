import Api from '../api'


export default false ? {message: "You are Offline. Please! turn on the internet"}
: {
    addAddress: (formData) => {
        return Api.post("customer/add/address", formData)
    },
    updateAddress: (formData) => {
        return Api.post("customer/update/address", formData)
    },
    getAddress: () => {
        return Api.get("customer/get/address")
    },

}