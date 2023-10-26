// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCU__nKWrSSdfarHVLDQTdEUkYYjOKSB20",
  authDomain: "auth-firebase-tailwind-c-e7b0b.firebaseapp.com",
  projectId: "auth-firebase-tailwind-c-e7b0b",
  storageBucket: "auth-firebase-tailwind-c-e7b0b.appspot.com",
  messagingSenderId: "1025083896858",
  appId: "1:1025083896858:web:cfaa1254ef04767d480da3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;