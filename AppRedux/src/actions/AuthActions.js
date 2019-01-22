import firebase from '../FirebaseConn';

export const editNome = (nome) => {
  return{
    type:'editNome',
    payload:{
      nome:nome
    }
  };
};

export const editEmail = (email) => {
  return{
    type:'editEmail',
    payload:{
      email:email
    }
  };
};

export const editPassword = (senha) => {
  return{
    type:'editPassword',
    payload:{
      senha:senha
    }
  };
};

export const cadastrar = (nome, email, senha) => {
  return (dispatch) => {
    firebase.auth().createUserWithEmailAndPassword(email, senha)
    .then((user) => {
      dispatch({
        type:'cadastroSucesso'
      });
    })
    .catch((error) => {
      dispatch({
        type:'cadastroErro',
        payload:{
          code:error.code
        }
      });
    });
  }
};