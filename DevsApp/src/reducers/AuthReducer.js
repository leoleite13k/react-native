const initialState ={
  uid:'',
  name:'',
  email:'',
  password:'',
  status:0
};

const AuthReducer = (state = initialState, action) => {
  switch(action.type) {
    case 'changeStatus':
      return {...state, status:action.payload.status};
      break;
    case 'changeName':
      return {...state, name:action.payload.name};
      break;
    case 'changeEmail':
      return {...state, email:action.payload.email};
      break;
    case 'changePassword':
      return {...state, password:action.payload.password};
      break;
    case 'changeUID':
      return {...state, status:action.payload.status, uid:action.payload.uid};
      break;
  }

  return state;
};

export default AuthReducer;