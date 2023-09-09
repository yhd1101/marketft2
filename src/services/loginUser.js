import {authApi} from "./api";
import {useMutation, useQueryClient} from "@tanstack/react-query";

const loginUser = async (userInput) => {
    const { data } = await authApi.post("/login", userInput)
    return data
}

const useLoginUser = () => {
    const queryClient = useQueryClient()
    return useMutation({
        mutationFn: (userInput) => loginUser(userInput),
        onSuccess: (data) => {
            localStorage.setItem("token", data.token)
            queryClient.invalidateQueries({
                queryKey: ['users'],
            })
        }
    })
}

export default useLoginUser