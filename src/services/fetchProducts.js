import productApi from "./api";
import {useQuery} from "@tanstack/react-query";

const fetchProducts = async () => {
    const { data } = await productApi.get("/")
    return data.products
}

const useFetchProducts = () =>
    useQuery(["products"], () => fetchProducts(), {
        keepPreviousData: true,
    });

export {useFetchProducts}