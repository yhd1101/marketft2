import {authApi} from "./api";
import {useMutation, useQueryClient} from "@tanstack/react-query";

const passwordChange = async (userInput) => {
    const { data } = await authApi.post("/change/password", userInput)
    return data
}

const useChangePasswordUser = () => {
    const queryClient = useQueryClient()
    return useMutation({
        mutationFn: (userInput) => passwordChange(userInput),
        onSuccess: (data) => {
            console.log("-------------",data)
            queryClient.invalidateQueries({
                queryKey: ['users'],
            })
        }
    })
}

export default useChangePasswordUser