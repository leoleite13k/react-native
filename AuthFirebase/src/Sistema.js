import firebase from './FirebaseConn';

class Sistema {

    logout() {
        firebase.auth().signOut();
    }

    listener(callback) {
        firebase.auth().onAuthStateChanged(callback);
    }

    login(email, senha) {
        return firebase.auth().signInWithEmailAndPassword(email, senha);
    }

    getUserInfo(callback) {
        firebase.database.ref('usuario')
        .child(firebase.auth().currentUser.uid)
        .once('value')
        .then(callback);
    }
}

export default new Sistema();