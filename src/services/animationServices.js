import Api from '../api'


export default false ? {message: "You are Offline. Please! turn on the internet"}
: {
    getAllAnimation: () => {
        return Api.get("special/type/animation")
    }
}