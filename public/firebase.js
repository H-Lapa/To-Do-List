
import firebase from "firebase";
const firebaseApp=firebase.initializeApp({
    apiKey: "AIzaSyBM7i4uyhaH8Pb7bxQD3EIQ7DddcRz34sM",
    authDomain: "todoapp-b9a56.firebaseapp.com",
    projectId: "todoapp-b9a56",
    storageBucket: "todoapp-b9a56.appspot.com",
    messagingSenderId: "734592971207",
    appId: "1:734592971207:web:d5419a2f981a4e14c269e2",
    measurementId: "G-1Z4ES19CSK"
});

const db=firebaseApp.firestore(); 
export default db;