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
      return {...state, activeChat:action.payload.chatId};
      break;
    case 'setChatList':
      return { ...state, chats:action.payload.chats };
      break;
  }

  return state;
}

export default ChatReducer;