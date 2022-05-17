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
        
        <h3 className = "" > {
            " "
        } {" "}
        ASIALAKAY </h3>
       
        
        <h4>
            Science. Technology. Art. Nature. Design. 
            </h4> 
 <YoutubeEmbed embedId="l4s2VVagJeI" />
 <MixcloudEmbed />
 

  
 
 </div> </div> </div> </div> </div> </header>
    
   

    
    );
    
};


export default Banner;