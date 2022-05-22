import React from "react";
import Navigation from "./shared/Navigation";
import YoutubeEmbed from "./components/YoutubeEmbed";
import MixcloudEmbed from "./components/MixcloudEmbed";
import { Container, Row, Col, ListGroup } from "react-bootstrap";

const Banner = () => {
    return ( <header>
<Navigation />

        <div className = "banner"> 
        <div className = "container" >
        <div className = "row" >
        <div className = "col-lg-9 offset-lg-3 mx-auto" >
        <div className = "caption-text text-center" >
        <div id="header-three">
        
        <h3 className = "" > {
            " "
        } {" "}
        Audio / Visual / Web </h3>
        </div>
        <div id="header-four">
         <div class="text-box">
		<h5>My Portfolio</h5>
		<h5>My Portfolio</h5>
	</div> 
    <div class="shadowlink">
    <Container>
  <Row>
    <Col> 
    <a href="https://www.github.com/asiakay">The source code for my web projects are accessible through my Github profile. </a>
</Col>
    <Col>
    <ListGroup>
        <ListGroup.Item>
    <a href="https://www.github.com/asialakay">Click here for Github</a>
        </ListGroup.Item>
    </ListGroup>
    </Col>
  </Row>
  </Container>
  
</div>
 </div>

            <div id="watch">
           {/*  <div class="text-box">
		<h5>Watch</h5>
		<h5>Watch</h5>
	</div> */}
 <YoutubeEmbed embedId="l4s2VVagJeI" />
 </div>
 
 <MixcloudEmbed />
 

  
 
 </div> </div> </div> </div> </div> </header>

   

    
    );
    
};


export default Banner;