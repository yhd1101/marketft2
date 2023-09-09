import {authApi} from "./api";
import {useMutation, useQueryClient} from "@tanstack/react-query";

const forgotPassword = async (userInput) => {
    const{ data } = await authApi.post("/forgot/password", userInput)
    return data
}

const useForgotPasswordUser = () => {
    return useMutation({
        mutationFn: (userInput) => forgotPassword(userInput),
        onSuccess: (data) => {
            console.log(data)
        }
    })
}
export default useForgotPasswordUser