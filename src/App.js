import React from "react";
import { FormspreeProvider } from '@formspree/react';
import Header from "./shared/Header";
// import Banner from "./Banner";
import Signup from "./Signup";
import Footer from "./Footer";

function App(){
  

  return (

    <div className="App">

      <Header/>

      <FormspreeProvider project="{FORMSPREE_PROJECT_ID}">
        <Signup/>
      </FormspreeProvider>  
      <Footer/>
      </div>

 
  );
};

export default App;
