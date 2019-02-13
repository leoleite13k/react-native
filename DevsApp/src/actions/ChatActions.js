import firebase from '../config/FirebaseConn';

export const getContactList = (userUid, callback) => {
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

      callback();

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
    })
    .then(() => {
      dispatch({
        type:'setActiveChat',
        payload:{
          chatId:chatId
        }
      });
    })
  }
}

export const getChatList = (userUid, callback) => {
  return(dispatch) => {
    firebase.database().ref('users').child(userUid).child('chats').on('value', (snapshot) => {
      let chats =[];

      snapshot.forEach((childItem) => {
        chats.push({
          key:childItem.key,
          nameChat:childItem.val().nameChat
        });
      });

      callback();

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

export const sendImage = (uid, blob, progressCallback, sucessCallback) => {
  return (dispatch) => {
    let tmpKey = firebase.database().ref('chats').push().key;
    let image  = firebase.storage().ref().child('images').child(uid).child(tmpKey);

    image.put(blob, {contentType:'image/jpeg'})
      .on('state_changed',
        progressCallback,
        (error) => {
          alert(error.code);
        },
        () => {
          image.getDownloadURL()
            .then((url) => {
              sucessCallback(url);
            })
        });
  }
}

export const sendMessage = (type, msg, author, activeChat) => {
  return (dispatch) => {
    let dateNow = '';
    let date  = new Date();

    let day     = date.getDate();
    let month   = date.getMonth() +1;
    let hours   = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();

    if (day < 10) {
      day = "0" + day;
    }

    if (month < 10) {
      month = "0" + month;
    }

    if (hours < 10) {
      hours = "0" + hours;
    }

    if (minutes < 10) {
      minutes = "0" + minutes;
    }

    if (seconds < 10) {
      seconds = "0" + seconds;
    }

    //YYYY-MM-DD hh:mm:ss
    date = date.getFullYear()+"-"+month+"-"+day+" "+hours+":"+minutes+":"+seconds;

    let msgID = firebase.database().ref('chats').child(activeChat).child('messages').push();

    switch(type) {
      case 'text':
        msgID.set({
          type:type,
          date:date,
          message:msg,
          uid:author
        });
        break;
      case 'image':
        msgID.set({
          type:type,
          date:date,
          source:msg,
          uid:author
        });
        break;
    }
  }
}

export const monitorChat = (activeChat) => {
  return(dispatch) => {
    firebase.database().ref('chats').child(activeChat).child('messages').orderByChild('date').on('value', (snapshot) => {
      let arrayMessagens = [];

      snapshot.forEach((childItem) => {

        switch(childItem.val().type) {
          case 'text':
            arrayMessagens.push({
              key:childItem.key,
              type:childItem.type,
              date:childItem.val().date,
              message:childItem.val().message,
              uid:childItem.val().uid
            });
            break;
          case 'image':
            arrayMessagens.push({
              key:childItem.key,
              type:childItem.type,
              date:childItem.val().date,
              source:childItem.val().source,
              uid:childItem.val().uid
            });
            break;
        }
      });
      dispatch({
        type:'setActiveChatMessage',
        payload:{
          activeMessagens:arrayMessagens
        }
      });
    });
  }
}

export const monitorChatOff = (activeChat) => {
  return(dispatch) => {
    firebase.database().ref('chats').child(activeChat).child('messages').off();
  }
}