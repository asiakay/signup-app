class ActionProvider {
  constructor(
   createChatBotMessage,
   setStateFunc,
   createClientMessage,
   stateRef,
   createCustomMessage,
   ...rest
 ) {
   this.createChatBotMessage = createChatBotMessage;
   this.setState = setStateFunc;
   this.createClientMessage = createClientMessage;
   this.stateRef = stateRef;
   this.createCustomMessage = createCustomMessage;
 }

 handleMessageParser = () => {
  const messages = this.createChatBotMessage(
    'The message parser controls how the bot reads input and decides which action to invoke.',
    { widget: 'messageParser', withAvatar: true }
  );

  this.addMessageToBotState(messages);
};

handleDefault = () => {
  const message = this.createChatBotMessage('How can I help?', {
    withAvatar: true,
  });

  this.addMessageToBotState(message);
};

addMessageToBotState = (messages) => {
  if (Array.isArray(messages)) {
    this.setState((state) => ({
      ...state,
      messages: [...state.messages, ...messages],
    }));
  } else {
    this.setState((state) => ({
      ...state,
      messages: [...state.messages, messages],
    }));
  }
};

}

export default ActionProvider;