import React from 'react';
import {Col, Container, Row, Image, ListGroup, Button, Card} from "react-bootstrap";
import {Link, useParams} from "react-router-dom";
import {useFetchProductById} from "../services/fetchProductById";
import MapContainer from "../components/Map";

const ProductDetail = () => {
    const {productId} = useParams()
    const { data: product, isLoading, error } = useFetchProductById(productId)
    // const { data: categoryProduct } = useFetchtProdcutsByCategory(product.category[0])
    if (isLoading) {
        return (
            <div>
                <h1>loading</h1>
            </div>
        )

    }

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
                        <Image  src={product.productImg} style={{width: "500px", height: "400px"}}  fluid/>
                    </Col>
                    <Col md={4}>
                        <ListGroup variant={"flush"}>
                            <ListGroup.Item>
                                <h5>{product.name}</h5>
                            </ListGroup.Item>
                            <ListGroup.Item>
                                <h5>Price :${product.price}

                                    {/*<Container>*/}
                                    {/*    <h5>korea is {productInfo.price * moneyInfo?.rates?.KRW.slice(0,5)}원</h5>*/}
                                    {/*    <h5>Japan is {productInfo.price * moneyInfo?.rates?.JPY.slice(0,5)}엔</h5>*/}
                                    {/*</Container>*/}
                                </h5>
                            </ListGroup.Item>
                            <ListGroup.Item>
                                <h5>Brand: {product.brand}</h5>
                            </ListGroup.Item>
                            <ListGroup.Item>
                                <h5>Category: {product.category[0]}</h5>
                            </ListGroup.Item>
                            <ListGroup.Item>
                                <p>Updated: {product.updatedAt.slice(0,10)}</p>
                            </ListGroup.Item>
                        </ListGroup>
                    </Col>
                    <Row style={{height: "720px"}}>
                        <Col md={6}>
                            <Container className={"mt-5 mb-2"}>
                                <h3>"product Description"</h3>
                            </Container>
                            {product.desc}
                            {/*    {productInfo.desc.map(i => (*/}
                            {/*        <p>{i}</p>*/}
                            {/*    ))}*/}
                            <h3>region {product.region}</h3>
                            <MapContainer/>
                        </Col>
                        <Col md={4}>

                            <Card style={{ width: '22rem' }}>
                                <Card.Header>판매자 정보</Card.Header>
                                <ListGroup variant="flush">
                                    <ListGroup.Item>지역: {product.region}</ListGroup.Item>
                                    {/*<ListGroup.Item>판매중인 상품: 5EA</ListGroup.Item>*/}
                                    {/*<Button variant={"dark"} onClick={() => navigate(`/user/${product.seller}`)}>*/}
                                    <Button variant={"dark"}>
                                        Go to the store
                                    </Button>
                                </ListGroup>
                            </Card>
                        </Col>
                    </Row>
                </Row>
            </Container>
        </>

    );
};

export default ProductDetail;

