import { productApi } from "./api";
import {useQuery} from "@tanstack/react-query";

const fetchProducts = async (category) => {
    if (category) {
        const { data } = await productApi.get(`?category=${category}`)
        return data
    }
    const { data } = await productApi.get("/")
    console.log("-----------",data)
    return data
}


const fetchProductsByCategory = async (category) => {
    const { data } = await productApi.get(`?category=${category}`)
    console.log("llllllllll", data)
    return data
}

const useFetchProducts = (category) =>
    useQuery(category ? ['products'] : ['products', category], () => fetchProducts(category), {
        keepPreviousData: true,
    });


export {useFetchProducts}