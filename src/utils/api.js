import axios from 'axios';
import Cookies from 'js-cookie';

const API_BASE_URL = "http://localhost:3000/";

const api=axios.create({
    baseURL:API_BASE_URL,
    headers:{
        'accept': 'application/json',
        "Content-Type":"application/json",
    },
    withCredentials: true,
})

api.interceptors.request.use((config)=>{
    const token =Cookies.get("access_token")
    if(token)
    {
        config.headers.Authorization =`Bearer ${token}`;
    }
    
    return config;
})
export default api;