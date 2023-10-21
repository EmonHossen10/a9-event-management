// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDyHwwg6L0-MtxlUxI4UwVhCzfjpka7SQ0",
  authDomain: "training-programs-ccea5.firebaseapp.com",
  projectId: "training-programs-ccea5",
  storageBucket: "training-programs-ccea5.appspot.com",
  messagingSenderId: "78416330981",
  appId: "1:78416330981:web:9029f2524342131c29940c",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
