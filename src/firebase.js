import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyAlBF3zfj0NRsfiABxTwIF19pghUtjbqng",
    authDomain: "twitter-clone-dfdbc.firebaseapp.com",
    projectId: "twitter-clone-dfdbc",
    storageBucket: "twitter-clone-dfdbc.appspot.com",
    messagingSenderId: "143047414877",
    appId: "1:143047414877:web:3d5ae924fb9f0c6feee9b4",
    measurementId: "G-6EHWT1EFTE"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  export default db;
  