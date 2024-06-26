import Api from '../api'


export default false ? {message: "You are Offline. Please! turn on the internet"}
: {
    getAll: () => {
        return Api.get("category");
    },
    getSingleSubCategories: (id) => {
        return Api.get(`category/subCategories/${id}`)
    }
}