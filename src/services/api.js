import axios from "axios";

const productApi = axios.create({
    baseURL: "http://localhost:8000/api/product"
})


const authApi = axios.create({
    baseURL: "http://localhost:8000/api/auth"
})

const commentApi = axios.create({
    baseURL: "http://localhost:8000/api/comment"
})

const profileApi = axios.create({
    baseURL: "http://localhost:8000/api/auth/"
})

export  {productApi, authApi, commentApi}