import React from 'react';
import {Col, Container, Row, Image, ListGroup} from "react-bootstrap";
import {Link, useParams} from "react-router-dom";

const ProductDetail = () => {
    const {id} = useParams()
    return (
        <>
            <Container>
                <Link className={"btn btn-light my-3"} to="/">
                    Go Back
                </Link>
            </Container>
            <Container>
                <Row>
                    <Col md={6}>
                        <Image style={{width: "500px", height: "400px"}}  fluid/>
                    </Col>
                    <Col md={4}>
                        <ListGroup variant={"flush"}>
                            <ListGroup.Item>
                                <h5>상품이름</h5>
                            </ListGroup.Item>
                            <ListGroup.Item>
                                <h5>Price :$150

                                    {/*<Container>*/}
                                    {/*    <h5>korea is {productInfo.price * moneyInfo?.rates?.KRW.slice(0,5)}원</h5>*/}
                                    {/*    <h5>Japan is {productInfo.price * moneyInfo?.rates?.JPY.slice(0,5)}엔</h5>*/}
                                    {/*</Container>*/}
                                </h5>
                            </ListGroup.Item>
                            <ListGroup.Item>
                                <h5>Brand: 애플</h5>
                            </ListGroup.Item>
                            <ListGroup.Item>
                                <h5>Category: digital</h5>
                            </ListGroup.Item>
                            <ListGroup.Item>
                                <p>Updated: 2023.09.08</p>
                            </ListGroup.Item>
                        </ListGroup>
                    </Col>
                </Row>
            </Container>
        </>

    );
};

export default ProductDetail;

