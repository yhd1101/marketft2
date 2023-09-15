import React, {useContext} from 'react';
import {Container, Nav, Navbar, NavDropdown} from "react-bootstrap";
import {useTranslation} from "react-i18next";
import LocaleContext from "../LocaleContext";
import i18n from "../lang/i18n";

const Header = () => {
    const { t } = useTranslation()
    const { locale } = useContext(LocaleContext)

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
        <header>
            <Navbar bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href={"/"}>{t("MainTitle")}</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                        </Nav>
                        <Nav>
                            <Nav.Link href="#deets">{t("Selling")}</Nav.Link>
                            <Nav.Link href={"/productRegister"}>{t("Product Post")}</Nav.Link>
                            <Nav.Link>
                                {t("Job")}
                            </Nav.Link>
                            <NavDropdown title={displayLanguage(i18n.language)} id="basic-nav-dropdown" onClick={() => console.log("++++++++")}>
                                <NavDropdown.Item onClick={() => changeLocale("en-US")}>{t("English")}</NavDropdown.Item>
                                <NavDropdown.Item onClick={() => changeLocale("ko-KR")}>{t("Korean")}</NavDropdown.Item>
                                <NavDropdown.Item onClick={() => changeLocale("jp-JP")}> {t("Japanese")}</NavDropdown.Item>
                                <NavDropdown.Item onClick={() => changeLocale('cn-CN')}>{t("Chinese")}</NavDropdown.Item>
                            </NavDropdown>
                            )}
                            <Nav.Link  href={"/signup"}>{t("Signup")}</Nav.Link>
                            <Nav.Link  href={"/login"}>
                                {t("Login")}</Nav.Link>
                            <Nav.Link  href={"/userinfo/:id"}>
                                {t("profile")}</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </header>
    );
};

export default Header;