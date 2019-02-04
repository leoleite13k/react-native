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
    firebase.database().ref('users').child(userUid).child('chats').child(chatId).set({
      id:chatId
    });
    firebase.database().ref('users').child(contactUid).child('chats').child(chatId).set({
      id:chatId
    });

    dispatch({
      type:'setActiveChat',
      payload:{
        chatId:chatId
      }
    })
  }
};

/*
export const login = (email, password) => {
  return (dispatch) => {
    firebase.auth().signInWithEmailAndPassword(email, password)
    .then((user) => {
      let uid = firebase.auth().currentUser.uid;

      dispatch({
        type:'changeUID',
        payload:{
          uid:uid
        }
      });
    })
    .catch((error) => {
      switch(error.code) {
        case 'auth/invalid-email':
          alert("Email Inválido !");
          break;
        case 'auth/user-disabled':
          alert("Seu usuário está desativado !");
          break;
        case 'auth/user-not-found':
          alert("Não existe este usuário !");
          break;
        case 'auth/wrong-password':
          alert("Email ou Senha incorreta !");
          break;
      }
    });
  };
};
*/

/*
export const changeName = (name) => {
  return{
    type:'changeName',
    payload:{
      name:name
    }
  };
};
*/