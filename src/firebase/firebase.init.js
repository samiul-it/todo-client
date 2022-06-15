// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBXPrz-x-E1gkGRTaEizhW9hRUziJGLfDM",
  authDomain: "to-do-application-b0111.firebaseapp.com",
  projectId: "to-do-application-b0111",
  storageBucket: "to-do-application-b0111.appspot.com",
  messagingSenderId: "430407390682",
  appId: "1:430407390682:web:f5c21d232dd3e2b5495ce3",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;
