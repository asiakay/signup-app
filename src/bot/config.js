// Config starter code
import React from "react";
import { createChatBotMessage } from "react-chatbot-kit";
  
const botName = 'Asia K Bot';


const config = {
  initialMessages: [createChatBotMessage(`Hi! I'm a ${botName}`)],
  state: {
    myCustomProperty: 'Bikershorts',
  },
  botName: botName,
  customStyles: {
    botMessageBox: {
      backgroundColor: '#376B7E',
    },
    chatButton: {
      backgroundColor: '#5ccc9D',
    },
  },
};

export default config;