import { productApi } from "./api";
import {useQuery} from "@tanstack/react-query";

const fetchProducts = async () => {
    const { data } = await productApi.get("/")
    return data.products
}
const fetchProductsByCategory = async (category) => {
    const { data } = await productApi.get(`?category=${category}`)
    return data.prodcuts
}

const useFetchProducts = () =>
    useQuery(["products"], () => fetchProducts(), {
        keepPreviousData: true,
    });
const useFetchtProdcutsByCategory = (category) =>
    useQuery(["products", category], () => fetchProductsByCategory(category), {
        keepPreviousData: true,
    })

export {useFetchProducts, useFetchtProdcutsByCategory}