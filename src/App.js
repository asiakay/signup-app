import React, {useEffect} from "react";
import { useTranslation } from "react-i18next";
import { FormspreeProvider } from '@formspree/react';
import Header from "./shared/Header";
// import Banner from "./Banner";
import Signup from "./Signup";
import Footer from "./Footer";


// Chatbot imports 
/* import Chatbot from "react-chatbot-kit";
import ActionProvider from './bot/ActionProvider';
import MessageParser from './bot/MessageParser';
import config from './bot/config'; */
import 'react-chatbot-kit/build/main.css';


function App(){
  const { i18n } = useTranslation();

  useEffect(() => {
    document.dir = i18n.dir();
  }, [i18n, i18n.language]);


  return (

    <div className="App">

      <Header/>

      <FormspreeProvider project="{FORMSPREE_PROJECT_ID}">
        <Signup/>
      </FormspreeProvider>  

{/*       <Chatbot 
        config={config} 
        actionProvider={ActionProvider} 
        messageParser={MessageParser} 
        /> */}

      <Footer/>
      </div>

 
  );
};

export default App;
