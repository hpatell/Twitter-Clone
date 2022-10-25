import { initializeApp } from "firebase/app";
import { getFirestore, onSnapshot, where, query, collection } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { useState, useEffect } from "react";
import { useAuth } from './context/AuthContext';

const firebaseConfig = {
    apiKey: "AIzaSyAlBF3zfj0NRsfiABxTwIF19pghUtjbqng",
    authDomain: "twitter-clone-dfdbc.firebaseapp.com",
    projectId: "twitter-clone-dfdbc",
    storageBucket: "twitter-clone-dfdbc.appspot.com",
    messagingSenderId: "143047414877",
    appId: "1:143047414877:web:3d5ae924fb9f0c6feee9b4",
    measurementId: "G-6EHWT1EFTE"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export const auth = getAuth(app);
export default db;

export function GetUser() {
    const { currentUser } = useAuth();
    const [usernameRef, setusernameRef] = useState("");
    const [firstNameRef, setfirstNameRef] = useState("");
    const [lastNameRef, setlastNameRef] = useState("");
    const [avatarRef, setavatarRef] = useState("");
    const [verifiedRef, setverifiedRef] = useState(true);

    useEffect(() => {
      const userRef = query(collection(db, "users"), where("email", "==", currentUser.email));
      onSnapshot(userRef, (snapshot) => {
        snapshot.forEach((doc) => {
          setusernameRef(doc.data().username);
          setfirstNameRef(doc.data().firstName);
          setlastNameRef(doc.data().lastName);
          setavatarRef(doc.data().avatar);
          setverifiedRef(doc.data().verified);
        });
      });
    }, [currentUser]);
    
    return [usernameRef, firstNameRef, lastNameRef, avatarRef, verifiedRef];
}
