// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCCloOFjJryoZkPcsDseEuRX-RM6RQOHEY",
  authDomain: "dragon-new-auth-50d42.firebaseapp.com",
  projectId: "dragon-new-auth-50d42",
  storageBucket: "dragon-new-auth-50d42.firebasestorage.app",
  messagingSenderId: "646694950173",
  appId: "1:646694950173:web:550bcd2aeccd8c4cb2bdf4",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
