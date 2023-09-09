import React from 'react';
import FormContainer from "../components/FormContainer";
import {Button, Form} from "react-bootstrap";

const NewPassword = () => {
    return (
        <FormContainer title={"New Password"}>
            <Form.Group className={"mt-5"} controlId="exampleForm.ControlInput1">
                <Form.Label>Please enter the email address you subscribed to.</Form.Label>
                <Form.Control type="email" placeholder="name@example.com" />
            </Form.Group>
            <Button  variant="primary"  className="w-100 mt-4 mb-3">
                인증하기
            </Button>
        </FormContainer>
    );
};

export default NewPassword;