import React from 'react';
import FormContainer from "../components/FormContainer";
import {Button, Form} from "react-bootstrap";
import {useForm} from "react-hook-form";

import useForgotPasswordUser from "../services/forgotPassword";
import {useNavigate} from "react-router-dom";

const FindPassword = () => {
    const navigate = useNavigate()
    const { register, handleSubmit } = useForm()
    const { data, isLoading, error, mutateAsync} = useForgotPasswordUser()

    const onSubmit = async (values) => {
        console.log(values)
        await mutateAsync(values)
        navigate("/login")
    }
    return (
        <FormContainer title={"New Password"}>
            <Form onSubmit={handleSubmit(onSubmit)}>
                <Form.Group className={"mt-5"} controlId="exampleForm.ControlInput1">
                    <Form.Label>Please enter the email address you subscribed to.</Form.Label>
                    <Form.Control
                        type="email"
                        placeholder="name@example.com"
                        {...register("email",{required: true})}
                    />
                </Form.Group>
                <Button  variant="primary" type={"submit"} className="w-100 mt-4 mb-3">
                    인증하기
                </Button>
            </Form>
        </FormContainer>
    );
};

export default FindPassword;