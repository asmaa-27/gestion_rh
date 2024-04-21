import axios from "axios";

const axiosClient = axios.create({
    baseURL: "http://localhostS:8000",
    withCredentials: true
})
export default axiosClient
