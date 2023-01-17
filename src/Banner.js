inimport React from "react";
import Navigation from "./shared/Navigation";
import YoutubeEmbed from "./components/YoutubeEmbed";
import MixcloudEmbed from "./components/MixcloudEmbed";
import { Container, Row, Col, ListGroup, Button } from "react-bootstrap";
import { useTranslation } from "react-i18next";



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
As a full stack developer, IT/tech project manager, and visual UX/UI specialist, I am passionate about creating user-centered designs that effectively communicate the clients message while also being easy to use and navigate. With over 10 years of experience in the field, I have honed my abilities in full stack development, project management, and blockchain development. My portfolio is a collection of my finest works, including web design, graphic design, digital marketing, multimedia art, audio composition, front-end development engineering, and creative technology.

I am always looking for new opportunities to grow as a professional and to collaborate with others in the industry. If you are in need of a skilled and dedicated professional in the field of full stack development, IT/tech project management, and visual UX/UI, I would love to hear from you. Please don't hesitate to reach out to discuss potential projects or collaborations. Let's create something amazing together.



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
	</div> 
               
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
