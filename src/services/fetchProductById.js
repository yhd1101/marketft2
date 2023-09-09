import {productApi} from "./api";
import {useQuery} from "@tanstack/react-query";

const fetchProductById = async (id) => {
    const { data } = await productApi.get(`/${id}`)
    return data
}

const useFetchProductById = (id) =>
    useQuery(["product", id], () => fetchProductById(id))

export { useFetchProductById }