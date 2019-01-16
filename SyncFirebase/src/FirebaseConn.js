import firebase from 'firebase';

var config = {
    apiKey: "AIzaSyC-6lkzPWBUVlZtzIQ6GhFacKZ57stT8o0",
    authDomain: "projeto-teste-b38a7.firebaseapp.com",
    databaseURL: "https://projeto-teste-b38a7.firebaseio.com",
    projectId: "projeto-teste-b38a7",
    storageBucket: "projeto-teste-b38a7.appspot.com",
    messagingSenderId: "753623237460"
};
firebase.initializeApp(config);

export default firebase;