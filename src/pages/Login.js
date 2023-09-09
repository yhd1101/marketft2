import React, {useEffect} from 'react';
import FormContainer from "../components/FormContainer";
import {Button, Col, Container, Form, Row} from "react-bootstrap";
import {useNavigate} from "react-router-dom";

const Login = () => {
    const navigate = useNavigate()

    useEffect(() => {
    },[navigate])
    return (
        <FormContainer title={"Login"}>
            <Form.Group className={"mt-5"} controlId="exampleForm.ControlInput1">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="name@example.com" />
            </Form.Group>
            <Form.Group  className={"mt-4"} controlId="formPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control
                    type="password"
                    placeholder="Password"
                />
            </Form.Group>
            <Button  variant="primary"  className="w-100 mt-4 mb-3">
                Login
            </Button>
            <Container>
                <Row className={"justify-content-md-center mt-5"}>
                    <Col xs lg="3">
                        <Button variant={"link"} onClick={() => navigate("/NewPassword")}>
                            New password
                        </Button>
                    </Col>
                    <Col xs lg="4">
                        <Button variant={"link"} onClick={() => navigate("/signup")}>
                            signup
                        </Button>
                    </Col>
                </Row>
            </Container>
            <Container>
                <Row>
                    <Col></Col>
                    <Col xs={5}>
                        <p>Easy login/membership with SNS account</p>
                        <img className={"Google"} alt={"Google"} src={"src/Logo/google.png"}/>
                        <img className={"Kakao"} alt={"Kakao"} src={"src/Logo/kakaotalk.png"}/>
                        <img className={"NaverLogo"} alt={"Naver"} src={"src/Logo/btnW_아이콘원형.png"}/>
                    </Col>
                    <Col></Col>
                </Row>
            </Container>

        </FormContainer>
    );
};

export default Login;