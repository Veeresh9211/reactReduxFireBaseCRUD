import firebase from 'firebase';
const firebaseConfig = {
    apiKey: "AIzaSyC9ep4TD1Nce8y_XOza5tUi6qXZqMETrps",
    authDomain: "react-first-veeresh.firebaseapp.com",
    databaseURL: "https://react-first-veeresh.firebaseio.com",
    projectId: "react-first-veeresh",
    storageBucket: "react-first-veeresh.appspot.com",
    messagingSenderId: "721837820623",
    appId: "1:721837820623:web:430d28307bdf0d538685ba",
    measurementId: "G-X2HQJ1DH0K"
  };

  firebase.initializeApp(firebaseConfig);

  export default firebase;