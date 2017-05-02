import firebase from "firebase";

try {
	var config = {
    apiKey: "AIzaSyD7QiAyH30M_wSWTXy2-Rdlo1d_MZ-0Qxg",
    authDomain: "react-todo-app-661a0.firebaseapp.com",
    databaseURL: "https://react-todo-app-661a0.firebaseio.com",
    projectId: "react-todo-app-661a0",
    storageBucket: "react-todo-app-661a0.appspot.com",
    messagingSenderId: "387657429341"
  };

  firebase.initializeApp(config);
} catch (e) {

}

  
export var firebaseRef = firebase.database().ref();
export default firebase;
