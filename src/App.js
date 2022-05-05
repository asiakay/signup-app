import React from "react";
import Banner from "./Banner";
import Form from "./Form";
import Footer from "./Footer";
import { FormspreeProvider } from '@formspree/react';


const App = () => {
  return (
    <>
      <Banner/>
      <FormspreeProvider project="{moqrkebp}">
      <Form />
      </FormspreeProvider>

      <Footer/>
    </>
  );
};

export default App;
