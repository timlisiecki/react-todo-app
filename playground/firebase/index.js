import firebase from "firebase";

var config = {
    apiKey: "AIzaSyD7QiAyH30M_wSWTXy2-Rdlo1d_MZ-0Qxg",
    authDomain: "react-todo-app-661a0.firebaseapp.com",
    databaseURL: "https://react-todo-app-661a0.firebaseio.com",
    projectId: "react-todo-app-661a0",
    storageBucket: "react-todo-app-661a0.appspot.com",
    messagingSenderId: "387657429341"
  };
  firebase.initializeApp(config);

  
var firebaseRef = firebase.database().ref();

firebaseRef.set({
	app: {
		name: "Todo App",
		version: "1.0.0"
	},
	isRunning: true,
	user: {
		name: "Tim",
		age: 26
	}
});

var notesRef = firebaseRef.child("notes");

var newNoteRef = notesRef.push({
	text: "Walk the dog."
});