import React, {useEffect, useState} from 'react';
import FormContainer from "../components/FormContainer";
import {Button, Col, Container, Form, Row} from "react-bootstrap";
import {useNavigate} from "react-router-dom";
import {useForm} from "react-hook-form";
import useSignupUser from "../services/signupUser";

const Signup = () => {

    const navigate = useNavigate()
    const {register, handleSubmit } = useForm()
    const {data, isLoading, error, mutateAsync} = useSignupUser()

    const [users, setUsers] = useState([]);
    const userData = [
        { name: "만 14세이상입니다." },
        { name: "이용약관" },
        { name: "개인정보수집 및 이용동의" },
        { name: "개인정보 마케팅 활용 동의" },
        { name: "이벤트, 쿠폰, 특가 알림 메일 및 SMS 등 수신" }
    ];

    const onSubmit = async (values) => {
        const userInput = {
            ...values,
            provider: "local"
        }
        console.log("++++++++++++++++",userInput)
        await mutateAsync(userInput)
        navigate("/login")
    }

    useEffect(() => {
        setUsers(userData)
    },[navigate])

    const handleChange = (e) => {
        const { name, checked } = e.target;
        if (name === "allSelect") {
            let tempUser = users.map((user) => {
                return { ...user, isChecked: checked };
            });
            setUsers(tempUser);
        } else {
            let tempUser = users.map((user) =>
                user.name === name ? { ...user, isChecked: checked } : user
            );
            setUsers(tempUser);
        }
    };


    return (
        <>
            <FormContainer title={"Signup"}>
                <Container>
                    <Row>
                        <Col xs={5}>
                            <img className={"Google"} alt={"Google"} src={"src/Logo/google.png"}/>
                            <img className={"Kakao"} alt={"Kakao"} src={"src/Logo/kakaotalk.png"}/>
                            <img className={"NaverLogo"} alt={"Naver"} src={"src/Logo/btnW_아이콘원형.png"}/>
                        </Col>
                    </Row>
                </Container>
                <br/>
                <Form onSubmit={handleSubmit(onSubmit)}>
                    <Form.Group controlId="formName">
                        <Form.Label>Name</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder='이름을 입력하세요'
                            {...register("name", {required: true})}
                        />
                    </Form.Group>
                    <br/>
                        <Form.Group controlId="exampleForm.ControlInput1">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control
                                type="email"
                                placeholder="name@example.com"
                                {...register("email", {required: true})}
                            />
                        </Form.Group>
                    <Button  variant="primary"  className="w-100 mt-4 mb-3">
                        인증하기
                    </Button>
                    {/*<Form.Control*/}
                    {/*    type="text"*/}
                    {/*    placeholder="인증코드"*/}
                    {/*/>*/}
                    {/*<Button  variant="primary" className="w-100 mt-4 mb-3">*/}
                    {/*    인증번호 입력*/}
                    {/*</Button>*/}

                    <Form.Group  className={"mt-4"} controlId="formPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control
                            type="password"
                            placeholder="Password"
                            {...register("password", {required: true})}
                        />
                    </Form.Group>
                    <br/>
                    <br/>
                    <form className="form w-100">
                        <div className="form-check">
                            <input
                                type="checkbox"
                                className="form-check-input"
                                name="allSelect"
                                // checked={
                                //   users.filter((user) => user?.isChecked !== true).length < 1
                                // }
                                checked={!users.some((user) => user?.isChecked !== true)}
                                onChange={handleChange}
                            />
                            <label className="form-check-label ms-2">All Select</label>
                        </div>
                        {users.map((user, index) =>(
                            <Container className="form-check" key={index}>
                                <input
                                    type="checkbox"
                                    className="form-check-input"
                                    name={user.name}
                                    checked={user?.isChecked || false}
                                    onChange={handleChange}
                                />
                                <label className="form-check-label ms-2">{user.name}</label>
                            </Container>
                        ))}
                    </form>
                    <Button variant="primary" className="w-100 mt-4" type={"submit"}>
                        Submit
                    </Button>
                </Form>

                <Container>
                    <br/>
                    <Row>
                        <Col></Col>
                        <Col xs={5}><p>Do you already have an ID?</p></Col>
                        <Col>
                            <Button variant={"link"} onClick={() => navigate("/login")}>
                                Login
                            </Button>
                        </Col>
                    </Row>
                </Container>


            </FormContainer>
        </>

    );
};

export default Signup;