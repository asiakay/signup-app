import React from "react";
import { Nav, Navbar, NavDropdown, Offcanvas } from "react-bootstrap";
import { Container } from "react-bootstrap";

const Navigation = () => {
    return (
        <div>
          
            {['xxl'].map((expand) => (
            <Navbar key={expand} bg="light" variant="light" expand={expand} className="mb-3">
            <Container fluid>
                    <Navbar.Brand href="#">Asialakay.net</Navbar.Brand>
                    <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
                    <Navbar.Offcanvas
                        id={`offcanvasNavbar-expand-${expand}`}
                        aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
                        placement="end" >
                        <Offcanvas.Header closeButton>
                            <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                                Menu
                            </Offcanvas.Title>
                        </Offcanvas.Header>
                        <Offcanvas.Body>
                            <Nav className="justify-content-end flex-grow-1 pe-3">
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
                            <Nav.Link href="https://music-asiakayy.vercel.app/">Audio Catalog</Nav.Link>
                            <Nav.Link href="https://www.mixcloud.com/asialakay/uploads/">DJ Mixes</Nav.Link>
                            <Nav.Link href="https://www.behance.net/ilyag">Graphic Design</Nav.Link>
                            <Nav.Link href="https://artphotography-asiakayy.vercel.app/">Photography</Nav.Link>
                            <Nav.Link href="https://algogems.io/gallery/AsiaK">NFTs</Nav.Link>
                            <Nav.Link href="https://til.gatsbyjs.io/">Web3 Blog</Nav.Link>
                            <Nav.Link href="https://asialakay-docs-asiakayy.vercel.app/">Tutorials (under construction)</Nav.Link>
                            </Nav>
                        </Offcanvas.Body>
                        </Navbar.Offcanvas>
                </Container>
                </Navbar>
            ))}

        </div>

    );

};

export default Navigation;