import React, {useTransition , useContext} from 'react';
import {Badge, Button, Card, Carousel, Col, Container, Row, Stack} from "react-bootstrap";
import {Link} from "react-router-dom";
import LocaleContext from "../LocaleContext";
import {useFetchProducts} from "../services/fetchProducts";
import { useTranslation } from "react-i18next";
import i18n from "../lang/i18n";
const Main = () => {
    const { t } = useTranslation()
    const { data: products, isLoading, error } = useFetchProducts()
    const { locale } = useContext(LocaleContext)
    console.log(products)
    if (isLoading) {
        return (
            <div>
                <h1>Loading</h1>
            </div>
        )
    }

    const changeLocale = (l) => {
        if (locale !== l) {
            i18n.changeLanguage(l)
        }
    }

    const displayLanguage = (l) => {
        switch (l){
            case "ko-KR":
                return "한국어"
            case "en-US" :
                return "English"
            case "jp-JP" :
                return "日本語"
            case "cn-CN" :
                return "中国话"
            default:
                return ""
        }
    }


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
                    <h1 style={{color: 'white', fontWeight: 'bold', fontSize: '64px', position: 'absolute',left: '50px', bottom: '100px'}}>{t("Selling")}</h1>
                    <br/>
                    <h3 style={{color: 'white', fontWeight: 'bold', fontSize: '25px', position: 'absolute', left: '50px', bottom: '60px'}}>{t("Looking for a new owner, your used item.")}</h3>
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
                    <h1 style={{color: 'white', fontWeight: 'bold', fontSize: '64px', position: 'absolute',left: '50px', bottom: '100px'}}>{t("real estate")}</h1>
                    <br/>
                    <h3 style={{color: 'white', fontWeight: 'bold', fontSize: '25px', position: 'absolute', left: '50px', bottom: '60px'}}>{t("Meet your dream at the Korean Market!")}</h3>
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
                    <h1 style={{color: 'white', fontWeight: 'bold', fontSize: '64px', position: 'absolute',left: '50px', bottom: '100px'}}>{t("Job")}</h1>
                    <br/>
                    <h3 style={{color: 'white', fontWeight: 'bold', fontSize: '25px', position: 'absolute', left: '50px', bottom: '60px'}}>{t("Find a new workplace in Korea Market easily and quickly.")}</h3>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
        <Container className={"mt-5"}>
            <Row>
                <h1 className={"mb-3"}>{t("all products")}</h1>
                {products?.map((product, index) => (
                    <Col className={"mt-5"}>
                        <Card style={{ width: '18rem' }}>
                            <Card.Img  src={product.productImg[0]} variant="top" style={{height: '250px', width: '100%'} }/>
                            <Card.Body>
                                <Card.Title>{product.name}</Card.Title>
                                <Card.Text>
                                    {product.desc[0].slice(0,5)}...
                                </Card.Text>
                                <Stack direction="horizontal" className={"me-lg-2"}>
                                    {product?.category?.map(c => (
                                        <div style={{margin: "3px"}} key={c}>
                                            <h4>
                                                <Badge pill bg="secondary">{c}</Badge>
                                            </h4>
                                        </div>
                                    ))}
                                </Stack>
                                {/*<Stack direction="horizontal" className={"me-lg-2"}>*/}
                                {/*    <div style={{margin: "3px"}} >*/}
                                {/*        <h4>*/}
                                {/*            ㅇㅇ*/}
                                {/*        </h4>*/}
                                {/*    </div>*/}
                                {/*</Stack>*/}
                                <Link to={`/product/${product.id}`}>
                                    <Button>{t("Go Detail")}</Button>
                                </Link>
                            </Card.Body>
                        </Card>

                    </Col>
                ))}

            </Row>
        </Container>

    </>
    );
};

export default Main;