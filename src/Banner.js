import React from "react";
import Navigation from "./shared/Navigation";
//import YoutubeEmbed from "./components/YoutubeEmbed";
// import MixcloudEmbed from "./components/MixcloudEmbed";
import { Container, Row, Col, ListGroup, Button } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import gameguru1 from "./images/gameguru1.jpeg";
// import gameguru2 from "./images/gameguru2.jpeg";
// import avant_me_color from "./images/avant_me_color.jpeg";


const Banner = () => {
const { t } = useTranslation(); 

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
       {t("app_greet")} </h3>
<p class="about">
	Skilled full stack developer, IT/tech PM, and visual UX/UI specialist. Passionate about creating user-centered designs. 10+ years experience in web design, graphic design, digital marketing, multimedia art, audio composition, front-end development engineering, and creative technology. Seeking new opportunities for growth and collaboration in the industry. Let's create something amazing together.
	
	



</p>
   {/*
<p> 
    <ListGroup variant="flush" id="lg">
    <ListGroup.Item id="li">Music Theory & Sound Synthesis</ListGroup.Item>
    <ListGroup.Item id="li">Ableton Live - ProTools - Logic</ListGroup.Item>
    <ListGroup.Item id="li">HTML5/CSS3/JavaScript</ListGroup.Item>
    <ListGroup.Item id="li">Responsive Web Design</ListGroup.Item>
    <ListGroup.Item id="li">React UI Frameworks</ListGroup.Item>
    <ListGroup.Item id="li">Node.js & Express.js</ListGroup.Item>
    <ListGroup.Item id="li">Adobe Suite & Figma</ListGroup.Item>
    <ListGroup.Item id="li">Git - VCS - CI/CD</ListGroup.Item>
    <ListGroup.Item id="li">API Orchestration</ListGroup.Item>
    </ListGroup>
</p>
*/}

{/* <Chatbot 
    config={config}
    messageParser={MessageParser}
    actionProvider={ActionProvider}
    /> */}
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
		<h5>Under Construction</h5>
		<h5>Under Construction</h5>
        <p>   </p>
           

	</div> 
    <img src={gameguru1} alt="gameeguru1"/>

           {/*  <div class="text-box">
		<h5>Watch</h5>
		<h5>Watch</h5>
	</div> */}
{/*  <YoutubeEmbed embedId="l4s2VVagJeI" />
 */} </div>
 
{/*  <MixcloudEmbed />
 */} 

  
 
 </div> </div> </div> </div> </div> </header>

   

    
    );
    
};


export default Banner;
