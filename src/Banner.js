import React from "react";
import Navigation from "./shared/Navigation";
import YoutubeEmbed from "./components/YoutubeEmbed";
import MixcloudEmbed from "./components/MixcloudEmbed";



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
        ASIALAKAY </h3>
        </div>
        <div id="header-four">
        <h4>
            Science. Technology. Art. Nature. Design. 
            </h4> 
            </div>
            <div id="watch">
 <YoutubeEmbed embedId="l4s2VVagJeI" />
 </div>
 <MixcloudEmbed />
 

  
 
 </div> </div> </div> </div> </div> </header>
    
   

    
    );
    
};


export default Banner;