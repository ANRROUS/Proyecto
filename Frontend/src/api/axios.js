import axios from "axios";
const instance = axios.create({
    baseURL:"https://proyecto-backend-a2n8.onrender.com/api",
    withCredentials:true
})

export default instance
