import Api from '../api'


export default false ? {message: "You are Offline. Please! turn on the internet"}
: {
    getAll: () => {
        return Api.get("special");
    },
    getSingleSubCategories: (id) => {
        return Api.get(`special/subCategories/${id}`)
    }
}