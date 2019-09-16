import firebase from 'firebase'
var firebaseConfig = {
    apiKey: "AIzaSyAlFGoZEPc0rEYAYiUTnNYZmDbnkQdP20c",
    authDomain: "todo-app-25565.firebaseapp.com",
    databaseURL: "https://todo-app-25565.firebaseio.com",
    projectId: "todo-app-25565",
    storageBucket: "todo-app-25565.appspot.com",
    messagingSenderId: "600592089866",
    appId: "1:600592089866:web:1535bd7732529489"
};

firebase.initializeApp(firebaseConfig);
export const db = firebase.database() 