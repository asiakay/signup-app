import React from "react";
import Github from "./components/github";
import Twitter from "./components/twitter"

const Footer = () => {
    return ( <footer className = "d-block" >
        
        <nav class="navbar fixed-bottom bg-light">
<div class="container-fluid">
        <p className = "text-center" > © 2022 ASIALAKAY.NET </p>
        <p className="text-center">
        <a href="https://www.twitter.com/asialakay"><Twitter /></a> / <a href="https://www.github.com/asiakay"><Github/></a>
 </p>
        </div>
        </nav>
 </footer>
    );
};
export default Footer;