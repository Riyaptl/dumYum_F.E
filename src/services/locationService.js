import Api from '../api'


export default false ? {message: "You are Offline. Please! turn on the internet"}
: {
    getLocationCart: (data) => {
        return Api.post("location/details/pincode", data);
    },
    whetherDeliver: (data) => {
        return Api.post("location/pincode", data);
    }
}