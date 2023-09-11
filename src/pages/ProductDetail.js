import {Col, Container, Row, Image, ListGroup, Button, Card, InputGroup, Form} from "react-bootstrap";
import {Link, useParams} from "react-router-dom";
import {useFetchProductById} from "../services/fetchProductById";
import MapContainer from "../components/Map";
import {useForm} from "react-hook-form";
import useCommentCreateUser from "../services/commentCreate";
import {useFetchProducts} from "../services/fetchProducts";

const ProductDetail = () => {
    const {productId} = useParams()
    const { register, handleSubmit } = useForm()
    const { mutateAsync, isLoading: commentCreateLoading } = useCommentCreateUser()
    const { data: product, isLoading, error } = useFetchProductById(productId)
    const { data: products, isLoading: productsLoading } = useFetchProducts()

    const onSubmit = async (values) => {
        const userInput = {
            ...values,
            product: productId,
        }
        console.log(userInput)
        await mutateAsync(userInput)
    }


    if (isLoading || commentCreateLoading) {
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
            <Container>
                <h3>관련상품</h3>
                <Row className={"mt-4"}>
                    <Col md={"auto"}>
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" style={{height: '250px', width: '100%'}} />
                            <Card.Body>
                                <Card.Title>상품이름</Card.Title>
                                <Card.Text>
                                    내용...
                                </Card.Text>
                                {/*<Button onClick={() => navigate(`/product/${product._id}`)}>Go Detail</Button>*/}
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
            <br/>
            <Container>
                <h3>댓글</h3>
                    <Row className={"mt-4"}>
                        <Form onSubmit={handleSubmit(onSubmit)}>
                            <Col md={"auto"}>
                                <Container>

                                        {product?.comments?.map((comment, index) => (
                                            <Row key={index}>
                                                <Col>
                                                    <ListGroup variant={"flush"}>
                                                        <ListGroup.Item>
                                                            <h5>이름:{comment.user.name}</h5>
                                                        </ListGroup.Item>
                                                    </ListGroup>
                                                </Col>
                                                <Col xs={6}>댓글내용: {comment.desc}
                                                </Col>
                                            </Row>
                                        ))}

                                </Container>
                                <InputGroup className="mb-3">
                                        <Form.Control
                                            aria-label="Example text with button addon"
                                            aria-describedby="basic-addon1"
                                            {...register("desc", {required: true})}
                                        />
                                        <Button
                                            variant="outline-secondary"
                                            type={"submit"}
                                        >
                                            Button
                                        </Button>
                                </InputGroup>
                            </Col>
                        </Form>
                    </Row>
            </Container>
        </>

    );
};

export default ProductDetail;

