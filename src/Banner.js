import React from "react";
import Navigation from "./shared/Navigation";
import YoutubeEmbed from "./components/YoutubeEmbed";
import MixcloudEmbed from "./components/MixcloudEmbed";
import { Container, Row, Col, ListGroup, Button } from "react-bootstrap";
//import Github from "./components/github";

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
       Hi, I'm Asia Lakay. </h3>
<p class="about">
    I'm a multimedia artist, audio composer, graphic & user interface designer, frontend development engineer, and creative technologist. My tech stack includes the following languages, tools and frameworks:
    </p>
    <p></p> 
    <ListGroup variant="flush" id="lg">
    <ListGroup.Item id="li">DAWs</ListGroup.Item>
  <ListGroup.Item id="li">Git</ListGroup.Item>
  <ListGroup.Item id="li">CI/CD</ListGroup.Item>
  <ListGroup.Item id="li">HTML5/CSS3/JavaScript</ListGroup.Item>
  <ListGroup.Item id="li">React.js</ListGroup.Item>
  <ListGroup.Item id="li">Responsive Web Design</ListGroup.Item>
  <ListGroup.Item id="li">Figma</ListGroup.Item>

</ListGroup>

        </div>
        <div id="header-four">
            <h5>My Portfolio</h5>
        
    <div class="shadowlink">
    <Container>
  <Row>
    <Col> 
    <ListGroup>
        <ListGroup.Item id="bg">
            <Button variant="dark" id="li" href="https://music-asiakayy.vercel.app/">AUDIO</Button>
        </ListGroup.Item>
    </ListGroup>
</Col>
    <Col>
    <ListGroup>
        <ListGroup.Item id="bg"> 
        <Button variant="dark" id="li" href="https://www.behance.net/ilyag">VISUALS</Button>   
        </ListGroup.Item>
    </ListGroup>
    </Col>
    <Col>
    <ListGroup>
          <ListGroup.Item id="bg">
          <Button variant="dark" id="li" href="https://www.github.com/asiakay">GITHUB </Button>

          </ListGroup.Item>
      </ListGroup>
    </Col>
  </Row>
  <Row>
      <Col>
      
      </Col>
  </Row>
  </Container>
  
</div>
 </div>

            <div id="watch">
            <div class="text-box">
		<h5>A/V Projection Mix</h5>
		<h5>A/V Projection Mix</h5>
	</div> 
               
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