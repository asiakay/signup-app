import React from "react";
import { Container, Nav, Navbar, NavDropdown, Offcanvas } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import LanguageSwitcher from "../components/LanguageSwitcher";

const Navigation = () => {
    const { t } = useTranslation();
    return (
        <>
  {[false].map((expand) => (
            <Navbar key={expand}  expand={false} className="" id="top-nav">
                   <Container fluid>
                    <Navbar.Brand href="#"><div class="black-box"><h5>{t("app_name")}</h5></div></Navbar.Brand>
                    <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
                    <Navbar.Offcanvas
                        id={`offcanvasNavbar-expand-${expand}`}
                        aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
                        placement="end" >
                        <Offcanvas.Header closeButton>
                            <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>{t("app_nav")}</Offcanvas.Title>
                        </Offcanvas.Header>
                        <Offcanvas.Body>
                            <Nav className="justify-content-end flex-grow-1 pe-3">
                                <LanguageSwitcher />
                            <NavDropdown
                                    title="Resources"
                                    id={`offcanvasNavbarDropdown-expand-${expand}`}
                                    >
                                        <NavDropdown.Item href="https://padlet.com/asialakay/ut5ofk1704pjygy7">Content Creation Tools</NavDropdown.Item>
                                        <NavDropdown.Item href="https://padlet.com/asialakay/fvc9yi3h4932">Sustainability & Wellness</NavDropdown.Item>
                                        <NavDropdown.Item href="https://padlet.com/asialakay/loz0p1k78g4zv592"> Web3 Development</NavDropdown.Item>
                                        <NavDropdown.Item href="https://padlet.com/asialakay/7r95wn8y6w5qewbv">A/V & Music NFT Info</NavDropdown.Item>
                                        <NavDropdown.Item href="https://padlet.com/asialakay/5whx56vtzv5vw8yy">Web3 Job Boards</NavDropdown.Item>
                            </NavDropdown>
                            <Nav.Link href="https://music-asiakayy.vercel.app/">Audio Samples</Nav.Link>
                            <Nav.Link href="https://www.behance.net/ilyag">Graphic Design</Nav.Link>
                            <Nav.Link href="https://github.com/asiakay#projects">Dev Projects</Nav.Link>
                            <Nav.Link href="https://artphotography-asiakayy.vercel.app/">Photography</Nav.Link>
                            <Nav.Link href="https://www.mixcloud.com/asialakay/uploads/">DJ Mixes</Nav.Link>
                            <Nav.Link href="https://algogems.io/gallery/AsiaK">NFTs</Nav.Link>
                            <Nav.Link href="https://til.gatsbyjs.io/">Web3 Blog</Nav.Link>
                            <Nav.Link href="https://asialakay-docs-asiakayy.vercel.app/">Developer Blog</Nav.Link>
                            </Nav>
                        </Offcanvas.Body>
                        </Navbar.Offcanvas>
                        </Container>
                </Navbar>
            ))}

        </>

    );

};

export default Navigation;