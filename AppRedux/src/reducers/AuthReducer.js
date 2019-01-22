const initialState = {
  nome:'',
  email:'',
  senha:''
};

const AuthReducer = (state = [], action) => {
  if (state.length == 0) {
    return initialState;
  }

  if (action.type == 'editNome') {
    return { ...state, nome:action.payload.nome };
  }

  if (action.type == 'editEmail') {
    return { ...state, email:action.payload.email };
  }

  if (action.type == 'editPassword') {
    return { ...state, senha:action.payload.senha };
  }

  if (action.type == 'cadastrar') {
    return {nome:action.payload.nome, email:action.payload.email, senha:action.payload.senha};
  }

  if (action.type == 'cadastroSucesso') {
    alert("Cadastrado com sucesso!");
    return state;
  }

  if (action.type === 'cadastroErro') {
    alert("Erro:"+action.payload.code)
    return state;
  }

  return state;
};

export default AuthReducer;