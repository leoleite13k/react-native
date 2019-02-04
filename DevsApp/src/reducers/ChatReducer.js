const initialState ={
  chats:[],
  contacts:[],
  activeChat:''
};

const ChatReducer = (state = initialState, action) => {
  switch(action.type){
    case 'setContactList':
      return {...state, contacts:action.payload.users};
      break;
    case 'setActiveChat':
      return {...state, activeChat:action.payload.chatID};
      break;
  }

  return state;
}

export default ChatReducer;