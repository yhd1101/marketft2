import React from 'react';
import FormContainer from "../components/FormContainer";
import {Col, Container, Form, Image, ListGroup, Row, Table, Button} from "react-bootstrap";

const Profile = () => {
    return (
        <FormContainer title={"Profile"}>
            <br/>
            <Container>
                <Row>
                    <Col md={6}>
                        <Image  src="https://s.gravatar.com/avatar/4fae4dec08844320f10453e96781b9ad?s=200&r=pg&d=mm" style={{width: "200px", height: "200px"}}  fluid/>
                    </Col>
                    <Col md={4}>
                        <ListGroup variant={"flush"}>
                            <ListGroup.Item>
                                <h5>이름:</h5>
                            </ListGroup.Item>
                            <ListGroup.Item>
                                <h5>이메일:</h5>
                            </ListGroup.Item>
                            <ListGroup.Item>
                                <h5>가입일: </h5>
                            </ListGroup.Item>
                            <ListGroup.Item>
                                <h5>업데이트일:  </h5>
                            </ListGroup.Item>
                        </ListGroup>
                    </Col>
                </Row>
            </Container>
            <Form className={"mt-5"} >
                <Form.Group controlId="formEmail">
                    <Form.Label>Email</Form.Label>
                    <Form.Control
                        type="email"
                        placeholder="Enter email"
                        // value={userInfo.email}
                        // onChange={e => setEmail(e.target.value)}
                        // disabled
                    />
                </Form.Group>
                <Form.Group controlId="formPassword" className={"mt-3"}>
                    <Form.Label>User Name</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="User Name"
                        // value={userInfo.name}
                        // onChange={e => setUserName(e.target.value)}
                    />
                </Form.Group>
                <Form.Group controlId="formPassword" className={"mt-3"}>
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                        type="password"
                        placeholder=""
                        // value={userInfo.password}
                        // onChange={e => setPassword(e.target.value)}
                    />
                </Form.Group>
            </Form>

                <Container className={"mt-5"}>
                <hr/>
                <h1>예약리스트</h1>
                <Table striped bordered hover className={"mt-3"}>
                    <thead>
                    <tr>
                        <th>#</th>
                        <th>예약제품</th>
                        <th>예약날짜</th>
                        <th>예약장소</th>
                        <th>구매여부</th>
                    </tr>
                    </thead>
                </Table>
            </Container>
            <Row className={"mt-5"}>
                <Col md={"auto"}>
                    {/* eslint-disable-next-line react/jsx-no-undef */}
                    <Button variant="primary">프로필 수정</Button>{' '}
                </Col>
                <Col md={"auto"}>
                    <Button variant="danger">회원탈퇴</Button>{' '}
                </Col>
            </Row>
        </FormContainer>
    );
};

export default Profile;