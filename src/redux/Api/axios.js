import axiosDefault from "axios";

// const isProduction = process.env.NODE_ENV === "production";


const baseURL = 'https://lattspis.online/'


const defaultOptions = {
  baseURL,
};

const axios = axiosDefault.create(defaultOptions);

export default axios;