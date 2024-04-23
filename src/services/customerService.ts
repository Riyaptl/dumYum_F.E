import Api from '../api'


export default false ? {message: "You are Offline. Please! turn on the internet"}
: {
    addAddress: (formData) => {
        return Api.post("customer/add/address", formData)
    },
    updateAddress: (formData) => {
        return Api.post(`customer/update/address/${formData.id}`, formData.data)
    },
    defaultAddress: (id) => {
        return Api.post(`customer/select/address/${id}`)
    },
    getAddress: () => {
        return Api.get("customer/get/address")
    },
    removeAddress: (id) => {
        return Api.post(`customer/remove/address/${id}`)
    },
    getCustomer: () => {
        return Api.get("customer/info/profile")
    },
    updateCustomer: ({id, body}) => {
        return Api.post(`customer/${id}`, body)
    },
    getOrders: () => {
        return Api.get("order/customer")
    },
    getProducts: (id) => {
        return Api.get(`order/predefined/${id}`)
    },
    getQueries: () => {
        return Api.get("query/customer")
    },
    getImages: (id) => {
        return Api.get(`query/images/cust/${id}`)
    },

}