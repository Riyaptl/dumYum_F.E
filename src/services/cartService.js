import Api from '../api'


export default false ? {message: "You are Offline. Please! turn on the internet"}
: {
    addCart: ({subCategoryId, quantity}) => {
        return Api.post("cart/add", {subCategoryId, quantity});
    },
    addBucketCart: (bucket) => {
        return Api.post("cart/bucket/add", {bucket});
    },
    getcartQuantity: (subCategoryId) => {
        return Api.post("cart/subCat/quantity", {subCategoryId});
    },
    checkDelivery: (pincode) => {
        return Api.post("location/pincode", {pincode})
    },
    getCart: () => {
        return Api.get("cart");
    },
    deleteCart: () => {
        return Api.post("cart/delete");
    },
    removeCart: () => {
        return Api.post("cart/remove");
    },
    addQuanity: (subCategoryId) => {
        return Api.post("cart/add/quantity", {subCategoryId})
    },
    removeQuanity: (subCategoryId) => {
        return Api.post("cart/remove/quantity", {subCategoryId})
    }

}