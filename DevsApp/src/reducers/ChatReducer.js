const initialState ={
  chats:[],
  contacts:[],
  activeChat:'',
  nameChat:'',
  activeMessagens:[]
};

const ChatReducer = (state = initialState, action) => {
  switch(action.type){
    case 'setContactList':
      return {...state, contacts:action.payload.users};
      break;
    case 'setActiveChat':
      let title:'';

      for(var i in state.chats) {
        if (state.chats[i].key == action.payload.chatId) {
          title = state.chats[i].nameChat;
        }
      }
      return {...state, activeChat:action.payload.chatId, nameChat:title};
      break;
    case 'setChatList':
      return { ...state, chats:action.payload.chats };
      break;
    case 'setActiveChatMessage':
      return {...state, activeMessagens:action.payload.activeMessagens }
      break;
  }

  return state;
}

export default ChatReducer;