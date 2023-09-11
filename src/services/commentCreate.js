import {commentApi} from "./api";
import {useMutation, useQueryClient} from "@tanstack/react-query";

const commentCreate = async (userInput) => {
    const token = localStorage.getItem("token")
    const config = {
        headers: {
            Authorization: "Bearer " + token,
        }
    }
    console.log("------------",config)
    console.log("+++++++++++++++", userInput)
    const { data } = await commentApi.post("/create", userInput, config)
    return data
}

const useCommentCreateUser = () => {
    const queryClient = useQueryClient()
    return useMutation({
        mutationFn: (userInput) => commentCreate(userInput),
        onSuccess: (data) => {
            queryClient.invalidateQueries({
                // queryKey: ['comment', data.user.id],
            })
        }
    })
}

export default useCommentCreateUser