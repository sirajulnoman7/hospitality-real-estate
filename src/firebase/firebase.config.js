

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDynKp0wcwUVA6F7IR8-3sRt8w2cfhyRE0",
  authDomain: "leisure-real-estate.firebaseapp.com",
  projectId: "leisure-real-estate",
  storageBucket: "leisure-real-estate.appspot.com",
  messagingSenderId: "681796742070",
  appId: "1:681796742070:web:d8d59aad946e5c2de12f17"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;