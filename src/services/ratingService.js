import Api from '../api'


export default false ? {message: "You are Offline. Please! turn on the internet"}
: {
    getRating: (subCategoryId) => {
        return Api.post("rating/subCategory", {subCategoryId})
    }
}