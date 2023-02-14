import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyABfk-ULS2UlSKzVYpIbyhVDehJhsjbTiY",
    authDomain: "databaseserver-ca79e.firebaseapp.com",
    databaseURL: "https://databaseserver-ca79e-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "databaseserver-ca79e",
    storageBucket: "databaseserver-ca79e.appspot.com",
    messagingSenderId: "281839601499",
    appId: "1:281839601499:web:d33893aebba25259457c7e"
  };
  
  // Initialize Firebase
 export  const app = initializeApp(firebaseConfig);
 export  const db = getFirestore(app);