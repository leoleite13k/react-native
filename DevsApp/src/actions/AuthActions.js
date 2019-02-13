import firebase from '../config/FirebaseConn';

export const checkLogin = () => {
  return (dispatch) => {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        dispatch({
          type:'changeUID',
          payload:{
            uid:user.uid,
            status:1
          }
        });
      } else {
          dispatch({
            type:'changeUID',
            payload:{
              uid:'',
              status:2
            }
          });
      }
    });
  }
};

export const changeName = (name) => {
  return{
    type:'changeName',
    payload:{
      name:name
    }
  };
};

export const changeEmail = (email) => {
  return{
    type:'changeEmail',
    payload:{
      email:email
    }
  };
};

export const changePassword = (password) => {
  return{
    type:'changePassword',
    payload:{
      password:password
    }
  };
};

export const register = (name, email, password, callback) => {
  return (dispatch) => {
    firebase.auth().createUserWithEmailAndPassword(email, password)
    .then((user) => {
      let uid = firebase.auth().currentUser.uid;

      firebase.database().ref('users').child(uid).set({
        name:name
      });

      callback();

      dispatch({
        type:'changeUID',
        payload:{
          uid:uid
        }
      });
    })
    .catch((error) => {
      switch(error.code) {
        case 'auth/email-already-in-use':
          alert("Email já utilizado !")
          break;
        case 'auth/invalid-email':
          alert("Email inválido !")
          break;
        case 'auth/operation-not-allowed':
          alert("Tente novamente mais tarde !")
          break;
        case 'auth/weak-password':
          alert("Digite uma senha mais forte")
          break;
      }

      callback();
    });
  };
};

export const login = (email, password, callback) => {
  return (dispatch) => {
    firebase.auth().signInWithEmailAndPassword(email, password)
    .then((user) => {
      let uid = firebase.auth().currentUser.uid;

      callback();

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

      callback();
    });
  };
};

export const logout = () => {
  firebase.auth().signOut();

  return {
    type:'changeStatus',
    payload:{
      status:2
    }
  };
}