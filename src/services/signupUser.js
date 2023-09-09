import {authApi} from "./api";
import {useMutation, useQueryClient} from "@tanstack/react-query";


const signupUser = async (userInput) => {
    const { data } = await authApi.post("/signup", userInput)
    return data
}
const useSignupUser = () => {
    const queryClient = useQueryClient()
    return useMutation({
        mutationFn: (userInput) => {
            console.log("-----------",userInput)
            signupUser(userInput)
        },
        onSuccess: () => {
            queryClient.invalidateQueries({
                queryKey: ['users'],
            })
        }
    })
}

export default useSignupUser