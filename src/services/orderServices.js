import Api from '../api'


export default false ? {message: "You are Offline. Please! turn on the internet"}
: {
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
    orderIds: () => {
        return Api.get(`order/cust_orders`)
    }
}