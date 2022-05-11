import React from "react";
import { FormspreeProvider } from '@formspree/react';
import Banner from "./Banner";
import Signup from "./Signup";
import Footer from "./Footer";


function App(){
  return (
    <>
      <Banner/>
      <FormspreeProvider project="{FORMSPREE_PROJECT_ID}">
        <Signup/>
      </FormspreeProvider>  
      <Footer/>
    </>
  );
};

export default App;
