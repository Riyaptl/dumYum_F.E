import Api from '../api'


export default false ? {message: "You are Offline. Please! turn on the internet"}
: {
    newsletter: (email) => {
        return Api.post("inquiry/newsletter", {email})
    },
    B2B: (info) => {
        console.log(info);
        return Api.post("inquiry/B2B", info)
    }
}