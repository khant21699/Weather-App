// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBNOMGaCT2M1mqFO4CIWRBPsRIpKRMdFyA",
  authDomain: "weather-app-363e8.firebaseapp.com",
  projectId: "weather-app-363e8",
  storageBucket: "weather-app-363e8.appspot.com",
  messagingSenderId: "932837111964",
  appId: "1:932837111964:web:666c6b0a7f83adf3989559",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
