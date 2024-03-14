import axios from "axios";

const baseURL = "http://localhost:8000/api/v1";

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
  get: async (url, params ) => (await server()).get(url, params),
  post: async (url, params ) => (await server()).post(url, params),
  delete: async (url) => (await server()).delete(url),
};

