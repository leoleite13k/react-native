import firebase from '@firebase/app';
import '@firebase/auth';
import '@firebase/storage';
import '@firebase/database';

  var config = {
    apiKey: "AIzaSyB6cOhkk5nNClavgMp23It8KXW0MBcxMaM",
    authDomain: "devsapp-1c94e.firebaseapp.com",
    databaseURL: "https://devsapp-1c94e.firebaseio.com",
    projectId: "devsapp-1c94e",
    storageBucket: "devsapp-1c94e.appspot.com",
    messagingSenderId: "220497154899"
  };
  firebase.initializeApp(config);

  export default firebase;