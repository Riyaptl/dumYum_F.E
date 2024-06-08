import axios from "axios";
import { toast } from "react-toastify";

const baseURL = `${import.meta.env.VITE_APP_API_URL}`

export const server = async () => {
  try {
    
    const axiosInstance = axios.create({
      baseURL,
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    });

    axiosInstance.interceptors.request.use(
      (config) => {
        const token = localStorage.getItem("token");
        if (token) {
          config.headers["Authorization"] = `Bearer ${token}`;
        }
        return config;
      },
      (error) => {
        throw new Error(error.message);
      }
    );

    axiosInstance.interceptors.response.use(
      (response) => {
        if (
          response.request.responseURL ===
          `${response.config.baseURL}/${response.config.url}`
        )
          return response;
        else throw new Error("Response URL does not match request URL");
      },
      (error) => {
        const message = error.response.data.message;
        if (message === "Json Web Token is expired, try again" || message === "Json Web Token is invalid, try again"){
          localStorage.clear()
        }
        if (Array.isArray(message)) 
        {
          throw new Error(message[0]);
        }
        else {
          throw new Error(message); 
        }
      }
    );

    return axiosInstance;
  } catch (e) {
    throw new Error(e.message)
  }
};

export default {
  get: async (url, params ) => {
    try {
      const res = await (await server()).get(url, params)
      const message = res.data.message
      if (message){
        toast.success(message)
      }
      return res
    } catch (error) {
      toast.error(error.message)
      throw new Error(error.message)
    }
  },
  post: async (url, params ) => {
    try {
      const res = await (await server()).post(url, params)
      const message = res.data.message
      if (message){
        toast.success(message)
      }
      return res
    } catch (error) {
      toast.error(error.message)
      throw new Error(error.message)
    }
  },
  delete: async (url) => {
    try {
      const res = await (await server()).delete(url)
      const message = res.data.message
      if (message){
        toast.success(message)
      }
      return res
    } catch (error) {
      toast.error(error.message)
      throw new Error(error.message)
    }
  },
};

