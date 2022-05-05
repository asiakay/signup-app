import React from "react";
import Banner from "./Banner";
// import Form from "./Form";
import Footer from "./Footer";
import { FormspreeProvider } from '@formspree/react';


function App({ Component, pageProps }){
  return (
    <>
      <Banner/>
      <FormspreeProvider project="1935891009925807142">
      <Component {...pageProps} />
      </FormspreeProvider>
      <Footer/>
    </>
  );
};

export default App;
