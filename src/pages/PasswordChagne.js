import React, {useEffect} from 'react';
import {useLocation, useNavigate} from "react-router-dom";
import FormContainer from "../components/FormContainer";
import {Button, Form} from "react-bootstrap";
import {useForm} from "react-hook-form";
import useChangePasswordUser from "../services/passwordChange";

const PasswordChagne = () => {
    const navigate = useNavigate()
    const searchParams = new URLSearchParams(document.location.search)
    console.log(searchParams.get("token"))
    const { register, handleSubmit } = useForm()
    const { data, isLoading, error, mutateAsync } = useChangePasswordUser()

    const onSubmit = async (values) => {
        console.log(values)
        const userInput = {
            ...values,
            token: searchParams.get("token")
        }
        await mutateAsync(userInput)
        alert("패스워드변경완료")
        navigate("/login")
    }
    useEffect(() => {

    }, [navigate])



    //const term = queryParams.get("term")

    return (
        <FormContainer title={"New Password"}>
            <Form onSubmit={handleSubmit(onSubmit)}>
                <Form.Group  className={"mt-4"} controlId="formPassword">
                    <Form.Label>New Password</Form.Label>
                    <Form.Control
                        type="password"
                        placeholder="Password"
                        {...register("newPassword", {required: true})}
                    />
                    <br/>
                    <Form.Control
                        type="password"
                        placeholder="Password"
                        {...register("newPassword", {required: true})}
                    />
                </Form.Group>

                <Button  variant="primary" type={"submit"} className="w-100 mt-4 mb-3">
                    비밀번호 바꾸기
                </Button>
            </Form>
        </FormContainer>
    );
};

export default PasswordChagne;