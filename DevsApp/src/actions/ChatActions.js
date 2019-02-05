import firebase from '../config/FirebaseConn';

export const getContactList = (userUid) => {
  return (dispatch) => {
    firebase.database().ref('users').orderByChild('name').once('value')
    .then((snapshot) => {
      let users = [];

      snapshot.forEach((childItem) => {
        if (childItem.key != userUid) {
          users.push({
            key:childItem.key,
            name:childItem.val().name
          });
        }
      });
      dispatch({
        type:'setContactList',
        payload:{
          users:users
        }
      });
    });
  }
}

export const createChat = (userUid, contactUid) => {
  return(dispatch) => {
    //Structure chat
    let newChat = firebase.database().ref('chats').push();
    newChat.child('members').child(userUid).set({
      id:userUid
    });
    newChat.child('members').child(contactUid).set({
      id:contactUid
    });

    //Structure users
    let chatId = newChat.key;

    firebase.database().ref('users').child(contactUid).once('value')
    .then((snapshot) => {
        let contactName = snapshot.val().name

        firebase.database().ref('users').child(userUid).child('chats').child(chatId).set({
          id:chatId,
          nameChat:contactName
        });
    });

    firebase.database().ref('users').child(userUid).once('value')
    .then((snapshot) => {
        let userName = snapshot.val().name

        firebase.database().ref('users').child(contactUid).child('chats').child(chatId).set({
          id:chatId,
          nameChat:userName
        });
      });

    dispatch({
      type:'setActiveChat',
      payload:{
        chatId:chatId
      }
    });
  }
}

export const getChatList = (userUid) => {
  return(dispatch) => {
    firebase.database().ref('users').child(userUid).child('chats').on('value', (snapshot) => {
      let chats =[];

      snapshot.forEach((childItem) => {
        chats.push({
          key:childItem.key,
          nameChat:childItem.val().nameChat
        });
      });

      dispatch({
        type:'setChatList',
        payload:{
          chats:chats
        }
      });
    });
  }
}

export const setActiveChat = (chatId) => {
  return {
    type:'setActiveChat',
    payload:{
      chatId:chatId
    }
  }
}