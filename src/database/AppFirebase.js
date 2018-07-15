import firebase from 'firebase';

const config = {
    apiKey: "AIzaSyCywBDNXXPEFltjZ4Z_AMlC9GOJATOT5kE",
    authDomain: "jun-order-list.firebaseapp.com",
    databaseURL: "https://jun-order-list.firebaseio.com",
    projectId: "jun-order-list",
    storageBucket: "",
    messagingSenderId: "477962070191"
};

const database = firebase.initializeApp(config).database();

export default database;