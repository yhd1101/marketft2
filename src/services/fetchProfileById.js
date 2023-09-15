import {productApi} from "./api";

const fetchProfileById = async () => {
    const token = localStorage.getItem("token")
    const config = {
        headers : {
            Authorization: "Bearer" + token,
        }
    }
    console.log("!!!!!!!!!!!!", config)
    const { data } = await productApi.get('/')
    return data
}