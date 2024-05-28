// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-blog-e58b5.firebaseapp.com",
  projectId: "mern-blog-e58b5",
  storageBucket: "mern-blog-e58b5.appspot.com",
  messagingSenderId: "255911374022",
  appId: "1:255911374022:web:b1aeb7a3e2c3b758adbbc7",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
