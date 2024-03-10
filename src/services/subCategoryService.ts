import Api from '../api'

export const subCategoryService = {
    getAll: (catId) => {
        return Api.get(`subCategory/all/${catId}`);
    },
    getSingle: (id) => {
        console.log(id);
        return Api.get(`subCategory/${id}`)
    }
}