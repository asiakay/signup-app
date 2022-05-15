import React from "react";
import { Nav, Navbar, NavDropdown } from "react-bootstrap";
import { Container } from "react-bootstrap";

const Navigation = () => {
    return (
        <div>
            <Navbar bg="light" variant="light" expand="lg" collapseOnSelect>
            <Container>
                    <Navbar.Brand href="#">Asialakay.net</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav 
                        className="me-auto"
                        style={{  }}
                        
                    >
                        <Nav.Link href="https://music-asiakayy.vercel.app/">Audio Catalog</Nav.Link>
                        <Nav.Link href="https://www.mixcloud.com/asialakay/uploads/">DJ Mixes</Nav.Link>
                        <Nav.Link href="https://www.behance.net/ilyag">Graphic Design</Nav.Link>
                        <Nav.Link href="https://artphotography-asiakayy.vercel.app/">Photography</Nav.Link>
                        <Nav.Link href="https://algogems.io/gallery/AsiaK">NFTs</Nav.Link>
                        <Nav.Link href="https://til.gatsbyjs.io/">Web3 Blog</Nav.Link>
                        <Nav.Link href="https://asialakay-docs-asiakayy.vercel.app/">Tutorials (under construction)</Nav.Link>
                        <NavDropdown title="Resources" id="collapsible-nav-dropdown">
                            <NavDropdown.Item href="https://padlet.com/asialakay/ut5ofk1704pjygy7">Creator Tools</NavDropdown.Item>
                            <NavDropdown.Item href="https://padlet.com/asialakay/loz0p1k78g4zv592">Web3 Development </NavDropdown.Item>
                            <NavDropdown.Item href="https://padlet.com/asialakay/fvc9yi3h4932">ESG & Wellness</NavDropdown.Item>

                            <NavDropdown.Divider />
                            <NavDropdown.Item href="https://padlet.com/asialakay/7r95wn8y6w5qewbv">
                                A/V & Music NFT Resources
                            </NavDropdown.Item>
                            <NavDropdown.Item href="https://padlet.com/asialakay/5whx56vtzv5vw8yy">
                                Web3 Help Wanted
                            </NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                    </Navbar.Collapse>


                    
                    
                </Container>
            </Navbar>
        </div>

    );

};

export default Navigation;