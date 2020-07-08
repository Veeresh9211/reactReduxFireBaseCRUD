import firebase from 'firebase';
var firebaseConfig = {
    apiKey: "AIzaSyDkcXPXkws0txAZvaP6FMfHYlPhesKKhTY",
    authDomain: "reactreduxtodoexample.firebaseapp.com",
    databaseURL: "https://reactreduxtodoexample.firebaseio.com",
    projectId: "reactreduxtodoexample",
    storageBucket: "reactreduxtodoexample.appspot.com",
    messagingSenderId: "155968295519",
    appId: "1:155968295519:web:fb54ab97fe78f5844101ea"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export default firebase;