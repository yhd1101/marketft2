import React from 'react';
import {Button, Card, Carousel, Col, Container, Row, Stack} from "react-bootstrap";
import {Link} from "react-router-dom";

const Main = () => {
    const data = 1
    return (
    <>
        <Carousel>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="https://cdn.discordapp.com/attachments/965926129246556200/1102610841804734484/dress-2583113_1920.jpg"
                    alt="First slide"
                    style={{ height : "530px"}}
                />
                <Carousel.Caption>
                    <h1 style={{color: 'white', fontWeight: 'bold', fontSize: '64px', position: 'absolute',left: '50px', bottom: '100px'}}>Selling</h1>
                    <br/>
                    <h3 style={{color: 'white', fontWeight: 'bold', fontSize: '25px', position: 'absolute', left: '50px', bottom: '60px'}}>"Looking for a new owner, your used item</h3>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="https://cdn.discordapp.com/attachments/965926129246556200/1102611482073640981/house-2469110.jpg"
                    alt="Second slide"
                    style={{ height : "530px"}}
                />

                <Carousel.Caption>
                    <h1 style={{color: 'white', fontWeight: 'bold', fontSize: '64px', position: 'absolute',left: '50px', bottom: '100px'}}>real estate</h1>
                    <br/>
                    <h3 style={{color: 'white', fontWeight: 'bold', fontSize: '25px', position: 'absolute', left: '50px', bottom: '60px'}}>Meet your dream at the Korean Market!</h3>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="https://cdn.discordapp.com/attachments/965926129246556200/1102611933435273367/neckties-210347.jpg"
                    alt="Third slide"
                    style={{ height : "530px"}}
                />

                <Carousel.Caption>
                    <h1 style={{color: 'white', fontWeight: 'bold', fontSize: '64px', position: 'absolute',left: '50px', bottom: '100px'}}>Job</h1>
                    <br/>
                    <h3 style={{color: 'white', fontWeight: 'bold', fontSize: '25px', position: 'absolute', left: '50px', bottom: '60px'}}>Find a new workplace in Korea Market easily and quickly.</h3>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
        <Container className={"mt-5"}>
            <Row>
                <h1 className={"mb-3"}>전체상품</h1>
                <Col className={"mt-5"}>
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" style={{height: '250px', width: '100%'} }/>
                        <Card.Body>
                            <Card.Title>생품</Card.Title>
                            <Card.Text>
                                상품입니다.
                            </Card.Text>
                            <Stack direction="horizontal" className={"me-lg-2"}>
                                <div style={{margin: "3px"}} >
                                    <h4>
                                       ㅇㅇ
                                    </h4>
                                </div>
                            </Stack>
                            <Link to={`/product/${data}`}>
                                <Button>Go Detail</Button>
                            </Link>
                        </Card.Body>
                    </Card>

                </Col>
            </Row>
        </Container>

    </>
    );
};

export default Main;